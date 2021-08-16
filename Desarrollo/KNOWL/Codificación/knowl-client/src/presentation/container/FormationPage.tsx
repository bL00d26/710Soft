import { Card, CardContent, CardHeader } from "@material-ui/core";
import React from "react";
import CardFormationInfo from "../components/card-formation-info/CardFormationInfo";
import { formationStyles } from "../components/formation/formation.styles";

const FormationPage = () => {
  const classes = formationStyles();
  return (
    <div className={classes.main}>
            <Card>
                <CardHeader title="FORMACIÓN ACADÉMICA" style={{ textAlign: "center", }} ></CardHeader>
                <CardContent>
                  <CardFormationInfo />
                  <CardFormationInfo />
                  <CardFormationInfo />
                </CardContent>
            </Card>
        </div>
  );
};

export default FormationPage;
