import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { validateRut } from 'rutlib';

const Agendamiento = () => {
       
    const [rut, setRut] = useState("")
    const [especialistas, setEspecialistas] = useState([])
    const [especialidades, setEspecialidad] = useState([])
    const [idDisponibilidad, setDisponibilidad] = useState([])
    const [id_especialista, setId] = useState([])
    const [id_especialidad, setIdEspecialidad] = useState("")
    

    const handleInputChangeEspecialidad = (event) => {
        alert(event.target.value)
        setIdEspecialidad(event.target.value)
    }
    

    const handleInputChangeRut = (event) => {
        setRut(event.target.value)
    }



    const enviarDatos = () => {

        if (validateRut(rut) === false){
            alert("El rut ingresado está erroneo, inténtelo nuevamente");
        }
        else {
            //getDisponibilidad();
            //guardarAgendamiento();
            alert("El rut bueno");
        }


        
    }

    useEffect(() => {
        getEspecialidad()
        getEspecialistasxEspecialidad()
    }, [])

    async function getEspecialidad(){
        try {
            const response = await axios.get("/api/especialidades")
            if (response.status == 200){
                setEspecialidad(response.data.especialidad) // Setea el json de especialidades    
            }
        } catch (error){
            console.error(error)
        }
    }


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


    async function getDisponibilidad(){
        try {
            const response = await axios.get(`/api/disponibilidades/${id_especialista}`)
            if (response.status == 200){
                setDisponibilidad(response.data.disponibilidad)
            }
        } catch (error){
            console.error(error)
        }
    }

    function guardarAgendamiento(){
        axios.post('/api/agendamientos', {
            idEspecialista: id_especialista,
            rut_cliente: rut,
            idDisponibilidad: idDisponibilidad
        })
        .then(function (response){
            if (response.status == 200){
                alert("Hora agendada exitosamente")
                getEspecialidad();
            }
            else {
                alert("Error al guardar")
            }
        })
        .catch(function (error){
            console.log(error);
        })
    }
    
    const useStyles = makeStyles((theme) => ({
        root: {
          marginTop: theme.spacing(8),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        form : {
          width: '50%', // Fix IE 11 issue.
          marginTop: theme.spacing(1),
      
        },
        margin: {
            margin: theme.spacing(1),
        },
      }));
      const classes = useStyles()
    return (
        
        <div className={classes.root}>
          
            <form className={classes.form} noValidate autoComplete="off">
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="rut_cliente"
            label="RUT paciente"
            onChange={handleInputChangeRut}
            autoFocus
            />
            <FormControl className={classes.form}>
                <InputLabel id="demo-customized-select-label">Especialidad</InputLabel>
                <Select
                margin="normal"
                labelId="demo-customized-select-label"
                fullWidth
                onChange={handleInputChangeEspecialidad} 
                >
                    
                    {especialidades.map((especialidad) => (
                        <MenuItem value={especialidad._id}>{especialidad.nombre_especialidad}</MenuItem>
                    ))}
                
                </Select>
            </FormControl>
            <FormControl className={classes.form}>
                <InputLabel id="demo-customized-select-label">Especialista</InputLabel>
                <Select
                margin="normal"
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                fullWidth
                >
                    <MenuItem>Seleccione especialista</MenuItem>
                    {
                    id_especialidad ? especialistas.filter(especialista => especialista.especialidad._id == id_especialidad).map(especialistaFiltered => (
                        <MenuItem value={especialistaFiltered._id}>{especialistaFiltered.nombre}</MenuItem>

                    )): especialistas.map((especialista) => (
                        <MenuItem value={especialista._id}>{especialista.nombre}</MenuItem>

                    ))}
                    
                </Select>
            </FormControl>
            <Button size="large" variant="contained" color="primary" className={classes.margin} onClick={enviarDatos} >
                Avanzar
            </Button>
            </form>
        </div>
      )
}
export default Agendamiento