import React from 'react'
import '../styles/Actividades.css'
import Disciplina from '../components/Disciplina'


export default function Actividades() {

  const preciosMusculacion = {
    clase: { debito: 13000, efectivo: 10000 },
    1: { debito: 30000, efectivo: 25000},
    2: { debito: 37000, efectivo: 30000},
    3: { debito: 44000, efectivo: 36000},
    4: { debito: 52000, efectivo: 42000},
    5: { debito: 59000, efectivo: 54000},
    6: { debito: 66000, efectivo: 60000},
  };

  const preciosFuncional = {
    clase: { debito: 13000, efectivo: 12000 },
    1: { debito: 37000, efectivo: 30000},
    2: { debito: 43000, efectivo: 36000},
    3: { debito: 52000, efectivo: 42000},
    4: { debito: 59000, efectivo: 48000},
    5: { debito: 65000, efectivo: 54000},
    6: { debito: 73000, efectivo: 60000},
  };

  const preciosPilates = {
    clase: { debito: 15000, efectivo: 12000 },
    1: { debito: 37000, efectivo: 30000},
    2: { debito: 43000, efectivo: 36000},
    3: { debito: 52000, efectivo: 42000},
    4: { debito: 59000, efectivo: 48000},
    5: { debito: 65000, efectivo: 54000},
    6: { debito: 73000, efectivo: 60000},
  };

  const preciosSpinning = {
    clase: { debito: 15000, efectivo: 12000 },
    1: { debito: 37000, efectivo: 30000},
    2: { debito: 43000, efectivo: 36000},
    3: { debito: 52000, efectivo: 42000},
    4: { debito: 59000, efectivo: 48000},
    5: { debito: 65000, efectivo: 54000},
    6: { debito: 73000, efectivo: 60000},
  };

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
    { id: 2, src: '/assets/entrenamiento2.jpg' },
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
    { id: 'natacionkids', titulo: 'Niños', descripcion: 'Clases lúdicas y seguras que promueven la adaptación al agua y el desarrollo de habilidades básicas de nado'},
    { id: 'hidrogimnasia', titulo: 'Hidrogimnasia',
      descripcion: 'Actividad acuática de bajo impacto, ideal para mejorar movilidad, circulación y fuerza muscular.',
    },
   
  ];

  const modalFuncional = [
    {id: 'mixto', titulo: 'Mixto', descripcion: 'Se trabaja con rutinas variadas, aplicables y utiles como base para distintos deportes.'},
    {id: 'mayores', titulo: 'Adultos Mayores', descripcion: 'Se trabaja en base a la fuerza de cada persona, previniendo lesiones y mejorando la calidad de vida de cada adulto.'},
    {id: 'kids', titulo: 'Kids', descripcion: 'Se busca desarrollar coordinación, equilibrio, motricidad gruesa y habilidades básicas (correr, saltar, trepar).'},
    {id: 'adolescentes', titulo: 'Adolescentes', descripcion: 'Se apunta a mejorar fuerza, velocidad, resistencia y agilidad, ya que el cuerpo está en pleno crecimiento.'},
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
        descripcion="Fortalece y define tu cuerpo con rutinas personalizadas, enfocadas en fuerza, resistencia y tonificación muscular"
        precios={preciosMusculacion}
        fotos={fotosMusculacion}
      />

      <Disciplina
        titulo="Pilates"
        descripcion="Conecta cuerpo y mente con ejercicios que mejoran tu postura,
         flexibilidad y control corporal"
        subactividad="Pilates Funcional"
        precios={preciosPilates}
        fotos={fotosPilates}
         modalData={modalPilates}
        reverse
      />

      <Disciplina
        titulo="Funcional"
        descripcion="Trabaja con movimientos naturales para ganar fuerza, agilidad y rendimiento en tu día a día."
        subactividad="Funcional Mixto - Adultos Mayores - Adolescentes - Kids"
        precios={preciosFuncional}
        fotos={fotosFuncional}
        modalData={modalFuncional}
      />
      <Disciplina
        titulo="Spinning"
        descripcion="Activa tu energía con sesiones intensas de ciclismo indoor que mejoran tu resistencia cardiovascular"
        precios={preciosSpinning}
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
        subactividad="Natación Adultos - Adultos Iniciales - Niños - Pileta Libre - Hidrogimnasia"
        
        matricula="Matrícula (50% de la cuota mensual) se abona una vez al año"
        fotos={fotosNatacion}
        modalData={modalNatacion}
        reverse
      />

  
    </div>
  )
}
