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

  const modalNatacion = [
    { id: 'adultos', titulo: 'Adultos',
      descripcion: 'Clases enfocadas en técnica, resistencia y nado continuo. Ideal para quienes ya tienen experiencia en el agua.',
    },
    { id: 'iniciales', titulo: 'Adultos Iniciales',
      descripcion: 'Clases para quienes recién comienzan. Se trabaja la familiarización con el medio acuático y las técnicas básicas.',
    },
    { id: 'hidrogimnasia', titulo: 'Hidrogimnasia',
      descripcion: 'Actividad acuática de bajo impacto, ideal para mejorar movilidad, circulación y fuerza muscular.',
    },
  ];

  const modalFuncional = [
    {id: 'mixto', titulo: 'Mixto', descripcion: 'Se trabaja con rutinas variadas, aplicables y utiles como base para distintos deportes.'},
    {id: 'mayores', titulo: 'Adultos Mayores', descripcion: ''},
    {id: 'kids', titulo: 'Kids', descripcion: ''},
    {id: 'adolescentes', titulo: 'Adolescentes', descripcion: ''},
  ]

  const modalPilates = [
    {id: 'pfuncional', titulo: 'Pilates Funcional', 
      descripcion: 'Mejora tu capacidad para moverte con seguridad, fuerza y sin dolor en todas tus actividades cotidianas'}
  ]

  return (
    
    <div className='pages-section'>
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
        subactividad="Pilates Funcional"
        precios={preciosMusculacion}
        fotos={fotosPilates}
         modalData={modalPilates}
        reverse
      />

      <Disciplina
        titulo="Funcional"
        descripcion="Trabaja con movimientos naturales para ganar fuerza, agilidad y rendimiento en tu día a día."
        subactividad="Funcional Mixto - Adultos Mayores - Adolescentes - Kids"
        precios={preciosMusculacion}
        fotos={fotosFuncional}
        modalData={modalFuncional}
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
        modalData={modalNatacion}
        reverse
      />

  
    </div>
  )
}
