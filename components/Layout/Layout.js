import React from "react";
import Header from "./Header";
import { Global, css } from "@emotion/react";
import Head from "next/head";

const Layout = (props) => {
  return (
    <>
      <Global
        styles={css`
          :root {
            --gris: #3d3d3d;
          }
        `}
      />
      <Head>
        <html lang="es" />
        <title>Product Hunt Firebase y Next</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap"
          rel="stylesheet"
          />
          <link rel="stylesheet" href="/static/css/app.css" />
      </Head>
      <Header />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
