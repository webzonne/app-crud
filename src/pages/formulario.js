import {React, useEffect, useState} from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import Formulario from '../components/Formulario';


export default function formulario() {
    // VARIABLES
    const [isLoadingTwo, setIsLoadingTwo] = useState(false)
    const [checked, setChecked] = useState(false);
    const {push} = useRouter()
    const now = new Date()
    let fecha = now.toLocaleDateString('es-ES');
    let hora  = now.toLocaleTimeString('es-ES', { hour: 'numeric', minute: 'numeric', hour12: true });
    const formato = fecha+' , '+hora
    const initialize = {
        nombre:'',
        cedula:'',
        sexo:'',
        edad:'',
        ocupacion:'',
        direccion:'',
        vivienda:'',
        nivel:'',
        ruta:'',
        telefono:'',
        enfermedad:'',
        diagnostico:'',
        diagnosticoPost:'',
        preOperatorioRadio:'',
        postOperatorioRadio:'',
        quinceDias:'',
        UnMes:'',
        DosMeses:'',
        TresMeses:'',
        CuatroMeses:'',
        CincoMeses:'',
        SeisMeses:'',
        plan:'',
        pendiente:'',
        abordaje:'',
        evaluado:'',
        operacion:'',
        fechaNacimiento:'',
        fechaCirugia:'',
        fechaOperacion:'',
        protesis:'',
        rayosx:'',
        examen:'',
        antecedentes:{
            diabetes:'',
            hipertencion:'',
            artritis:'',
            psoriasis:'',
            lupus:'',
            anemiaDrepanocitica:'',
            perther:''
            },
        fecha:formato
    }
    const [paciente, setpaciente] = useState(initialize)
    
    // FUNCIONES
    const guardar = (e) => {
        e.preventDefault()
        setIsLoadingTwo(true) 
        setpaciente({...paciente})
        console.log(paciente)
        postData(paciente)  
    }
    
    const postData = async (paciente) => {
        try {
            const res = await fetch("/api/server", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(paciente),
            })
           
           setTimeout( async()=>{
            push("/Lista")
           },5000)
            
        } catch (error) {
           console.log(error)
        }
    }
    const handleFileChangeRayosX = (file)=>{
        setpaciente({...paciente, rayosx:file.base64 })
    }
    const handleFileChangeExamen = (file)=>{
        setpaciente({...paciente, examen:file.base64 })
    }
    
    // captando lo que colocamos en el formulario
    const handlechange = (e)=>{
        const { name, value, type, checked } = e.target;
        
        // Si el campo modificado es un checkbox
        if (type === "checkbox") {
            // console.log(e.target.checked)
          // Copiamos el objeto paciente
          const pacienteCopy = { ...paciente };
          // Actualizamos el valor del checkbox correspondiente en antecedentes
          pacienteCopy.antecedentes[name] = checked ? value : "";
          // Actualizamos el estado del componente
          setpaciente(pacienteCopy);
        } else {
          // Si no es un checkbox, actualizamos el valor del campo correspondiente
          setpaciente({ ...paciente, [name]: value });
        }
        
    }
    const handleClick = (e)=>{
        setChecked(!checked)
    }
   
    // CONSOLE

    return (
        <div>
            <Layout>
                <div className='w-8/12 mx-auto mb-10 mt-20'>
                    <h1 className='text-center p-2 text-xl border border-slate-200 rounded'>REGISTRO DE HISTORIA</h1>
                </div>
                <Formulario
                guardar={guardar}
                handlechange={handlechange}
                handleFileChangeRayosX={handleFileChangeRayosX}
                handleFileChangeExamen={handleFileChangeExamen}
                handleClick={handleClick}
                checked={checked}
                pacient={paciente}
                isLoadingTwo={isLoadingTwo}
                />
            </Layout>
        </div>
    )
}
