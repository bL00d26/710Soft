import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import React from 'react'
import { cardTechInfoStyles } from './card-tech-info.styles'

const CardTechInfo = () => {
    const classes = cardTechInfoStyles();
    return (
        <div>
            <Card className={classes.techcard}>
                <CardHeader title="Tecnología" style={{ color: "#5C7073", fontSize: "18px", }}>

                </CardHeader>
                <CardContent>
                    <div className={classes.imagecontainer}>
                        <img className={classes.imagecontainer} src={window.location.origin + '/images/favicon.png'} alt="user-img" />
                    </div>
                    <Typography className={classes.techdescription}>
                        Este es el texto descriptivo de una tecnología.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default CardTechInfo
