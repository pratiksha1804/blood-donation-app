import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button, Tooltip, Typography } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    paper1: {
        padding: theme.spacing(2),
        textAlign: "center"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    },
    detailtable: {
        width: "80%",
        padding: "10% 0 0",
        margin: "auto"
    },
    typographyStyle: {
        color: "#000000",
        textAlign: "center",
        opacity: "1",
        font: "normal normal bold 32px/64px Calibri",
        fontFamily: "Roboto",
        color: '#707070',
        marginBottom: "1.5rem",
        marginTop: "1.5rem"
    }
}));

export default function CenteredGrid() {
    const classes = useStyles();
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const [bloodgroup, setBloodGroup] = React.useState('');


    const handleChangeBloodGroup = (event) => {
        setBloodGroup(event.target.value);
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value
        }));
        let d = Object.values(formData);
        console.log("seeker data >>>>>>>>>>>>>>>>", d);

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("hi")
        const data = {
            "name": formData.name,
            "address": formData.address,
            "email": formData.email,
            "phone": formData.phone,
            "bloodgroup": bloodgroup,
            "quantity": formData.quantity,
            "reason": formData.reason,
            "age": formData.age
        }
        console.log("my form data is.......", data);
    }
    return (

        <div className={classes.root}>
            <br />
            <Typography className={classes.typographyStyle}>
                Request For Blood
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}></Grid>
                <Grid item xs={5} className={classes.detailtable}>
                    <Paper className={classes.paper}>
                        <div
                            style={{
                                width: "70%",
                                marginLeft: "15%"
                            }}
                        >
                            <form
                                noValidate={true}
                                style={{ display: "grid", padding: "1rem" }}
                                onSubmit={handleSubmit}

                            >
                                <TextField
                                    id="standard-basic"
                                    label="Name or Organization"
                                    onChange={handleChange}
                                    name="name"
                                />
                                <TextField
                                    id="standard-basic"
                                    label="Address"
                                    onChange={handleChange}
                                    name="address"
                                />
                                <TextField
                                    id="standard-basic"
                                    label="Email"
                                    onChange={handleChange}
                                    name="email"
                                />
                                <TextField
                                    id="standard-basic"
                                    label="Phone No"
                                    onChange={handleChange}
                                    name="phone"
                                    onInput={(e) => {
                                        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 10)
                                    }}
                                />

                                <TextField
                                    id="standard-basic"
                                    label="Age"
                                    type="Number"
                                    name="age"
                                />

                                <Select
                                    value={bloodgroup}
                                    onChange={handleChangeBloodGroup}
                                    displayEmpty
                                    className={classes.selectEmpty}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="" disabled>
                                        Blood Group
                                    </MenuItem>
                                    <MenuItem value="O+">O+</MenuItem>
                                    <MenuItem value="O-">O-</MenuItem>
                                    <MenuItem value="A+">A+</MenuItem>
                                    <MenuItem value="A-">A-</MenuItem>
                                    <MenuItem value="B+">B+</MenuItem>
                                    <MenuItem value="B-">B-</MenuItem>
                                    <MenuItem value="AB+">AB+</MenuItem>
                                    <MenuItem value="AB-">AB-</MenuItem>


                                </Select>
                                <TextField
                                    id="standard-basic"
                                    label="Quatitity in litre"
                                    type="Number"
                                    name="quatity"
                                    onChange={handleChange}

                                />
                                <TextField
                                    id="standard-basic"
                                    label="Reason"
                                    onChange={handleChange}
                                    name="reason"
                                />
                                <br />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"

                                >
                                    Request
                      </Button>
                                <br />
                            </form>

                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );


}
