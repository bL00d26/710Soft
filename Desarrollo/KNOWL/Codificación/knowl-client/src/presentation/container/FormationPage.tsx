import { Card, CardHeader } from "@material-ui/core";
import React from "react";
import { formationStyles } from "../components/formation/formation.styles";

const FormationPage = () => {
  const classes = formationStyles();
  return (
    <div className={classes.main}>
            <Card>
                <CardHeader title="FORMACIÓN ACADÉMICA" style={{ textAlign: "center", }} ></CardHeader>
            </Card>
        </div>
  );
};

export default FormationPage;
