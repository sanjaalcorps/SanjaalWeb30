import { bscNet } from "../constants/networks";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function tokenInfoTable(address, name, symbol, totalSupply, decimals, owner, supportedNetworks) {
  return <>
      <h2>PROJECT INFO</h2>
      <Card sx={{ border: 1, marginBottom:2}}>
      <CardContent className='tokenInfo'>
        <Typography gutterBottom variant="p" component="p" >
          Symbol: {symbol} | Name: {name} | Total Supply: {totalSupply} | Decimals: {decimals} | Owner: {String(owner).substring(0, 10) + '...'} | Address: <a href={bscNet[0].addressExplorerPrefixURL + address} target='_blank' rel='noreferrer'>{address}</a>
        </Typography>
          {supportedNetworks.map((item, index) => {
            return <img key={index} src={item.chainImageUrl} height="40" alt={item.chain} />
          })}

      </CardContent>
    </Card>
  </>

}