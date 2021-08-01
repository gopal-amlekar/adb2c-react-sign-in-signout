import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const IdTokensTable = ( TokenData ) => {
    const idTokenClaims = TokenData.idTokenClaims;
return (
    <TableContainer component={Paper}>
        <Table aria-label="Tokens table" border="1px solid ">

            <TableBody>
                <TableRow> 
                    <TableCell align="left">Given Name</TableCell>
                    <TableCell align="left">{idTokenClaims.given_name}</TableCell>
                </TableRow>

                <TableRow> 
                    <TableCell align="left">City</TableCell>
                    <TableCell align="left">{idTokenClaims.city}</TableCell>
                </TableRow>

                <TableRow> 
                    <TableCell align="left">Country</TableCell>
                    <TableCell align="left">{idTokenClaims.country}</TableCell>
                </TableRow>

                <TableRow> 
                    <TableCell align="left">Job title</TableCell>
                    <TableCell align="left">{idTokenClaims.jobTitle}</TableCell>
                </TableRow>

            </TableBody>
          

        </Table>

    </TableContainer>
    )
}

export default IdTokensTable