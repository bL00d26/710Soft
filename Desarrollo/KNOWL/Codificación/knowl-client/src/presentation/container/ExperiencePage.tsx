import { Card, CardHeader } from '@material-ui/core';
import React from 'react'
import CardExperienceInfo from '../components/card-experience-info/CardExperienceInfo';
import { experienceStyles } from '../components/experience/experience.styles'

const ExperiencePage = () => {
    const classes = experienceStyles();
    return (
        <div className={classes.main}>
            <Card>
                <CardHeader title="EXPERIENCIA LABORAL" style={{ textAlign: "center", }} ></CardHeader>
                <CardExperienceInfo />
                <CardExperienceInfo />
                <CardExperienceInfo />
            </Card>
        </div>
    )
}

export default ExperiencePage
