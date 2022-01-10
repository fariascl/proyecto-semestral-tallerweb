import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    textAlign: 'center',
  },
  centrar: {
      textAlign: 'center',
  }
}));

async function getDisponibilidad(){
    try {
        const response = await axios.get(`/api/disponibilidades/${id_especialista}`)
        if (response.status == 200){

        }
    } catch (error){
        console.error(error)
    }
}

const AgendamientoMuestraHorarios = () => {
    const classes = useStyles();


    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6} className={classes.centrar}>
                <h2>Horarios disponibles con el especialista {props.match.params.idEspecialista}</h2>
            <Paper className={classes.paper}> 
                Viernes 02 de diciembre 15:15 horas &nbsp;
                <Button size="large" variant="contained" color="primary">
                        Confirmar
                </Button>
            </Paper>
            </Grid>
        </Grid>
        </div>
    );
}
export default AgendamientoMuestraHorarios