import { Typography } from '@material-ui/core';
import React from 'react'
import { userActivityStyles } from './user-activity.styles'

const UserActivity = () => {
    const classes = userActivityStyles();

    return (
        <div>
            <div>
                    <div className={classes.imagecontainer}>
                        <img className={classes.imagecontainer} src={window.location.origin + '/images/favicon.png'} alt="user-img" />
                    </div>
                    <Typography>"Este es el texto correspondiente al estado del usuario."</Typography>
            </div>
        </div>
    )
}

export default UserActivity
