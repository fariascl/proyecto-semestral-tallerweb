import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import axios from 'axios';

const Agendamiento = () => {
       
    const [rut, setRut] = useState("")
    const [especialistas, setEspecialistas] = useState([])
    const [especialidades, setEspecialidad] = useState([])
    const [idDisponibilidad, setDisponibilidad] = useState([])
    const [id_especialista, setId] = useState([])

    const handleInputChangeEspecialidad = (event) => {
        setEspecialidad(event.target.value)
    }
    const handleInputChangeEspecialista = (event) => {
        setEspecialistas(event.target.value)
    }
    const handleInputChangeRut = (event) => {
        setRut(event.target.value)
    }

    const enviarDatos = () => {
        guardarAgendamiento();
    }

    useEffect(() => {
        getEspecialidad()
    })

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
                id="demo-customized-select"
                value="1"
                fullWidth
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
                value="1"
                fullWidth
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            </form>
        </div>
      )
}
export default Agendamiento