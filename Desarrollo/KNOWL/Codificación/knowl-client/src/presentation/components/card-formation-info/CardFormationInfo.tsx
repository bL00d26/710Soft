import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import React from "react";
import { Formation } from "../../../application/store/user/interfaces/formation.interface";
import { cardFormationInfoStyles } from "./card-formation-info.styles";

interface ICardFormationProps {
  formation: Formation;
}
const CardFormationInfo: React.FC<ICardFormationProps> = ({ formation }) => {
  const classes = cardFormationInfoStyles();
  return (
    <Card
      className={classes.formationcard}
      style={{ color: "#5C7073", fontSize: "18px" }}
      variant="outlined"
    >
      <CardHeader
        title={formation.degree}
        align="center"
        subheader={formation.institution}
      ></CardHeader>
      <CardContent>
        <Typography className={classes.text}>
          {formation.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardFormationInfo;
