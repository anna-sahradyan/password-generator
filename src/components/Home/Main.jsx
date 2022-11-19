import React from 'react';
import useStyles from "./mainStyle";
import {styled} from '@mui/material/styles';
import {Button, Checkbox, FormControlLabel, FormGroup, Grid, Paper, TextField, Typography} from "@material-ui/core";

const Main = () => {
    const classes = useStyles();
    const handelSubmit = () => {

    }

    const label = {inputProps: {'aria-label': 'Checkbox demo'}};
    return (
        <>
            <Paper className={classes.paper}>
                <form
                    autoComplete={"off"}
                    noValidate
                    className={`${classes.form} ${classes.root}`}
                    onSubmit={handelSubmit}
                >
                    <Typography variant={"h6"} style={{margin: "auto"}}>
                        {/*{currentId ? "Editing" : "Creating"} a Memory*/}
                        Password Generator
                    </Typography>
                    <TextField
                        name={"passwordGenerate"}
                        variant={"outlined"}
                        type="text"
                        label={"Generate Password"}
                        fullWidth
                        // value={""}
                    />
                    <TextField
                        name={"number"}
                        variant={"outlined"}
                        type="number"
                        label={"length"}
                        fullWidth
                        // value={""}


                    />
                    <TextField
                        name={"symbol"}
                        variant={"outlined"}
                        type="text"
                        label={"Symbol"}
                        fullWidth
                        // value={""}

                    />
                    <div>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Label"style={{position:"relative",top:"4px",left:"115px"}} />
                            <TextField style={{position:"absolute",top:"300px",width:"346px"}}
                                name={"symbol"}
                                variant={"outlined"}
                                type="text"
                                fullWidth
                                // value={""}

                            />

                        </FormGroup>
                    </div>



                </form>
            </Paper>
        </>
    );
};

export default Main;