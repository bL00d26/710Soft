import React, { useEffect, useState } from "react";

import { Card, CardContent, CardHeader, Grid } from "@material-ui/core";
import clsx from "clsx";
import { technologiesUserStyles } from "./technologies-user.styles";
import { useSelector } from "react-redux";
import { userSelector } from "../../../application/store/user/user.selectors";
import CardTechInfo from "../card-technology-info/CardTechInfo";

import { TechnologyUser } from "../../../application/store/technology/interfaces/technology-user.interface";
import { useParams } from "react-router";
import { technologyURL } from "../../../application/store/technology/technology.types";
import axios from "axios";
import Loading from "../loading/Loading";

const TechnologiesUser = () => {
  const classes = technologiesUserStyles();
  const params: { id: string } = useParams();
  const [technologiesUser, setTechnologiesUser] = useState<
    TechnologyUser[] | null
  >(null);

  const loadTechnologiesUser = async () => {
    try {
      const res = await axios.get(technologyURL.concat(params.id));
      if (res.data.success) {
        setTechnologiesUser(res.data.technologiesUser);
      }
    } catch (error) {
      setTechnologiesUser(null);
    }
  };
  useEffect(() => {
    loadTechnologiesUser();
  }, [params.id]);
  return !technologiesUser ? (
    <Loading />
  ) : (
    <div>
      <Card>
        <CardHeader className={classes.title} title="TECNOLOGÍAS"></CardHeader>

        <CardContent>
          <Grid container spacing={2}>
            {technologiesUser.length === 0 && (
              <span>Todavía no ha agregado tecnologías</span>
            )}
            <div className="horizontal-scroll">
              {technologiesUser.map((technologyUser, index) => (
                <CardTechInfo key={index} technologyUser={technologyUser} />
              ))}
            </div>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default TechnologiesUser;
