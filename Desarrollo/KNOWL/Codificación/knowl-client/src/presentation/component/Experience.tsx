import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { classicNameResolver } from 'typescript';
import { Container, Grid, Paper, Typography, Link } from '@material-ui/core';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';

const Info = () => {
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
    
    const useStyles = makeStyles((theme) => ({
        toolbarIcon: {
            backgroundColor: '#F2C685 !important',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 8px',
            heigth: '100%',  
            ...theme.mixins.toolbar,
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
        data: { 
          textAlign: 'center',
          maxWidth: 240,
        },
        container: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
            paddingLeft: '20%',
        },
        fixedHeight: {
            height: 240,
        },
    }));

    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={4}>
            {/* Chart */}
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedHeightPaper} style={{textAlign:'center',}}>
                Experiencia
              </Paper>
            </Grid>
            
            
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    )
}

export default Info
