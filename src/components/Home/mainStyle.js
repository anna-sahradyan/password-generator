import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1.2),
        },
    },
    paper: {
        padding: theme.spacing(2),
        width: theme.spacing(50),
        height: theme.spacing(77)

    },
    form: {
        display: "flex",
        flexWrap: "wrap",


    },
    fileInput: {
        width: "97%",
        margin: "10px 0",

    },
    buttonSubmit: {
        marginBottom: 10,
    },
    switch: {
        color: "#F50057",
        fontWeight: "bolder",
        width: "100%",
        position: "relative",
        top: "120px"
    },


}));
