import React, {useState} from 'react';
import useStyles from "./mainStyle";
import {Button, Checkbox, FormControlLabel, FormGroup, Paper, TextField, Typography} from "@material-ui/core";

const Main = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        passwordGenerate: "", passwordLength: 20, symbol: false, number: false, lowercase: false, uppercase: false


    })
    const handelSubmit = (e) => {
        e.preventDefault();

        console.log(lowerLetter)
    }
    const updateInput = (e) => {
        setState({
            ...state, [e.target.name]: e.target.value
        })
    }
    const updateCheck = (e) => {
        setState({
            ...state, [e.target.name]: e.target.checked
        })
    }

    return (<>
        <Paper className={classes.paper}>
            <form
                autoComplete={"off"}
                noValidate
                className={`${classes.form} ${classes.root}`}
                onSubmit={handelSubmit}
            >
                <Typography variant={"h6"} style={{margin: "auto"}}>
                    Password Generator
                </Typography>
                <TextField
                    name={"passwordGenerate"}
                    variant={"outlined"}
                    type="text"
                    label={"Generated Password"}
                    fullWidth
                    value={state.passwordGenerate}
                    onChange={updateInput}
                />
                <TextField
                    name={"passwordLength"}
                    variant={"outlined"}
                    type="number"
                    label={" Password Length"}
                    fullWidth
                    value={state.passwordLength}
                    onChange={updateInput}
                    required={true}

                />

                <div>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox disabled={true}
                                                             onChange={updateCheck}
                        />}
                                          style={{position: "relative", top: "20px", left: "300px"}}/>
                        <TextField style={{position: "absolute", top: "240px", width: "350px"}}
                                   name={"symbol"}
                                   variant={"outlined"}
                                   type="text"
                                   label={"Symbols"}
                                   fullWidth
                        />
                        <FormControlLabel control={<Checkbox disabled={true}
                                                             onChange={updateCheck}
                        />}
                                          style={{position: "relative", top: "50px", left: "300px"}}/>
                        <TextField style={{position: "absolute", top: "310px", width: "350px"}}
                                   name={"number"}
                                   variant={"outlined"}
                                   label="Numbers"
                                   type="number"
                                   fullWidth
                                   onChange={updateCheck}

                        />
                        <FormControlLabel control={<Checkbox disabled={true}/>}
                                          style={{position: "relative", top: "75px", left: "300px"}}/>
                        <TextField style={{position: "absolute", top: "380px", width: "350px"}}
                                   name={"lowercase"}
                                   variant={"outlined"}
                                   type="text"
                                   label=" Lowercase Letters"
                                   fullWidth
                                   onChange={updateCheck}

                        />
                        <FormControlLabel control={<Checkbox disabled={true}/>}
                                          style={{position: "relative", top: "103px", left: "300px"}}/>
                        <TextField style={{position: "absolute", top: "450px", width: "350px"}}
                                   name={"uppercase"}
                                   variant={"outlined"}
                                   type="text"
                                   label="Uppercase Letter"
                                   fullWidth
                                   onChange={updateCheck}

                        />

                    </FormGroup>

                </div>

                <Button type={"submit"} className={classes.switch}>Generate</Button>

            </form>
        </Paper>
    </>);
};

export default Main;