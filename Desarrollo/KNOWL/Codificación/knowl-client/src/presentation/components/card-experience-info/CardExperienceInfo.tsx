import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import React from 'react'
import { cardExperienceInfoStyles } from './card-experience-info.styles';

const CardExperienceInfo = () => {
    const classes = cardExperienceInfoStyles();
    return (
        <Card className={classes.experiencecard} style={{ color: "#5C7073", fontSize: "18px", }} variant="outlined">
            <CardHeader title="Cargo en la Organización" align="center" subheader="Nombre de la Organización"></CardHeader>
            <CardContent>
                <Typography className={classes.text}>Este es el texto descriptivo agregado a un hito en la experiencia laboral del usuario.
                    Será necesario agregarlo para precisión del detalle de las actividades realizadas en la organización que se está mencionando.
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardExperienceInfo
