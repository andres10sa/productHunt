import React from 'react'
import Layout from "../components/Layout/Layout";
import { css } from "@emotion/react";
import { Campo, InputSubmit, Formulario } from "../components/ui/Formulario";
import validarCrearCuenta from "../validacion/validarCrearCuenta";


//validaciones
import useValidacion from "../hooks/useValidation";

const STATE_INICIAL = {
  nombre: '',
  email: '',
  password: ''
}

const CrearCuenta = () => {

  const { valores,errores,handleSubmit,handleChange } = useValidacion(STATE_INICIAL, validarCrearCuenta, CrearCuenta);
  const {nombre,email,password} = valores;

  const crearCuenta = (e) => {
    e.preventDefault();
    console.log("crear cuenta")
  }


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
               <InputSubmit type="submit" value="Crear Cuenta" /> 
            </form>
          </div>

        </>
      </Layout>
    </div>
  );
};
export default CrearCuenta;
