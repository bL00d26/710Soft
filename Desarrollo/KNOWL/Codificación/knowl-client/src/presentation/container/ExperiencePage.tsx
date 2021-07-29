import { Card, CardHeader } from '@material-ui/core';
import React from 'react'
import { experienceStyles } from '../components/experience/experience.styles'

const ExperiencePage = () => {
    const classes = experienceStyles();
    return (
        <div className={classes.main}>
            <Card>
                <CardHeader title="EXPERIENCIA LABORAL" style={{ textAlign: "center", }} ></CardHeader>
            </Card>
        </div>
    )
}

export default ExperiencePage
