import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import React from "react";
import { Experience } from "../../../application/store/user/interfaces/experience.interface";
import { cardExperienceInfoStyles } from "./card-experience-info.styles";

interface ICardExperienceProps {
  experience: Experience;
}
const CardExperienceInfo: React.FC<ICardExperienceProps> = ({ experience }) => {
  const classes = cardExperienceInfoStyles();
  return (
    <Card
      className={classes.experiencecard}
      style={{ color: "#5C7073", fontSize: "18px" }}
      variant="outlined"
    >
      <CardHeader
        title={experience.position}
        align="center"
        subheader={experience.organization}
      ></CardHeader>
      <CardContent>
        <Typography className={classes.text}>
          {experience.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardExperienceInfo;
