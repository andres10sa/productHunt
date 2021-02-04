import React from 'react'
import Layout from "../components/Layout/Layout";
import Formulario from "../components/ui/Formulario";

const CrearCuenta = () => {
  return (
    <div>
      <Layout>
        <>
          <h1>Crear cuenta</h1>
          <Formulario>
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                placeholder="Tu Nombre"
                name="nombre"
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Tu Email"
                name="email"
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Tu Password"
                name="password"
              />
            </div>
            <input type="submit" value="Crear Cuenta" />
          </Formulario>
        </>
      </Layout>
    </div>
  );
};
export default CrearCuenta;
