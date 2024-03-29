//common abis

//bsc abis
import BSC_LIQ_BNB_LP_TOKEN_ABI from '../abis/bsc/liq_bnb_abi.json'
import BSC_LIQ_SINGLE_TOKEN_ABI from '../abis/bsc/liq_single_token_abi.json'
import BSC_LIQ_FARM_CONTRACT_ABI from '../abis/bsc/liq_bsc_farm_single_token_abi.json';

//cronos abis
import CRONOS_LIQ_SINGLE_TOKEN_ABI from '../abis/cronos/cronos_liq_single_token_abi.json'
import CRONOS_LIQ_CRO_LP_TOKEN_ABI from '../abis/cronos/liq_cro_lp_abi.json'
import CRONOS_LIQ_FARM_SINGLE_TOKEN_ABI from '../abis/cronos/liq_cronos_farm_single_token_abi.json'

//matic abis
import POLYGON_LIQ_SINGLE_TOKEN_ABI from '../abis/matic/polygon_matic_liq_token_abi.json'
import POLYGON_LIQ_MATIC_LP_TOKEN_ABI from '../abis/matic/polygon_liq_matic_lp_abi.json'

//eth abis
import ETH_LIQ_ETH_LP_TOKEN_ABI from '../abis/eth/eth_liq_eth_lp_abi.json'
import ETh_LIQ_SINGLE_TOKEN_ABI from '../abis/eth/eth_liq_token_abi.json'

import { bscNet, cronosNet, ethNet, polygonNet } from '../../../constants/networks'
import { MATIC_NODE_PROVIDER, BSC_NODE_PROVIDER, CRONOS_NODE_PROVIDER, ETH_NODE_PROVIDER, BSC, MATIC, CRO, ETH, BSC_IMAGE, ETH_IMAGE, CRO_IMAGE, MATIC_IMAGE } from '../../../constants/NetworkProviders';

export const PROJECT_META = {
    name: 'Liquidus',
    logoUrl: '/images/logo_liquidus.png',
    socials: [
        {name: 'Website', link: 'https://liquidus.finance'},
        {name: 'Twitter', link: 'https://twitter.com/LiquidusFinance'},
        {name: 'Telegram', link: 'https://t.me/liquidusfinance'},
        {name: 'Instagram', link: 'https://www.instagram.com/liquidus_finance/'},
        {name: 'Discord', link: 'https://discord.gg/zfQUjejyRs'},
        {name: 'Documentation', link: 'https://docs.liquidus.finance/'},
        {name: 'Email', link: 'mailto:team@liquidus.finance'},
        {name: 'Blog', link: 'https://medium.com/@liquidus'},
        {name: 'Github', link: 'https://github.com/Liquidus-Finance'},
        {name: 'Whitepaper', link: 'https://liquidus.finance/#Litepaper'},
        {name: 'CMC', link: 'https://coinmarketcap.com/currencies/liquidus/'},
        {name: 'CoinGecko', link: 'https://www.coingecko.com/en/coins/liquidus/'},
        
    ]
}

export const BSC_LIQ_SINGLE_TOKEN_CONTRACT = {
    address: '0xc7981767f644C7F8e483DAbDc413e8a371b83079',
    abi: BSC_LIQ_SINGLE_TOKEN_ABI
}

export const MATIC_LIQ_SINGLE_TOKEN_CONTRACT = {
    address: '0x4036f3d9c45a20f44f0b8B85dD6CA33005fF9654',
    abi: POLYGON_LIQ_SINGLE_TOKEN_ABI
}

export const CRONOS_LIQ_SINGLE_TOKEN_CONTRACT = {
    address: '0xABd380327Fe66724FFDa91A87c772FB8D00bE488',
    abi: CRONOS_LIQ_SINGLE_TOKEN_ABI
}

export const ETH_LIQ_SINGLE_TOKEN_CONTRACT = {
    address: '0x5f69b7ab8f7cab199a310fd5a27b43fef44ddcc0',
    abi: ETh_LIQ_SINGLE_TOKEN_ABI
}

export const LIQ_BNB_CONTRACT = {
    address: '0x1F04Bf1938a36fF0BD6f811Ee5EF6822Ecb6ED49',
    abi: BSC_LIQ_BNB_LP_TOKEN_ABI
}

export const LIQ_ETH_CONTRACT = {
    address: '0x13c869bb9519353643269846ad6f96F59c1F4F3e',
    abi: ETH_LIQ_ETH_LP_TOKEN_ABI
}

export const LIQ_CRO_CONTRACT = {
    address: '0x3295007761C290741B6b363b86dF9ba3467F0754',
    abi: CRONOS_LIQ_CRO_LP_TOKEN_ABI
}

export const LIQ_MATIC_CONTRACT = {
    address: '0x2F5a5E6FF15B9B342e6292e2F179e7199f88922F',
    abi: POLYGON_LIQ_MATIC_LP_TOKEN_ABI
}



/** LIQUIDUS BSC CONTRACT LIST */
export const BSC_CONTRACT_LIST = [
    {
        chain: 'BSC',
        provider: BSC_NODE_PROVIDER,
        contractUniqueName: 'Biswap LIQ-BNB No Vesting',
        address: '0x787fa31b4d75E45c1B83649510a588D580Eb4f57',
        lpSwapToken: '0x99e338d7524887e93e6f24582aab9ee9845e1353',
        rewardToken: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        abi: BSC_LIQ_FARM_CONTRACT_ABI,
        tokenAbi: BSC_LIQ_SINGLE_TOKEN_ABI,
        vestingPeriodInMonths: 0,
        type: 'LP',
        contractLink: 'https://bscscan.com/address/0x787fa31b4d75E45c1B83649510a588D580Eb4f57',
        link: 'https://exchange.biswap.org/#/add/ETH/',
        addressExplorer: bscNet[0].addressExplorerPrefixURL
    },
    {
        chain: 'BSC',
        provider: BSC_NODE_PROVIDER,
        contractUniqueName: "Pancakeswap LIQ-BNB 1 Month",
        address: '0xb944b748A35B6dFFDd924bffD85910F968943a72',
        lpSwapToken: '0x1f04bf1938a36ff0bd6f811ee5ef6822ecb6ed49',
        rewardToken: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        abi: BSC_LIQ_FARM_CONTRACT_ABI,
        tokenAbi: BSC_LIQ_SINGLE_TOKEN_ABI,
        vestingPeriodInMonths: 1,
        type: 'LP',
        contractLink: 'https://bscscan.com/address/0xb944b748A35B6dFFDd924bffD85910F968943a72',
        link: 'https://pancakeswap.finance/add/BNB/',
        addressExplorer: bscNet[0].addressExplorerPrefixURL
    },
    {
        chain: 'BSC',
        provider: BSC_NODE_PROVIDER,
        contractUniqueName: "Apeswap LIQ-BUSD 1 Month",
        address: '0x7A0D4A0D88994E73a9eDCd79Ecad9097aCb1d937',
        lpSwapToken: '0x759584fe196fb2e3f5bf2eff8c2747741d5ecf59',
        rewardToken: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        abi: BSC_LIQ_FARM_CONTRACT_ABI,
        tokenAbi: BSC_LIQ_SINGLE_TOKEN_ABI,
        vestingPeriodInMonths: 1,
        type: 'LP',
        contractLink: 'https://bscscan.com/address/0x7A0D4A0D88994E73a9eDCd79Ecad9097aCb1d937',
        link: 'https://app.apeswap.finance/add/',
        addressExplorer: bscNet[0].addressExplorerPrefixURL
    },
    {
        chain: 'BSC',
        provider: BSC_NODE_PROVIDER,
        contractUniqueName: "Biswap LIQ-BNB 3 Months",
        address: '0x19646186D7364b8c1Fb60f9772d2B186EA68983D',
        lpSwapToken: '0x99e338d7524887e93e6f24582aab9ee9845e1353',
        rewardToken: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        abi: BSC_LIQ_FARM_CONTRACT_ABI,
        tokenAbi: BSC_LIQ_SINGLE_TOKEN_ABI,
        vestingPeriodInMonths: 3,
        type: 'LP',
        contractLink: 'https://bscscan.com/address/0x19646186D7364b8c1Fb60f9772d2B186EA68983D',
        link: 'https://exchange.biswap.org/#/add/ETH/',
        addressExplorer: bscNet[0].addressExplorerPrefixURL
    },
    {
        chain: 'BSC',
        provider: BSC_NODE_PROVIDER,
        contractUniqueName: "LIQ Single Token 1 Month",
        address: '0xbeBCd3aD501Fc425a71CDC7593CEDeA324176E92',
        stakedToken: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        rewardToken: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        abi: BSC_LIQ_FARM_CONTRACT_ABI,
        tokenAbi: BSC_LIQ_SINGLE_TOKEN_ABI,
        vestingPeriodInMonths: 1,
        type: 'LIQ',
        multiplier: 10,
        contractLink: 'https://bscscan.com/address/0xbeBCd3aD501Fc425a71CDC7593CEDeA324176E92',
        link: 'https://exchange.biswap.org/#/swap?outputCurrency=',
        addressExplorer: bscNet[0].addressExplorerPrefixURL
    },
    {
        chain: 'BSC',
        provider: BSC_NODE_PROVIDER,
        contractUniqueName: "LIQ Single Token 3 Months",
        address: '0x5CcD597728b1F088bFB749D9a9798ED0C6e2211C',
        stakedToken: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        rewardToken: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        abi: BSC_LIQ_FARM_CONTRACT_ABI,
        tokenAbi: BSC_LIQ_SINGLE_TOKEN_ABI,
        vestingPeriodInMonths: 3,
        type: 'LIQ',
        multiplier: 15,
        contractLink: 'https://bscscan.com/address/0x5CcD597728b1F088bFB749D9a9798ED0C6e2211C',
        link: 'https://exchange.biswap.org/#/swap?outputCurrency=',
        addressExplorer: bscNet[0].addressExplorerPrefixURL
    },
    {
        chain: 'BSC',
        provider: BSC_NODE_PROVIDER,
        contractUniqueName: "LIQ Single Token 6 Months",
        address: '0xAb97B17B1547A8776299D4934fF5C8c7b247db6A',
        stakedToken: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        rewardToken: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        abi: BSC_LIQ_FARM_CONTRACT_ABI,
        tokenAbi: BSC_LIQ_SINGLE_TOKEN_ABI,
        vestingPeriodInMonths: 6,
        type: 'LIQ',
        multiplier: 15,
        contractLink: 'https://bscscan.com/address/0xAb97B17B1547A8776299D4934fF5C8c7b247db6A',
        link: 'https://exchange.biswap.org/#/swap?outputCurrency=',
        addressExplorer: bscNet[0].addressExplorerPrefixURL
    },
    {
        chain: 'BSC',
        provider: BSC_NODE_PROVIDER,
        contractUniqueName: 'LIQ Single Token 12 Months',
        address: '0xc6AEd0e5B81383Fd8537f4f805492732BDf8efC0',
        stakedToken: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        rewardToken: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        abi: BSC_LIQ_FARM_CONTRACT_ABI,
        tokenAbi: BSC_LIQ_SINGLE_TOKEN_ABI,
        vestingPeriodInMonths: 12,
        type: 'LIQ',
        multiplier: 25,
        contractLink: 'https://bscscan.com/address/0xc6AEd0e5B81383Fd8537f4f805492732BDf8efC0',
        link: 'https://exchange.biswap.org/#/swap?outputCurrency=',
        addressExplorer: bscNet[0].addressExplorerPrefixURL
    }
];


/** LIQUIDUS ETH CONTRACT LIST */
export const ETH_CONTRACT_LIST = [
    {
        chain: 'ETH',
        provider: ETH_NODE_PROVIDER,
        contractUniqueName: 'Uniswap LIQ-ETH 1 Month',
        address: '0xd27fab2323edb75af6f4348e3745247e77690e53',
        lpSwapToken: '0x13c869bb9519353643269846ad6f96F59c1F4F3e',
        rewardToken: '0x5F69b7Ab8F7cAb199a310Fd5A27B43Fef44ddcC0',
        abi: ETH_LIQ_ETH_LP_TOKEN_ABI,
        tokenAbi: ETh_LIQ_SINGLE_TOKEN_ABI,
        vestingPeriodInMonths: 1,
        type: 'LP',
        title: 'UniSwap',
        contractLink: 'https://etherscan.io/address/0xd27fab2323edb75af6f4348e3745247e77690e53',
        link: 'https://app.uniswap.org/#/add/v2/ETH/0x5F69b7Ab8F7cAb199a310Fd5A27B43Fef44ddcC0?chain=mainnet',
        addressExplorer: ethNet[0].addressExplorerPrefixURL
    },
];


/** LIQUIDUS CRONOS CONTRACT LIST */
export const CRONOS_CONTRACT_LIST = [
    {
        chain: 'CRONOS',
        provider: CRONOS_NODE_PROVIDER,
        contractUniqueName: 'CronaSwap LIQ-CRO No Vesting',
        address: '0x1c7fDE0a9619bC81b23cAEF6992288BA5547a34F',
        lpSwapToken: '0x3295007761C290741B6b363b86dF9ba3467F0754',
        rewardToken: '0xABd380327Fe66724FFDa91A87c772FB8D00bE488',
        abi: CRONOS_LIQ_CRO_LP_TOKEN_ABI,
        tokenAbi: CRONOS_LIQ_SINGLE_TOKEN_ABI,
        vestingPeriodInMonths: 0,
        type: 'LP',
        contractLink: 'https://cronos.crypto.org/explorer/address/0x1c7fDE0a9619bC81b23cAEF6992288BA5547a34F/contracts',
        link: 'https://app.cronaswap.org/add/CRO/',
        addressExplorer: cronosNet[0].addressExplorerPrefixURL
    },
    {
        chain: 'CRONOS',
        provider: CRONOS_NODE_PROVIDER,
        contractUniqueName: 'Cronos LIQ Single Token No Vesting',
        address: '0xc7981767f644C7F8e483DAbDc413e8a371b83079',
        stakedToken: '0xABd380327Fe66724FFDa91A87c772FB8D00bE488',
        rewardToken: '0xABd380327Fe66724FFDa91A87c772FB8D00bE488',
        abi: CRONOS_LIQ_FARM_SINGLE_TOKEN_ABI,
        tokenAbi: CRONOS_LIQ_CRO_LP_TOKEN_ABI,
        vestingPeriodInMonths: 3,
        type: 'LIQ',
        multiplier: 15,
        contractLink: 'https://cronos.crypto.org/explorer/address/0xc7981767f644C7F8e483DAbDc413e8a371b83079/contracts',
        link: 'https://app.cronaswap.org/swap?outputCurrency=',
        addressExplorer: cronosNet[0].addressExplorerPrefixURL
    }
];
/** LIQUIDUS MATIC CONTRACT LIST */
export const MATIC_CONTRACT_LIST = [
    {
        chain: 'MATIC',
        provider: MATIC_NODE_PROVIDER,
        contractUniqueName: 'Quickswap LIQ-MATIC 1 Month',
        address: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        lpSwapToken: '0x2F5a5E6FF15B9B342e6292e2F179e7199f88922F',
        rewardToken: '0x4036f3d9c45a20f44f0b8B85dD6CA33005fF9654',
        abi: POLYGON_LIQ_MATIC_LP_TOKEN_ABI,
        tokenAbi: POLYGON_LIQ_SINGLE_TOKEN_ABI,
        vestingPeriodInMonths: 1,
        type: 'LP',
        contractLink: 'https://polygonscan.com/address/0xc7981767f644c7f8e483dabdc413e8a371b83079',
        link: 'https://quickswap.exchange/#/add/0x4036f3d9c45a20f44f0b8B85dD6CA33005fF9654/ETH/v2',
        linkName: 'LIQ-MATIC LP',
        addressExplorer: polygonNet[0].addressExplorerPrefixURL
    },
];

export const LIQ_CONTRACTS = [
    {
        key: 1,
        chain: BSC,
        contractList: BSC_CONTRACT_LIST,
        provider: BSC_NODE_PROVIDER,
        singleTokenAbi: BSC_LIQ_SINGLE_TOKEN_ABI,
        singleTokenAddress: BSC_LIQ_SINGLE_TOKEN_CONTRACT.address
    },
    {
        key: 2,
        chain: MATIC,
        contractList: MATIC_CONTRACT_LIST,
        provider: MATIC_NODE_PROVIDER,
        singleTokenAbi: POLYGON_LIQ_SINGLE_TOKEN_ABI,
        singleTokenAddress: MATIC_LIQ_SINGLE_TOKEN_CONTRACT.address
    },
    {
        key: 3,
        chain: CRO,
        contractList: CRONOS_CONTRACT_LIST,
        provider: CRONOS_NODE_PROVIDER,
        singleTokenAbi: CRONOS_LIQ_SINGLE_TOKEN_ABI,
        singleTokenAddress: CRONOS_LIQ_SINGLE_TOKEN_CONTRACT.address
    },
    {
        key: 4,
        chain: ETH,
        contractList: ETH_CONTRACT_LIST,
        provider: ETH_NODE_PROVIDER,
        singleTokenAbi: ETh_LIQ_SINGLE_TOKEN_ABI,
        singleTokenAddress: ETH_LIQ_SINGLE_TOKEN_CONTRACT.address
    },
]

export const SUPPORTED_NETWORKS_FOR_LIQUIDUS = [
    { chain: BSC, chainImageUrl: BSC_IMAGE },
    { chain: ETH, chainImageUrl: ETH_IMAGE },
    { chain: MATIC, chainImageUrl: MATIC_IMAGE },
    { chain: CRO, chainImageUrl: CRO_IMAGE },
]

export const tokenBNBContract = LIQ_BNB_CONTRACT