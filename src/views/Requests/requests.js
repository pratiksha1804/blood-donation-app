import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import TablePagination from '@material-ui/core/TablePagination';
import Typography from "@material-ui/core/Typography";

import {
    Container,
    Grid,
} from '@material-ui/core';
import Page from 'src/components/Page';
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, address, date, phone, age, bloodgroup) {
    return { name, address, date, phone, age, bloodgroup };
}

const rows = [
    createData('loren epsum', 'US', '20/03/2021', '1234567890', 29, 'A+'),
    createData('Don Joe', 'London', '12/03/2021', '1234567890', 45, 'AB-'),
    createData('Eclair', 'India', '26/03/2021', '1234567890', 30, 'O+'),

];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function CustomizedTables() {
    const classes = useStyles();

    return (

        <Page
            className={classes.root}
            title="Requests"
        >
            <Typography
                style={{
                    color: "#000000",
                    textAlign: "center",
                    opacity: "1",
                    font: "normal normal bold 32px/64px Calibri",
                    fontFamily: "Roboto",
                    color: '#707070',
                    marginBottom: "1rem",
                    marginTop: "1rem"
                }}>
                Seeker's Requests
            </Typography>
            <Container maxWidth={false}>
                <Grid
                    container
                    spacing={3}
                >
                    <TableContainer component={Paper} style={{ marginTop: '5%' }}>
                        <Grid
                            item
                            lg={12}
                            md={12}
                            xl={9}
                            xs={12}
                        >
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Name</StyledTableCell>
                                        <StyledTableCell align="right">Address</StyledTableCell>
                                        <StyledTableCell align="right">Phone No.</StyledTableCell>
                                        <StyledTableCell align="right">Date</StyledTableCell>
                                        <StyledTableCell align="right">Age</StyledTableCell>
                                        <StyledTableCell align="right">Blood Group</StyledTableCell>
                                        <StyledTableCell align="right">Action</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.name}>
                                            <StyledTableCell component="th" scope="row">
                                                {row.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.address}</StyledTableCell>
                                            <StyledTableCell align="right">{row.phone}</StyledTableCell>
                                            <StyledTableCell align="right">{row.date}</StyledTableCell>
                                            <StyledTableCell align="right">{row.age}</StyledTableCell>
                                            <StyledTableCell align="right">{row.bloodgroup}</StyledTableCell>
                                            <StyledTableCell align="right">
                                                <DoneIcon />
                                                <CloseIcon />
                                            </StyledTableCell>

                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Grid>
                    </TableContainer>
                    {/* <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    /> */}
                </Grid>
            </Container>
        </Page>
    );
}
