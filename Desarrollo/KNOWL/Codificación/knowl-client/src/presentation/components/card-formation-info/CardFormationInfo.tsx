import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import React from 'react'
import { cardFormationInfoStyles } from './card-formation-info.styles'

const CardFormationInfo = () => {
    const classes = cardFormationInfoStyles();
    return (
        <Card className={classes.formationcard} style={{ color: "#5C7073", fontSize: "18px", }} variant="outlined">
            <CardHeader title="Denominación de Nivel Alcanzado" align="center" subheader="Nombre de la Institución"></CardHeader>
            <CardContent>
                <Typography className={classes.text}>Este es el texto descriptivo agregado a un hito en la formación académica del usuario.
                    Será necesario agregarlo para precisión del detalle de actividades realizadas en la empresa que se está mencionando.
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardFormationInfo
