import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Horarios = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    formControl: {
      margin: theme.spacing(5),
      minWidth: 400,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    },
    grillaCentrada: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tituloh1: {
      textAlign: 'center',
    },
    grillaHorarios: {
      display: 'inline-block',
    },
  }));
  const classes = useStyles();

  const horas = ['08:00','08:15', '08:30', '08:45', '09:00', '09:15', '09:30', '09:45', '10:00', '10:15', '10:30', '10:45', '11:00', '11:15', 
                 '11:30', '11:45', '12:00', '12:15', '12:30', '12:45', '13:00', '13:15', '13:30', '13:45', '14:00', '14:15', '14:30', '14:45', '15:00', 
                 '15:15', '15:30', '15:45', '16:00', '16:15', '16:30', '16:45', '17:00', '17:15', '17:30', '17:45', '18:00', '18:15', '18:30', '18:45',
                 '19:00', '19:15', '19:30', '19:45', '20:00', '20:15', '20:30', '20:45', '21:00']
   
  return (
    
      <div className={classes.root}>
        <Grid container spacing={3}>
        <Grid item xs={3}>
          <FormControl className={classes.formControl}>
          <InputLabel id="especialista-select">Especialista</InputLabel>
          <Select
          margin="normal"
          required
          fullWidth
          labelId='especialista-select'
          >
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
        <TextField
          id="date"
          label="Birthday"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        </FormControl>
        </Grid>
        <Grid item xs={2}>

        </Grid>

        <Grid item xs={1} className={classes.grillaCentrada}>
        <FormControlLabel
          control={<Checkbox color='primary' />}
          label="Habilitar todos"
          />
        </Grid>


          <Grid item xs={1}>
        </Grid>
        
        <Grid item xs={4}>
        <h3 className={classes.tituloh1}>Horarios</h3>
        { horas.map((hora) => (
          <FormControlLabel
          control={<Checkbox color='primary' />}
          label={hora}
          padding
          />
        ))}
        </Grid>
        </Grid>


        
          
          
  
        
      </div>
      
    );

 

}
export default Horarios

