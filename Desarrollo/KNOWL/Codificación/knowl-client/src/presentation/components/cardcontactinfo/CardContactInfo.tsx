import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import React from 'react'

const CardContactInfo = () => {
    return (

        <div>
            <Card>
                <CardHeader title="Información Personal de Contacto" >
                </CardHeader>
                <CardContent>
                    <Typography>Nombres</Typography>
                    <Typography>Apellido Paterno</Typography>
                    <Typography>Apellido Materno</Typography>
                    <Typography>ID Usuario</Typography>
                    <Typography>Edad</Typography>
                    <Typography>Ocupación</Typography>
                    <Typography>Nacionalidad</Typography>
                    <Typography>País</Typography>
                    <Typography>Provincia</Typography>
                    <Typography>Distrito</Typography>

                </CardContent>
            </Card>
        </div>
    )
}

export default CardContactInfo
