import React, { useState } from "react";
import "../Login.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

const Login = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          contraseña: "",
        }}
        validate={(valores) => {
          let errores = {};

          // Validacion email
          if (!valores.email) {
            errores.email = "Por favor ingresa un email";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email =
              "El email solo puede contener letras, numeros, puntos, guiones y guion bajo.";
          }

          // Validacion contraseña
          if (!valores.contraseña) {
            errores.contraseña = "Por favor ingresa una contraseña";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("Formulario enviado");
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 5000);
        }}
      >
        {({ errors }) => (
          <Form className="formulario">
            <div>
              <h3 style={{ color: "#c02328" }}>Iniciar Sesion</h3>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="ejemplo@mail.com"
              />
              <ErrorMessage
                name="email"
                component={() => <div className="error">{errors.email}</div>}
              />
            </div>
            <div>
              <label htmlFor="contraseña">Contraseña</label>
              <Field
                type="text"
                id="contraseña"
                name="contraseña"
                placeholder=""
              />
              <ErrorMessage
                name="contraseña"
                component={() => (
                  <div className="error">{errors.contraseña}</div>
                )}
              />
            </div>

            <button type="submit">Enviar</button>
            {formularioEnviado && (
              <p className="exito">Formulario enviado con exito!</p>
            )}
            <div
              style={{ color: "#c02328", marginTop: "10px", cursor: "pointer" }}
            >
              <span>Olvido su contraseña?</span>
            </div>
          </Form>
        )}
      </Formik>
      <div className="containerForm">
        <div>
          <h3 style={{ color: "#c02328" }}>Crear Cuenta</h3>
        </div>
        <div>
          <p
            style={{
              color: "#000",
              width: "450px",
              textAlign: "justify",
              marginTop: "50px",
              fontSize: "20px",
            }}
          >
            Para poder disfrutar todos los servicios de
            <Link
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              <span style={{ color: "#c02328", cursor: "pointer" }}>
                {" "}
                www.cinex.com
              </span>{" "}
            </Link>
            debes realizar un rápido y sencillo registro.
          </p>
        </div>

        <hr></hr>
        <Link
          to="/NewUser"
          style={{
            textDecoration: "none",
          }}
        >
          <button
            className=""
            type="submit"
            style={{
              background: "#c02328",
              color: "#fff",
              display: "block",
              fontWeight: "600",
              fontFamily: "Open Sans",
              border: "none",
              cursor: "pointer",
              width: "30%",
              padding: " 10px",
              borderRadius: "5px",
              fontSize: "16px",
              transition: "0.3s ease all",
              margin: "auto",
              marginTop: "50px",
            }}
          >
            Registrarse
          </button>
        </Link>
      </div>
    </>
  );
};

export default Login;
