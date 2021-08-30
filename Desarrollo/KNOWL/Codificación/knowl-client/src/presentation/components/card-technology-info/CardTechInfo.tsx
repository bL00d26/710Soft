import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import React from "react";
import { TechnologyUser } from "../../../application/store/technology/interfaces/technology-user.interface";
import { cardTechInfoStyles } from "./card-tech-info.styles";
interface ICardTechInfo {
  technologyUser: TechnologyUser;
}
const CardTechInfo: React.FC<ICardTechInfo> = ({ technologyUser }) => {
  const classes = cardTechInfoStyles();
  return (
    <div className="technology-card">
      <Card className={classes.techcard}>
        <CardHeader
          title={technologyUser.technology.name}
          style={{ color: "#5C7073", fontSize: "18px" }}
        ></CardHeader>
        <CardContent>
          <div className={classes.imagecontainer}>
            <img
              className={classes.imagecontainer}
              src={technologyUser.technology.image}
              alt="user-img"
            />
          </div>
          <div>
            <span className="span span-overflow">
              {technologyUser.description}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardTechInfo;
