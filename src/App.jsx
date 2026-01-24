import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Actividades from './pages/Actividades'
import Horarios from './pages/Horarios'
import Login from './pages/Login'
import Contacto from './components/Contacto'


import Perfil from './pages/Perfil'
import Profesor from './pages/Profesor'
import Admin from './pages/Admin'

/* Recepción */
import RecepcionLayout from './layouts/RecepcionLayout';
import Usuarios from "./pages/recepcion/Usuarios";
import Caja from "./pages/recepcion/Caja";
import Inscripcion from "./pages/recepcion/Inscripcion";
import Renovacion from "./pages/recepcion/Renovacion";
import Molinete from "./pages/recepcion/Molinete";

import FormRutina from './pages/FormRutina'
import AlumnosPorProfesor from './pages/AlumnosPorProfesor'

import './App.css'

function App() {
  const location = useLocation();
  const esAdmin = location.pathname.startsWith("/admin");
  const esRecepcion = location.pathname.startsWith("/recepcion");
  const esPerfil = location.pathname.startsWith("/perfil");
  const esProfesor = location.pathname.startsWith("/profesor");

  let tipoBanner = "normal";

  if (esAdmin) {
    tipoBanner = "none";
  } else if (esRecepcion || esPerfil || esProfesor) {
    tipoBanner = "alternativo";
  }

  return (
    <>
      <Header tipoBanner={tipoBanner} />
      <main className={esAdmin ? "admin-wrapper" : "container mx-auto p-4"}>
        <Routes>
          {/* Rutas Básicas */}
          <Route path="/" element={<Home />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/horarios" element={<Horarios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />


          <Route path="/perfil" element={<Perfil />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/profesor" element={<Profesor />} />
          <Route path="/form-rutina" element={<FormRutina />} />
          <Route path="/alumnos-profesor" element={<AlumnosPorProfesor />} />

          {/* Rutas Recepción */}
          <Route path="/recepcion" element={<RecepcionLayout />}>
            <Route path="usuarios" element={<Usuarios />} />
            <Route path="caja" element={<Caja />} />
            <Route path="inscripcion" element={<Inscripcion />} />
            <Route path="renovacion" element={<Renovacion />} />
            <Route path="molinete" element={<Molinete />} />
          </Route>

        </Routes>
      </main>
      {!esAdmin && <Footer />}
    </>
  )
}

export default App
