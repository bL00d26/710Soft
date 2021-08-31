import { makeStyles } from "@material-ui/core/styles";

export const cardExperienceInfoStyles = makeStyles((theme) => ({
    text: {
        textAlign: "center",
        color: "#5C7073",
    },
    
    label: {
        color: "#F2C685",
        fontWeight: "bold",
        whiteSpace: "nowrap",
    },

    labelcontainer: {
        marginLeft: "2%",
        marginRight: "2%",
        marginBottom: "0%",
    },

    experiencecard: {
        backgroundColor: "#F1F1F1", 
        margin: "3%",
    },

    imagecontainer: {
        display: "inline-block",
        width: "100px",
        height: "100px",
        maxWidth: "150px",
        maxHeight: "150px",
        backgroundColor: "gray",
        borderRadius: "7em",
        textAlign: "center",
        marginBottom: "8px",
    },


}))