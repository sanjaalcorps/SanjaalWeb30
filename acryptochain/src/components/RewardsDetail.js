import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import WalletBalance from './WalletBalance';
import Footer from './Footer';

function RewardsDetail(data, balance) {

    //Sums up all the harvest ready tokens for summary display
    const totalHarvestReadyTokens = data.reduce((acc, item) => {
        return acc + parseFloat(item.harvestReadyTokens || 0);
    }, 0);

    //Thus removes any pools in which there was no deposit
    var reducedData = data.reduce(function (filtered, option) {
        if (option.userInfo && option.userInfo.amount > 0.0) {
            filtered.push(option);
        }
        return filtered;
    }, []);

    return (
        <div>
            {WalletBalance(balance)}
            <h4><font color="#007600">Total Unharvested Rewards (All Wallets): {Number(totalHarvestReadyTokens).toFixed(2)}</font></h4>
            <h2>REWARDS DETAILS</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 450, tableLayout: "auto", background: "white"}}>
                    <TableHead>
                        <TableRow sx={{ background: '#1976d2' }}>
                            <TableCell sx={{ color: 'white' }}>Chain</TableCell>
                            <TableCell sx={{ color: 'white' }}>Wallet Address</TableCell>
                            <TableCell sx={{ color: 'white' }}>Farm/Pool</TableCell>
                            <TableCell sx={{ color: 'white' }}>Pending Rewards</TableCell>
                            <TableCell sx={{ color: 'white' }}>Amount</TableCell>
                            <TableCell sx={{ color: 'white' }}>Reward Debt</TableCell>
                            <TableCell sx={{ color: 'white' }}>Last Deposited Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {reducedData.map((item, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>{item.chain || '-'}</TableCell>
                                    <TableCell><a href={item.addressExplorer + item.walletAddress} target='_blank' rel='noreferrer'>{String(item.walletAddress).substring(0, 20) + '...' || '-'}</a></TableCell>
                                    <TableCell><font color="#007600"><em>{item.poolName || '-'}</em></font><hr/><a href={item.contractLink} target='_blank' rel='noreferrer'>View Contract</a></TableCell>
                                    <TableCell>{Number(item.harvestReadyTokens).toFixed(2) || '-'}</TableCell>
                                    <TableCell>{Number(item.userInfo?.amount).toFixed(2) || '-'}</TableCell>
                                    <TableCell>{Number(item.userInfo?.rewardDebt).toFixed(2) || '-'}</TableCell>
                                    <TableCell>{item.userInfo?.lastDepositedAt || '-'}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <p><font color="red">** - This table only displays farms / pools in which there was a deposit made by the wallet(s)</font></p>
           <Footer/>
        </div>
    );
}

export default RewardsDetail;
