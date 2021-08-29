import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { cardContactInfoStyles } from "./card-contact-info.styles";
import { useHistory, useParams } from "react-router-dom";
import { User } from "../../../application/store/user/interfaces/user.interface";
import Loading from "../loading/Loading";
import axios from "axios";
import { usersURL } from "../../../application/store/user/user.types";
import UserInfoActivity from "../user-info-activity/UserInfoActivity";
import { Routes } from "../../../application/utils/enums";
const CardUserInfo = () => {
  const classes = cardContactInfoStyles();
  const history = useHistory();
  const [user, setUser] = useState<User | null>(null);
  const params: { id: string } = useParams();
  const loadUserInfo = async () => {
    try {
      const res = await axios.get(usersURL.concat(`get/${params.id}`));
      if (res.data.success) {
        setUser(res.data.user);
      }
    } catch (error) {
      setUser(null);
    }
  };
  useEffect(() => {
    loadUserInfo();
  }, [params.id]);
  return !user ? (
    <Loading />
  ) : (
    <div>
      <Card>
        <CardHeader
          className={classes.title}
          title="INFORMACIÓN PERSONAL DE CONTACTO"
        ></CardHeader>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={12}>
              <UserInfoActivity user={user} />
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <div className={classes.labelcontainer}>
                <Typography className={classes.label}>Nombres</Typography>
                <Typography>{user?.firstName}</Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <div className={classes.labelcontainer}>
                <Typography className={classes.label}>Apellidos</Typography>
                <Typography>{user?.lastName}</Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <div className={classes.labelcontainer}>
                <Typography className={classes.label}>Ocupación</Typography>
                <Typography>{user?.ocupation}</Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <div className={classes.labelcontainer}>
                <Typography className={classes.label}>
                  Fecha de nacimiento
                </Typography>
                <Typography>{user?.birthday}</Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <div className={classes.labelcontainer}>
                <Typography className={classes.label}>País</Typography>
                <Typography>{user?.country}</Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <div className={classes.labelcontainer}>
                <Typography className={classes.label}>Ciudad</Typography>
                <Typography>{user?.city}</Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <div className={classes.labelcontainer}>
                <Typography className={classes.label}>Correo</Typography>
                <Typography>{user?.email}</Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <button
                className="btn"
                onClick={(e) =>
                  history.push(Routes.PROFILE.concat(`/formation/${params.id}`))
                }
              >
                Formación
              </button>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <button
                className="btn"
                onClick={(e) =>
                  history.push(
                    Routes.PROFILE.concat(`/experience/${params.id}`)
                  )
                }
              >
                Experiencia
              </button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardUserInfo;
