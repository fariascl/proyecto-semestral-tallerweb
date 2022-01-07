import React, { Fragment, useEffect, useState } from 'react';
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
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { KeyboardDatePicker } from "@material-ui/pickers";

const Horarios = () => {

  const [especialistas, setEspecialistas] = useState([])
  const [todasHoras, setTodasHoras] = useState("")

  const [idEspecialista, setEspecialista] = useState("")
  const [fecha, setFecha] = useState()
  const [hora, setHora] = useState()
  const [disponible, setDisponible] = useState()

  const handleEspecialista = (event) => {
    setEspecialista(event.target.value)
  }

  const handleFecha = (event) => {
    setFecha(event.target.value)
  }

  const handleHora = (event) => {
    setHora(event.target.value)
  }

  const handleDisponible = (event) => {
    setDisponible(event.target.value)
  }
  

  const handleCheckBoxCheckAll= (event) => {
    //alert(event.target.value)
    alert(event.target.checked)
    setTodasHoras(event.target.checked)
}
  var today = new Date();

  const date = today.getFullYear() + '-' + '0' + (today.getMonth() + 1) + '-' + '0' +(today.getDate()); // Averiguar como solucionar esto, sino cambiar
  

  async function getEspecialistasxEspecialidad(){
    try {
        const response = await axios.get(`/api/especialistas`)
        if (response.status = 200){
            //alert(response.data.especialistaconespecialidad)
            console.log(response.data.especialistaconespecialidad)
            setEspecialistas(response.data.especialistaconespecialidad)
        }
    } catch (error){
        console.log(error)
    }
  }

  function guardarDisponibilidad(){
    axios.post('/api/disponibilidades', {
      idEspecialista: idEspecialista,
      fecha: fecha,
      hora: hora,
      disponible: disponible
    })
    .then (function (response){
      if (response.status == 200){
        alert("Disponibilidades guardadas exitosamente")
      }
      else {
        alert("Error al guardar las disponibilidades")
      }
    })
    .catch (function (error){
      console.log(error);
    });
  }

  useEffect(() => {
    getEspecialistasxEspecialidad()
  }, [])

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
    <Fragment>
    
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
            {especialistas.map((especialista) => (
                        <MenuItem value={especialista._id}>{especialista.nombre}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
        <TextField
          id="date"
          label="Fecha"
          type="date"
          defaultValue={date} //"2017-05-24"
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
          onChange={handleCheckBoxCheckAll}
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
          checked={ todasHoras ? true : false }
          />
        ))}
        <Button size="large" variant="contained" color="primary" className={classes.margin}>
                Confirmar
            </Button>
        </Grid>
        </Grid>


        
          
          
  
        
      </div>
      </Fragment>
    );

 

}
export default Horarios

