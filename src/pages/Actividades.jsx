import React from 'react'
import './Actividades.css'
import Disciplina from '../components/Disciplina'


export default function Actividades() {

  const preciosMusculacion = {
    1: { debito: 30000, efectivo: 25000},
    2: { debito: 40000, efectivo: 25000},
    3: { debito: 50000, efectivo: 25000}
  }

  const fotosMusculacion = [
    { id: 1, src: '/musculacion.png' },
    { id: 2, src: '/musculacion2.png' },
  ];

  const fotosPilates = [
    { id: 1, src: '/pilates1.jpg' },
    { id: 2, src: '/pilates2.jpg' },
  ];

  return (
    
    <div className=''>
      <div className='titulo-pagina' id=''>Disciplinas</div>
      
      <Disciplina
        titulo="Musculación"
        descripcion="Fortalece y define tu cuerpo con rutinas personalizadas, 
        enfocadas en fuerza, resistencia y tonificación muscular"
        precios={preciosMusculacion}
        fotos={fotosMusculacion}
      />

      <Disciplina
        titulo="Pilates"
        descripcion="Conecta cuerpo y mente con ejercicios que mejoran tu postura,
         flexibilidad y control corporal"
        precios={preciosMusculacion}
        fotos={fotosPilates}
        reverse
      />

      <Disciplina
        titulo="Funcional"
        descripcion="Trabaja con movimientos naturales para ganar fuerza, agilidad y rendimiento en tu día a día."
        precios={preciosMusculacion}
        fotos={fotosPilates}
      />
    </div>
  )
}
