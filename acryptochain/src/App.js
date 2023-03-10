/**
 * @author Kushal Paudyal
 * Written For Sanjaal Corps
 * https://www.acryptochan.com
 * @since Februrary 2023
 * 
 * Use it at your own risk. Author provides no liablity of any sort.
 */
import { useState, useEffect } from 'react';
import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2'

import Web3 from 'web3';
import './App.css';

import Container from '@mui/material/Container';

import { BNBPrice, LiquidusPrice, LIQTokenInfo } from './external/TokenUtils';
import { PROJECT_CONTRACT_LIST_ALL_CHAINS, PROJECT_META } from './projects/liquidus/config/ProjectConfig';

import RewardsDetail from './components/RewardsDetail';
import { selectProject } from './components/ProjectSelectionForm';
import { WalletEntryForm } from './components/WalletEntryForm';
import { GetLiquidusPrice } from './external/TokenPrice';
import ProjectSocials from './components/ProjectSocials';

const App = () => {
  /** User Inputs on UI **/
  const [walletAddresses, setWalletAddresses] = useState('');
  const [selectedProject, setSelectedProject] = useState('');

  /** API call results **/
  const [poolHarvestResult, setPoolHarvestResult] = useState([])
  const [balanceOf, setBalanceOf] = useState([]);
  const [balanceCalcuationErrors, setBalanceCalculationErros] = useState([]);
  const [tokenPrice, setTokenPrice] = useState(0.0);

  /** Flag to indicate if data has been loaded. **/
  const [loaded, setLoaded] = useState(false);

  const handleWalletInputChange = event => {
    setWalletAddresses(event.target.value);
    resetData(setPoolHarvestResult, setBalanceOf, setBalanceCalculationErros);
  };

  const handleProjectChange = event => {
    setSelectedProject(event.target.value);
    //remember selected project
    localStorage.setItem('selectedProject', event.target.value);
    resetData();
  };

  function resetData() {
    setPoolHarvestResult(null);
    setBalanceOf(null);
    setBalanceCalculationErros(null);
    setLoaded(false)
  }

  /** Use locally stored wallet addresses and project names if cached earlier **/
  useEffect(() => {
    const storedWalletAddress = localStorage.getItem('storedWalletAddress');
    if (storedWalletAddress) {
      setWalletAddresses(storedWalletAddress);
    }

    const selectedProject = localStorage.getItem('selectedProject');
    if (selectedProject) {
      setSelectedProject(selectedProject);
    }

  }, []);


  /** Pool Specific Operations */
  const handleWalletSubmit = async event => {
    event.preventDefault();

    //store wallet address to local storage for reuse
    localStorage.setItem('storedWalletAddress', walletAddresses);

    setLoaded(false)
    setPoolHarvestResult([])
    setBalanceOf([])
    setBalanceCalculationErros([])

    const separator = /[;,\n\r\t]/;

    const walletAddressList = walletAddresses.split(separator);

    var tokenPrice = await GetLiquidusPrice();
    //console.log("Token Price: " + tokenPrice)
    setTokenPrice(tokenPrice);


    /* Wallet Address field can accept multiple addresses, so split it and run the logic for each address*/
    walletAddressList.forEach(address => {
      PROJECT_CONTRACT_LIST_ALL_CHAINS.forEach(chainContracts => {

        //Loop through the pools on each chain
        chainContracts.contractList.forEach(c => {
          const web3Object = new Web3(new Web3.providers.HttpProvider(chainContracts.provider));
          let web3Contract = new web3Object.eth.Contract(c.abi, c.address);
          getharvestReadyTokens(c, chainContracts.chain, web3Contract, String(address).trim(), setPoolHarvestResult)
        });

        //Find total balance by Chain
        const web3Object = new Web3(new Web3.providers.HttpProvider(chainContracts.provider));
        const tokenContract = new web3Object.eth.Contract(chainContracts.singleTokenAbi, chainContracts.singleTokenAddress);
        //console.log("Chain: " + chainContracts.chain + " Address: " + chainContracts.singleTokenAddress)
        getBalanceOf(chainContracts.chain, tokenContract, address, setBalanceOf, setBalanceCalculationErros)

      });
    });
    setLoaded(true)
  };

  return (
    <Container sx={{ border: 1, my: 10, pb: 10 }} className='outerContainer'>
      <h3>DeFi Tools | BNB Price:  <font color="#007600">$<BNBPrice /></font>  {selectedProject === 'liq' && <> | LIQ Price: <font color="#007600">$<LiquidusPrice /></font></>}</h3>
      {selectedProject === 'liq' && <LIQTokenInfo />}

      <Grid spacing={2} className='outerContainer'>
        <Grid>
          {selectProject(selectedProject, handleProjectChange)}
        </Grid>
        <Grid>
          {selectedProject && ProjectSocials(PROJECT_META)}
        </Grid>
      </Grid>
      {selectedProject && WalletEntryForm(handleWalletSubmit, walletAddresses, handleWalletInputChange)}
      {loaded && poolHarvestResult && RewardsDetail(poolHarvestResult, balanceOf, balanceCalcuationErrors, tokenPrice)}
    </Container>

  );
};

async function getharvestReadyTokens(contractObj, chain, contract, walletAddress, setStateFunction) {
  try {
    const pendingReward = await contract.methods.pendingReward(walletAddress).call();
    const userInfo = await contract.methods.userInfo(walletAddress).call();

    const pendingRewardEther = Web3.utils.fromWei(pendingReward, 'ether');
    // const rewardDebtEther = Web3.utils.fromWei(userInfo.rewardDebt, 'ether');
    const rewardDebtEther = userInfo.rewardDebt / 1e18
    const amountEther = Web3.utils.fromWei(userInfo.amount, 'ether');
    const datlastDepositedDate = new Date(Number(userInfo.lastDepositedAt) * 1000).toISOString('en-US');

    const poolHarvestResult = {
      chain: chain,
      walletAddress: walletAddress,
      poolName: contractObj.contractUniqueName,
      harvestReadyTokens: pendingRewardEther,
      userInfo: { amount: amountEther, rewardDebt: rewardDebtEther, lastDepositedAt: datlastDepositedDate },
      contractLink: contractObj.contractLink,
      addressExplorer: contractObj.addressExplorer,
      type: contractObj.type, 
      vestingPeriodInMonths: contractObj.vestingPeriodInMonths,
    };
    setStateFunction(prevState => [...prevState, poolHarvestResult]);
  } catch (error) {
    console.error(error);
  }
}

async function getBalanceOf(chain, contract, walletAddress, setStateFunction, setErrorFunction) {
  try {

    const result = await contract.methods.balanceOf(walletAddress).call()
    const rewardsEther = Web3.utils.fromWei(result, 'ether');
    const balance = {
      chain: chain,
      wallet: walletAddress,
      balance: rewardsEther
    }
    //console.log(balance)
    setStateFunction(prevState => [...prevState, balance]);

  } catch (error) {
    console.log("Error Fetching Balance: " + error)
    setErrorFunction(prevState => [...prevState, { chain: chain, wallet: walletAddress, balance: 'Error calculating balance on this chain' }]);
  }

}

export default App;