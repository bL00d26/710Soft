import { Card, CardContent, CardHeader, CardMedia, FormControl, FormHelperText, Grid, Input, InputLabel, makeStyles, Typography } from '@material-ui/core'
import { Label } from '@material-ui/icons'
import { Col, Container, Row } from 'reactstrap'
import React from 'react'
import { cardContactInfoStyles } from './card-contact-info.styles'
import { useSelector } from 'react-redux'
import { userSelector } from '../../../application/store/user/user.selectors'
import UserActivity from '../user-activity/UserActivity'



const CardContactInfo = () => {
  const classes = cardContactInfoStyles();
  const user = useSelector(userSelector);
  return (

    <div>
      <Card>
        <CardHeader className={classes.title} title="INFORMACIÓN PERSONAL DE CONTACTO" >
        </CardHeader>
        <CardContent>
          <Grid container spacing={2}>
            {/* Chart */}
            <Grid item xs={12} md={12} lg={12}>
              <UserActivity />
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
                <Typography className={classes.label}>Fecha de nacimiento</Typography>
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
          </Grid>

        </CardContent>
      </Card>
    </div>
  );
};

export default CardContactInfo;
