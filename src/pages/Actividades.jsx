import React from 'react'
import './Actividades.css'
import Disciplina from '../components/Disciplina'


export default function Actividades() {

  const preciosMusculacion = {
    1: { debito: 30000, efectivo: 25000},
    2: { debito: 40000, efectivo: 25000},
    3: { debito: 50000, efectivo: 25000},
    4: { debito: 50000, efectivo: 25000},
    5: { debito: 50000, efectivo: 25000},
    6: { debito: 50000, efectivo: 25000},

  }

  const fotosMusculacion = [
    { id: 1, src: '/assets/musculacion.png' },
    { id: 2, src: '/assets/musculacion2.png' },
  ];

  const fotosPilates = [
    { id: 1, src: '/assets/pilates1.jpg' },
    { id: 2, src: '/assets/pilates2.jpg' },
  ];
  
  const fotosFuncional = [
    { id: 1, src: '/assets/funcional.jpg' },
    { id: 2, src: '/assets/spinning2.jpg' },
  ];

  const fotosEntrenamiento = [
    { id: 1, src: '/assets/entrenamiento.jpg' },
    { id: 2, src: '/assets/spinning2.jpg' },
  ];
  
  const fotosSpinning = [
    { id: 1, src: '/assets/spinning.jpg' },
    { id: 2, src: '/assets/spinning2.jpg' },
  ];
  
  const fotosNatacion = [
    { id: 1, src: '/assets/natacion.jpg' },
    { id: 2, src: '/assets/natacion2.jpg' },
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
        subactividad="Pilates - Pilates Funcional"
        precios={preciosMusculacion}
        fotos={fotosPilates}
        reverse
      />

      <Disciplina
        titulo="Funcional"
        descripcion="Trabaja con movimientos naturales para ganar fuerza, agilidad y rendimiento en tu día a día."
        subactividad="Funcional Mixto - Funcional Adultos Mayores - Funcional Kids"
        precios={preciosMusculacion}
        fotos={fotosFuncional}
      />
      <Disciplina
        titulo="Spinning"
        descripcion="Activa tu energía con sesiones intensas de ciclismo indoor que mejoran tu resistencia cardiovascular"
        precios={preciosMusculacion}
        fotos={fotosSpinning}
        reverse
      />

       <Disciplina
        titulo="Entrenamiento Deportivo"
        descripcion="Espacio perfecto para alcanzar tus objetivos deportivos, trabajando tu  potencia, pliometria y resistencia"        
        precios={preciosMusculacion}
        fotos={fotosEntrenamiento}
      />
      <Disciplina
        titulo="Natación"
        descripcion="Entrena todo tu cuerpo en el agua, mejora tu capacidad pulmonar, resistencia y técnica."        
        subactividad="Natación Adultos - Natación Adultos Iniciales - Pileta Libre - Hidrogimnasia"
        precios={preciosMusculacion}
        fotos={fotosNatacion}
        reverse
      />

      <div className="sub-actividades">
        <div className="card">
          <div className="box">
          </div>
        </div>
      </div>
    </div>
  )
}
