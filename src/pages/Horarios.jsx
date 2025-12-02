import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../styles/Horarios.css'

import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import logo from "../assets/logo_sf.png";

export default function Horarios() {
  const disciplinas = [
    "Musculación",
    "Pilates",
    "Funcional",
    "Spinning",
    "Entrenamiento Deportivo",
    "Natación",
  ];

  const horarios = [
    {
      dia: "Lunes",
      clases: [
        { hora: "07:00", disciplina: "Entrenamiento Deportivo", actividad: "Entrenamiento Deportivo", profe: "Profe Belen" },
        { hora: "07:00", disciplina: "Natación", actividad: "Pileta Libre", profe: "" },
        { hora: "07:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Araceli" },
        { hora: "08:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Araceli" },
        { hora: "09:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Araceli" },
        { hora: "10:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Araceli" },
        { hora: "11:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Araceli" },
        { hora: "12:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Araceli" },
        { hora: "13:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Gastón" },
        { hora: "14:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Gastón" },
        { hora: "15:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Gastón" },
        { hora: "16:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Gastón" },
        { hora: "17:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Gastón" },
        { hora: "18:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Gastón" },
        { hora: "19:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Belén" },
        { hora: "20:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Belén" },
        { hora: "21:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Belén" },

        { hora: "08:00", disciplina: "Natación", actividad: "Nat. Adultos Iniciales", profe: "" },
        { hora: "09:00", disciplina: "Natación", actividad: "Hidrogimnasia", profe: "" },
        { hora: "10:00", disciplina: "Natación", actividad: "Niños 7 a 9 años", profe: "" },
        { hora: "11:00", disciplina: "Natación", actividad: "Niños 8 a 11 años Avanz.", profe: "" },
        { hora: "12:00", disciplina: "Natación", actividad: "Pileta Libre", profe: "" },
        { hora: "13:00", disciplina: "Natación", actividad: "Nat. Adultos Avanzados", profe: "" },
        { hora: "14:00", disciplina: "Natación", actividad: "Niños 5 a 7 años", profe: "" },
        { hora: "15:00", disciplina: "Natación", actividad: "Nat. Adolescentes +12 años", profe: "" },
        { hora: "16:00", disciplina: "Natación", actividad: "Nat. Adultos Iniciales", profe: "" },
        { hora: "17:00", disciplina: "Natación", actividad: "Pileta Libre", profe: "" },
        { hora: "18:00", disciplina: "Natación", actividad: "Hidrogimnasia", profe: "" },
        { hora: "19:00", disciplina: "Natación", actividad: "Niños 7 a 9 años", profe: "" },
        { hora: "20:00", disciplina: "Natación", actividad: "Nat. Adultos Intermedio", profe: "" },
        { hora: "21:00", disciplina: "Natación", actividad: "Nat. Adultos Avanzados", profe: "" },

        { hora: "08:00", disciplina: "Funcional", actividad: "Funcional Mixto", profe: "Profe Belen" },
        { hora: "09:00", disciplina: "Funcional", actividad: "Funcional Adultos Mayores", profe: "Profe Belen" },
        { hora: "10:00", disciplina: "Funcional", actividad: "Funcional Kids", profe: "Profe Belen" },
        { hora: "08:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Nadia" },
        { hora: "09:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Nadia" },
        { hora: "10:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Nadia" },
        { hora: "17:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Lucía" },
        { hora: "18:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Lucía" },
        { hora: "19:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Lucía" },
        { hora: "20:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Lucía" },
        { hora: "16:00", disciplina: "Funcional", actividad: "Funcional Adolescentes", profe: "Profe Francisco" },
        { hora: "17:00", disciplina: "Funcional", actividad: "Funcional Mixto", profe: "Profe Francisco" },

        { hora: "19:00", disciplina: "Spinning", actividad: "Spinning", profe: "Profe Karina" },


      ],
    },
    {
      dia: "Martes",
      clases: [
        { hora: "07:00", disciplina: "Entrenamiento Deportivo", actividad: "Entrenamiento Deportivo", profe: "Profe Belen" },
        { hora: "07:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Araceli" },
        { hora: "08:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Araceli" },
        { hora: "09:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Araceli" },
        { hora: "10:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Araceli" },
        { hora: "11:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Araceli" },
        { hora: "12:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Araceli" },

        { hora: "08:00", disciplina: "Funcional", actividad: "Funcional Mixto", profe: "Profe Belen" },
        { hora: "09:00", disciplina: "Funcional", actividad: "Funcional Adultos Mayores", profe: "Profe Belen" },
        { hora: "08:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Nadia" },
        { hora: "09:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Nadia" },
        { hora: "10:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Nadia" },
        { hora: "10:00", disciplina: "Funcional", actividad: "Funcional Kids", profe: "Profe Belen" },
        { hora: "17:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Lucía" },
        { hora: "18:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Lucía" },
        { hora: "19:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Lucía" },
        { hora: "20:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Lucía" },
      
        { hora: "13:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Gastón" },
        { hora: "14:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Gastón" },
        { hora: "15:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Gastón" },
        { hora: "16:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Gastón" },
        { hora: "17:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Gastón" },
        { hora: "18:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Gastón" },

        { hora: "19:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Belén" },
        { hora: "20:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Belén" },
        { hora: "21:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Belén" },
        { hora: "15:00", disciplina: "Pilates", actividad: "Pilates Funcional", profe: "Profe Alicia" },
        { hora: "17:00", disciplina: "Funcional", actividad: "Funcional Kids", profe: "Profe Francisco" },

        { hora: "07:00", disciplina: "Natación", actividad: "Nat. Adultos Iniciales", profe: "" },
        { hora: "08:00", disciplina: "Natación", actividad: "Pileta Libre", profe: "" },
        { hora: "09:00", disciplina: "Natación", actividad: "Pileta Libre", profe: "" },
        { hora: "10:00", disciplina: "Natación", actividad: "Niños 3 a 4 años", profe: "" },
        { hora: "11:00", disciplina: "Natación", actividad: "Niños 5 a 7 años", profe: "" },
        { hora: "12:00", disciplina: "Natación", actividad: "Nat. Adultos", profe: "" },
        { hora: "13:00", disciplina: "Natación", actividad: "Hidrogimnasia", profe: "" },
        { hora: "14:00", disciplina: "Natación", actividad: "Niños 3 a 4 años", profe: "" },
        { hora: "15:00", disciplina: "Natación", actividad: "Niños 8 a 11 años", profe: "" },
        { hora: "16:00", disciplina: "Natación", actividad: "Pileta Libre", profe: "" },
        { hora: "17:00", disciplina: "Natación", actividad: "Nat. Adultos Iniciales", profe: "" },
        { hora: "18:00", disciplina: "Natación", actividad: "Hidrogimnasia", profe: "" },
        { hora: "19:00", disciplina: "Natación", actividad: "Nat. Adultos Iniciales", profe: "" },
        { hora: "20:00", disciplina: "Natación", actividad: "Pileta Libre", profe: "" },
        { hora: "21:00", disciplina: "Natación", actividad: "Pileta Familiar", profe: "" },
       
      ],
    },
    {
      dia: "Miércoles",
      clases: [
        { hora: "07:00", disciplina: "Entrenamiento Deportivo", actividad: "Entrenamiento Deportivo", profe: "Profe Belen" },
        { hora: "07:00", disciplina: "Natación", actividad: "Pileta Libre", profe: "" },
        { hora: "08:00", disciplina: "Natación", actividad: "Nat. Adultos Iniciales", profe: "" },
        { hora: "08:00", disciplina: "Funcional", actividad: "Funcional Mixto", profe: "Profe Belen" },
        { hora: "09:00", disciplina: "Funcional", actividad: "Funcional Adultos Mayores", profe: "Profe Belen" },
        { hora: "09:00", disciplina: "Natación", actividad: "Hidrogimnasia", profe: "" },
        { hora: "10:00", disciplina: "Natación", actividad: "Niños 7 a 9 años", profe: "" },
        { hora: "11:00", disciplina: "Natación", actividad: "Niños 8 a 11 años Avanz.", profe: "" },
        { hora: "12:00", disciplina: "Natación", actividad: "Pileta Libre", profe: "" },
        { hora: "13:00", disciplina: "Natación", actividad: "Nat. Adultos Avanzados", profe: "" },
        { hora: "14:00", disciplina: "Natación", actividad: "Niños 5 a 7 años", profe: "" },
        { hora: "15:00", disciplina: "Natación", actividad: "Nat. Adolescentes +12 años", profe: "" },
        { hora: "16:00", disciplina: "Natación", actividad: "Nat. Adultos Iniciales", profe: "" },
        { hora: "17:00", disciplina: "Natación", actividad: "Pileta Libre", profe: "" },
        { hora: "18:00", disciplina: "Natación", actividad: "Hidrogimnasia", profe: "" },
        { hora: "19:00", disciplina: "Natación", actividad: "Niños 7 a 9 años", profe: "" },
        { hora: "20:00", disciplina: "Natación", actividad: "Nat. Adultos Intermedio", profe: "" },
        { hora: "21:00", disciplina: "Natación", actividad: "Nat. Adultos Avanzados", profe: "" },

        { hora: "10:00", disciplina: "Funcional", actividad: "Funcional Kids", profe: "Profe Belen" },
        { hora: "08:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Nadia" },
        { hora: "09:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Nadia" },
        { hora: "10:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Nadia" },
        
        { hora: "14:00", disciplina: "Pilates", actividad: "Pilates Funcional", profe: "Profe Alicia" },
        { hora: "17:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Lucía" },
        { hora: "18:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Lucía" },
        { hora: "19:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Lucía" },
        { hora: "20:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Lucía" },
        { hora: "16:00", disciplina: "Funcional", actividad: "Funcional Adolescentes", profe: "Profe Francisco" },
        { hora: "17:00", disciplina: "Funcional", actividad: "Funcional Mixto", profe: "Profe Francisco" },
        { hora: "19:00", disciplina: "Spinning", actividad: "Spinning", profe: "Profe Karina" },

        { hora: "07:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Araceli" },
        { hora: "08:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Araceli" },
        { hora: "09:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Araceli" },
        { hora: "10:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Araceli" },
        { hora: "11:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Araceli" },
        { hora: "12:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Araceli" },
        { hora: "13:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Gastón" },
        { hora: "14:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Gastón" },
        { hora: "15:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Gastón" },
        { hora: "16:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Gastón" },
        { hora: "17:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Gastón" },
        { hora: "18:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Gastón" },
        { hora: "19:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Belén" },
        { hora: "20:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Belén" },
        { hora: "21:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Belén" },
       
      ],
    },
    {
      dia: "Jueves",
      clases: [
        { hora: "08:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Nadia" },
        { hora: "09:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Nadia" },
        { hora: "10:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Nadia" },
        { hora: "07:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Araceli" },
        { hora: "08:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Araceli" },
        { hora: "09:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Araceli" },
        { hora: "10:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Araceli" },
        { hora: "11:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Araceli" },
        { hora: "12:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Araceli" },
        { hora: "13:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Gastón" },
        { hora: "14:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Gastón" },
        { hora: "15:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Gastón" },
        { hora: "16:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Gastón" },
        { hora: "17:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Gastón" },
        { hora: "18:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Gastón" },
        { hora: "19:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Belén" },
        { hora: "20:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Belén" },
        { hora: "21:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Belén" },

        { hora: "15:00", disciplina: "Pilates", actividad: "Pilates Funcional", profe: "Profe Alicia" },
        { hora: "17:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Lucía" },
        { hora: "18:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Lucía" },
        { hora: "19:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Lucía" },
        { hora: "20:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Lucía" },
        { hora: "17:00", disciplina: "Funcional", actividad: "Funcional Kids", profe: "Profe Francisco" },

        { hora: "07:00", disciplina: "Natación", actividad: "Nat. Adultos Iniciales", profe: "" },
        { hora: "08:00", disciplina: "Natación", actividad: "Pileta Libre", profe: "" },
        { hora: "09:00", disciplina: "Natación", actividad: "Pileta Libre", profe: "" },
        { hora: "10:00", disciplina: "Natación", actividad: "Niños 3 a 4 años", profe: "" },
        { hora: "11:00", disciplina: "Natación", actividad: "Niños 5 a 7 años", profe: "" },
        { hora: "12:00", disciplina: "Natación", actividad: "Nat. Adultos", profe: "" },
        { hora: "13:00", disciplina: "Natación", actividad: "Hidrogimnasia", profe: "" },
        { hora: "14:00", disciplina: "Natación", actividad: "Niños 3 a 4 años", profe: "" },
        { hora: "15:00", disciplina: "Natación", actividad: "Niños 8 a 11 años", profe: "" },
        { hora: "16:00", disciplina: "Natación", actividad: "Pileta Libre", profe: "" },
        { hora: "17:00", disciplina: "Natación", actividad: "Nat. Adultos Iniciales", profe: "" },
        { hora: "18:00", disciplina: "Natación", actividad: "Hidrogimnasia", profe: "" },
        { hora: "19:00", disciplina: "Natación", actividad: "Nat. Adultos Iniciales", profe: "" },
        { hora: "20:00", disciplina: "Natación", actividad: "Pileta Libre", profe: "" },
        { hora: "21:00", disciplina: "Natación", actividad: "Pileta Familiar", profe: "" },
        
      ],
    },
    {
      dia: "Viernes",
      clases: [
        { hora: "07:00", disciplina: "Natación", actividad: "Pileta Libre", profe: "" },
        { hora: "08:00", disciplina: "Natación", actividad: "Nat. Adultos Iniciales", profe: "" },
        { hora: "08:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Nadia" },
        { hora: "09:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Nadia" },
        { hora: "10:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Nadia" },
        { hora: "09:00", disciplina: "Natación", actividad: "Hidrogimnasia", profe: "" },
        { hora: "10:00", disciplina: "Natación", actividad: "Niños 7 a 9 años", profe: "" },
        { hora: "11:00", disciplina: "Natación", actividad: "Niños 8 a 11 años Avanz.", profe: "" },
        { hora: "12:00", disciplina: "Natación", actividad: "Pileta Libre", profe: "" },
        { hora: "13:00", disciplina: "Natación", actividad: "Nat. Adultos Avanzados", profe: "" },
        { hora: "14:00", disciplina: "Natación", actividad: "Niños 5 a 7 años", profe: "" },
        { hora: "15:00", disciplina: "Natación", actividad: "Nat. Adolescentes +12 años", profe: "" },
        { hora: "16:00", disciplina: "Natación", actividad: "Nat. Adultos Iniciales", profe: "" },
        { hora: "17:00", disciplina: "Natación", actividad: "Pileta Libre", profe: "" },
        { hora: "18:00", disciplina: "Natación", actividad: "Hidrogimnasia", profe: "" },
        { hora: "19:00", disciplina: "Natación", actividad: "Niños 7 a 9 años", profe: "" },
        { hora: "20:00", disciplina: "Natación", actividad: "Nat. Adultos Intermedio", profe: "" },
        { hora: "21:00", disciplina: "Natación", actividad: "Nat. Adultos Avanzados", profe: "" },
        { hora: "07:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Araceli" },
        { hora: "08:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Araceli" },
        { hora: "09:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Araceli" },
        { hora: "10:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Araceli" },
        { hora: "11:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Araceli" },
        { hora: "12:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Araceli" },
        { hora: "13:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Gastón" },
        { hora: "14:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Gastón" },
        { hora: "15:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Gastón" },
        { hora: "16:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Gastón" },
        { hora: "17:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Gastón" },
        { hora: "18:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Gastón" },
        { hora: "19:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Belén" },
        { hora: "20:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Belén" },
        { hora: "21:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Belén" },

        { hora: "14:00", disciplina: "Pilates", actividad: "Pilates Funcional", profe: "Profe Alicia" },
        { hora: "17:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Lucía" },
        { hora: "18:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Lucía" },
        { hora: "19:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Lucía" },
        { hora: "20:00", disciplina: "Pilates", actividad: "Pilates", profe: "Profe Lucía" },
        { hora: "16:00", disciplina: "Funcional", actividad: "Funcional Adolescentes", profe: "Profe Francisco" },
        { hora: "17:00", disciplina: "Funcional", actividad: "Funcional Mixto", profe: "Profe Francisco" },
        { hora: "19:00", disciplina: "Spinning", actividad: "Spinning", profe: "Profe Karina" }
   
      ],
    },
    {
      dia: "Sábado",
      clases: [
        { hora: "10:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Belén" },
        { hora: "11:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Belén" },
        { hora: "12:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Belén" },
        { hora: "13:00", disciplina: "Musculación", actividad: "Musculación", profe: "Profe Belén" },
        { hora: "12:00", disciplina: "Natación", actividad: "Pileta Familiar", profe: "" }, 
        { hora: "13:00", disciplina: "Natación", actividad: "Nat. Adultos", profe: "" },
        { hora: "14:00", disciplina: "Natación", actividad: "Hidrogimnasia", profe: "" },
      ],
    },
  ];

  const location = useLocation();
  const [filtro, setFiltro] = useState(disciplinas[0]);

  useEffect(() => {
    if (location.state?.filtro) {
      setFiltro(location.state.filtro);
    }
  }, [location.state]);

  // Obtener todas las horas únicas (ordenadas)
  const todasLasHoras = [
    ...new Set(
      horarios.flatMap((d) => d.clases.map((c) => c.hora))
    ),
  ].sort((a, b) => a.localeCompare(b));

  // Obtener días
  const dias = horarios.map((d) => d.dia);

  // Buscar clase por día y hora
  const getClase = (dia, hora) => {
    const diaData = horarios.find((d) => d.dia === dia);
    if (!diaData) return [];

    let clases = diaData.clases.filter((c) => c.hora === hora);
    //if (!clases) return [];
    
    clases = clases.filter((c) => c.disciplina === filtro);
    return clases;  
  };

  
  const generarPDF = async () => {
    const pdf = new jsPDF("landscape", "pt", "a4");
    const logo = document.getElementById("logo");

    const logoX = 15;
    const logoY = 10;
    const logoWidth = 60;
    const logoHeight = 60;

    pdf.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(18);
    pdf.text(`Horarios - ${filtro}`, logoX + logoWidth + 10, logoY + logoHeight / 2 + 5);

    const startY = logoY + logoHeight + 15; 

    const todasLasHoras = [
      ...new Set(
        horarios.flatMap((d) => d.clases.map((c) => c.hora))
      ),
    ].sort((a, b) => a.localeCompare(b));

    const columnas = ["Hora", ...horarios.map((d) => d.dia)];

    const filas = todasLasHoras.map((hora) => {
      const row = [hora];

      horarios.forEach((diaData) => {
        const claseHora = diaData.clases.filter((c) => c.hora === hora);
        if(claseHora.length === 0){
          row.push("-");
          return;
        }

        const clasesFiltradas = claseHora.filter((c) => c.disciplina === filtro);

        if (clasesFiltradas.length === 0) {
          row.push("-");
          return;
        }
        const textoCelda = clasesFiltradas
            .map((c) => {
              const prof = c.profe ? ` (${c.profe})` : "";
              return `${c.actividad}${prof}`;
            })
            .join("\n---\n");

          row.push(textoCelda);
        });

      return row;
    });

    autoTable(pdf, {
      head: [columnas],
      body: filas,
      startY: startY,
      theme: "grid",
      styles: {
        fontSize: 10,
        cellPadding: 3,
        halign: "center",
        valign: "middle",
      },
      headStyles: {
        fillColor: [32, 104, 190],
        textColor: 255,
        fontStyle: "bold",
      },
      tableWidth: "auto",
      margin: { left: 20, right: 20 },
    }); 
    
    const blob = pdf.output("blob");
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  }

  return (
    <>
      <img src={logo} id="logo"/>

      <section className="pages-section">
        <div className="container horarios">
          <div className=" mb-4">
            <h2 className="titulo-pagina mb-3 mb-md-0">Horarios</h2>
                      
            <div className="filtro-pdf text-center text-md-start mt-4">
              <select
                className="form-select d-inline-block w-auto"
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
              >
                {/*<option value="Todas">Todas las disciplinas</option>*/}
                {disciplinas.map((d) => (
                  <option key={d} value={d} translate="no">
                    {d}
                  </option>
                ))}
              </select>
              <button className="btn btn-principal btn-horario" onClick={generarPDF}>
                Ver Horario
              </button>
            </div>
          </div>

          <div className="tabla-container">
            <table className="table table-bordered text-center align-middle tabla-horarios">
              <thead className="table-head">
                <tr>
                  <th className="celda-hora">Hora</th>
                  {dias.map((dia) => (
                    <th key={dia}>{dia}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {todasLasHoras.map((hora) => (
                  <tr key={hora}>
                    <td className="fw-bold celda-hora">{hora}</td>
                    {dias.map((dia) => {
                      const actividades = getClase(dia, hora);
                      return (
                    
                      <td key={`${dia}-${hora}`}>
                        {actividades.length > 0 ? (
                            actividades.map((actividad, index) => (     
                              <div key={index} className="mb-1">
                                <p className="nombre-actividad" translate="no">{actividad.actividad}</p>
                                {actividad.profe && (
                                  <p className="profesor text-muted small">{actividad.profe}</p>
                                )}
                              </div>
                            ))
                          ) : (
                          "-"                   
                        )}
                      </td>
                      );
                    })}

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </>
  );
}

