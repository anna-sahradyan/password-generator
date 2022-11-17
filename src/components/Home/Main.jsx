import React from 'react';
import {Button, Paper, TextField, Typography} from "@material-ui/core";
import useStyles from "./mainStyle";
import FileBase from "react-file-base64";
const Main = () => {
    const classes = useStyles();
    const handelSubmit = () => {

    }
    return (
        <>
            <Paper className={classes.paper}>
                <form
                    autoComplete={"off"}
                    noValidate
                    className={`${classes.form} ${classes.root}`}
                    onSubmit={handelSubmit}
                >
                    <Typography variant={"h6"}>
                        {/*{currentId ? "Editing" : "Creating"} a Memory*/}
                    </Typography>
                    <TextField
                        name={"title"}
                        variant={"outlined"}
                        label={"Title"}
                        fullWidth
                        value={""}
                        // onChange={(e) => setPostData({...postData, title: e.target.value})}
                    />{" "}
                    <TextField
                        name={"message"}
                        variant={"outlined"}
                        label={"Message"}
                        fullWidth
                        multiline
                        minRows={4}
                        value={""}
                        // onChange={(e) =>
                        //     setPostData({...postData, message: e.target.value})
                        // }
                    />{" "}
                    <TextField
                        name={"tags"}
                        variant={"outlined"}
                        label={"Tags"}
                        fullWidth
                        value={""}
                        // onChange={(e) =>
                        //     setPostData({...postData, tags: e.target.value.split(",")})
                        // }
                    />
                    <div className={classes.fileInput}>
                        <FileBase
                            type={"file"}
                            multiple={false}
                            // onDone={({base64}) =>
                            //     setPostData({...postData, selectedFile: base64})
                            // }
                        />
                    </div>
                    <Button
                        className={classes.buttonSubmit}
                        variant={"contained"}
                        color={"primary"}
                        size={"large"}
                        type={"submit"}
                        fullWidth
                    >
                        Submit
                    </Button>
                    <Button
                        variant={"contained"}
                        color={"secondary"}
                        size={"small"}
                        // onClick={clear}
                        fullWidth
                    >
                        Clear
                    </Button>
                </form>
            </Paper>
        </>
    );
};

export default Main;