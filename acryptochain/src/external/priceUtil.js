import { useState, useEffect } from "react";
import { parseBNumber } from "../services/app_utils";
import { CONTRACT_FOR_BNB, LIQ_BNB_CONTRACT } from "../constants/liq_app_constants";
import { BSC_NODE_PROVIDER } from "../constants/NetworkProviders"
import Web3 from "web3";

/**
 * @returns Price of BNB in USD
 */
export const BNBPrice = () => {
    const [bnbPrice, setBnbPrice] = useState(0.0);

    useEffect(() => {
        const getTokenPrice = async () => {
            try {
                const web3 = new Web3(BSC_NODE_PROVIDER);
                const bnbContract = new web3.eth.Contract(CONTRACT_FOR_BNB.abi, CONTRACT_FOR_BNB.address);
                const balanceInfo = await bnbContract.methods.getReserves().call();
                const busdAmount = parseBNumber(balanceInfo._reserve1, 18);
                const bnbAmount = parseBNumber(balanceInfo._reserve0, 18);
                const bnbPrice = busdAmount / bnbAmount;
                setBnbPrice(Number(bnbPrice).toFixed(3))
            } catch (error) {
                console.error(error);
            }
        };
        getTokenPrice();
    }, []);
    return bnbPrice;
};

/**
 * @returns Price of LIQ token in USD
 */
export const LiquidusPrice = () => {
    const [tokenPrice, setTokenPrice] = useState(0.0);

    useEffect(() => {
        const getTokenPrice = async () => {
            try {
                const web3 = new Web3(BSC_NODE_PROVIDER);
                const bnbContract = new web3.eth.Contract(CONTRACT_FOR_BNB.abi, CONTRACT_FOR_BNB.address);
                const balanceInfo = await bnbContract.methods.getReserves().call();
                const busdAmount = parseBNumber(balanceInfo._reserve1, 18);
                const bnbAmount = parseBNumber(balanceInfo._reserve0, 18);
                const bnbPrice = busdAmount / bnbAmount;

                const liqContract = new web3.eth.Contract(LIQ_BNB_CONTRACT.abi, LIQ_BNB_CONTRACT.address);
                const liqInfo = await liqContract.methods.getReserves().call();
                const bnb = parseBNumber(liqInfo._reserve0, 18);
                const liqAmount = parseBNumber(liqInfo._reserve1, 18);
                const liqPrice = bnb * bnbPrice / liqAmount;

                setTokenPrice(Number(liqPrice).toFixed(3))
            } catch (error) {
                console.error(error);
            }
        };
        getTokenPrice();
    }, []);
    return tokenPrice;
};

export default BNBPrice;
