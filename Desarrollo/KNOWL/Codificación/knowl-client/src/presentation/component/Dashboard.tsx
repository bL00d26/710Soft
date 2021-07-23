import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { classicNameResolver } from 'typescript';
import { Container, Grid, Paper, Typography, Link } from '@material-ui/core';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Todos los derechos reservados © '}
        <Link color="inherit" href="https://material-ui.com/">
          Knowl App
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

const LateralPanel = () => {
    const useStyles = makeStyles((theme) => ({
        lateral: {
            background: 'red',
            maxWidth: '240px',
            
        },
        appBarSpacer: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
        },
        paper: {
            padding: theme.spacing(2),
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'column',
        },
        container: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
        },
        fixedHeight: {
            height: 240,
        },
    }));
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <div></div>
    )
}

export default LateralPanel
