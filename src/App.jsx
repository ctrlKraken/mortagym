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
import Recepcion from './pages/Recepcion'
import Admin from './pages/Admin'
import ResumenDiario from "./pages/recepcion/ResumenDiario";

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
          <Route path="/" element={<Home />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/horarios" element={<Horarios />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/profesor" element={<Profesor />} />
          <Route path="/recepcion" element={<Recepcion />} />
          <Route path="/form-rutina" element={<FormRutina />} />
          <Route path="/alumnos-profesor" element={<AlumnosPorProfesor />} />
          <Route path="/recepcion" element={<Recepcion />} />
          <Route path="/recepcion/resumen" element={<ResumenDiario />} />
        </Routes>
      </main>
      {!esAdmin && <Footer />}
    </>
  )
}

export default App
