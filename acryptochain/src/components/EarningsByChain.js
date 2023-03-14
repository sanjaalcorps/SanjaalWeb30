import React from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BSC, ETH, MATIC, CRONOS } from '../constants/networks';

export default function EarningsByChain(poolHarvestResult, tokenPrice, totalHarvestReadyTokens) {

    const bscTotal = getTotalByChain(poolHarvestResult, BSC);
    const cronosTotal = getTotalByChain(poolHarvestResult, CRONOS)
    const maticTotal = getTotalByChain(poolHarvestResult, MATIC)
    const ethTotal = getTotalByChain(poolHarvestResult, ETH)
    const totalAmountData = [{ chain: BSC, total: bscTotal }, { chain: CRONOS, total: cronosTotal }, { chain: MATIC, total: maticTotal }, { chain: ETH, total: ethTotal }]

    const totalRewardLiq = Number(totalHarvestReadyTokens).toFixed(2);
    const totalRewardDollar = Number(totalHarvestReadyTokens * tokenPrice).toFixed(2);

    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: [BSC, CRONOS, MATIC, ETH],
        datasets: [
            {
                data: [bscTotal, cronosTotal, maticTotal, ethTotal],
                backgroundColor: ['green', '#36A2EB', '#FFCE56', '#4BC0C0'],
                hoverBackgroundColor: ['gray', 'gray', 'gray', 'gray'],
            },
        ],
        options: {
            display: true,
            responsive: true,
            maintainAspectRatio: true,
            showScale: true
        }
    };

    return (
        <>
            <div className="pieChartDiv">
                <Pie data={data} />
            </div>
            <div>
                <TableContainer component={Paper} sx={{ marginRight: "1" }}>
                    <Table sx={{ tableLayout: "auto", background: "white" }}>
                        <TableHead>
                            <TableRow sx={{ background: '#000000' }}>
                                <TableCell sx={{ color: 'white' }}>Chain</TableCell>
                                <TableCell sx={{ color: 'white' }}>Reward</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {totalAmountData.map((item, index) => {
                                const rewardDollarValue = ((Number(item.total).toFixed(2) || '0') * Number(tokenPrice || 0)).toFixed(2);
                                return (
                                    item.total > 0.001 && <TableRow key={'totalByChain_' + index}>
                                        <TableCell>{item.chain}</TableCell>
                                        <TableCell>
                                            {(Number(item.total).toFixed(2) || '0')}
                                            <br />
                                            <font color="blue" size="2">${rewardDollarValue}</font>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}

                            <TableRow key={'grandTotalRow'} sx={{ background: 'green' }}>
                                <TableCell sx={{ color: 'white' }}>TOTAL &#x2705; ALL WALLETS &#x2705; ALL CHAINS</TableCell>
                                <TableCell sx={{ color: 'white' }}>
                                    {totalRewardLiq} LIQ
                                    <br />
                                    <font size="2">${totalRewardDollar}</font>

                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        </>
    )
}
function getTotalByChain(poolHarvestResult, chain) {
    const bsc = poolHarvestResult.filter(r => r.chain.includes(chain));
    const total = bsc.reduce((acc, item) => {
        return acc + Number(parseFloat(item.harvestReadyTokens || 0).toFixed(3));
    }, 0);

    return total
}

