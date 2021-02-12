import React, { useState } from 'react';
import Layout from "../components/Layout/Layout";
import { css } from "@emotion/react";
import { Campo, InputSubmit, Formulario, Error } from "../components/ui/Formulario";
import firebase from "../firebase"

//validaciones
import validarCrearCuenta from "../validacion/validarCrearCuenta";
import useValidacion from "../hooks/useValidation";
import Router from 'next/router';


const STATE_INICIAL = {
  nombre: '',
  email: '',
  password: ''
}

const CrearCuenta = () => {

   const [error,setError]=useState(false);
  
  const crearCuenta = async () => {
    try {
      await firebase.registrar(nombre, email, password);
      Router.push("/")
    } catch (error) {
      console.error("Hubo unerror al crear el usuario",error);
      setError(error.message);
    }
  }
  const { valores, errores, handleSubmit, handleChange, handleBlur } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);
  const { nombre, email, password } = valores;
  


  return (
    <div>
      <Layout>
        <>
          <h1 css={css`
        text-align:center;
        margin-top:5rem;
      `} >Crear cuenta</h1>
          <div css={css`
        display:flex;
        justify-content:center;
      `}>
            <form
              onSubmit={handleSubmit}
              className="formulario"
              noValidate
            >
              <Campo>
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  placeholder="Tu Nombre"
                  name="nombre"
                  value={nombre}
                  onChange={handleChange}
                />
              </Campo>
              {errores.nombre && <Error>{errores.nombre}</Error>}


              <Campo>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Tu Email"
                  name="email"
                  value={email}
                  onChange={handleChange}

                />
              </Campo>
              {errores.email && <Error>{errores.email}</Error>}

              <Campo>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Tu Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </Campo>
              {errores.password && <Error>{errores.password}</Error>}
              {error && <Error>{error}</Error>}
              <InputSubmit type="submit" value="Crear Cuenta" />
            </form>
          </div>

        </>
      </Layout>
    </div>
  );
};
export default CrearCuenta;
