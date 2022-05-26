import React from "react";

export const About = () => {
  return (
    <div className="container">
      <h1>Acerca de</h1>
      <div className="row">
        <p>
          Este sitio es para probar el uso de Redux Toolkit como una herramienta
          para la protección de rutas.
          Será una base para proyectos de React que empleen Redux Toolkit y
          otras tecnologías relacionadas, tales como redes sociales, tiendas en línea,
          etc.
        </p>
      </div>
      <a
        className="btn btn-dark"
        href="https://github.com/tinoreyna1984/molde-rutas-protegidas"
        target="_blank"
        rel="noopener noreferrer"
      >
        Repo en GitHub
      </a>
    </div>
  );
};
