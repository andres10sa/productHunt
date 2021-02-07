import React, { useState, useEffect } from 'react';


const useValidation = (stateInicial, validar, fn) => {

    const [valores, guardarValores] = useState(stateInicial);
    const [errores, guardarErrores] = useState({});
    const [submitForm, guardarSubmitForm] = useState(false);

    useEffect(() => {
     if(submitForm){
         const noErrores=Object.keys(errores)?.length===0;
         
         if(noErrores){
             fn(); //Fn = Función que se ejecuta en el componente
         }
         guardarSubmitForm(false);
     }
    }, []);

    const handleChange = (e)=>{
         guardarValores({...valores,[e.target.name]:e.target.value})
         console.log("cambiando")
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        const erroresValidacion = validar(valores);
        guardarErrores(erroresValidacion);
        guardarSubmitForm(true);
        console.log("neciando")
    };

    return {
        valores,
        errores,
        submitForm,
        handleChange,
        handleSubmit
    };
}

export default useValidation;