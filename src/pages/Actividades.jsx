import React from 'react'
import '../styles/Actividades.css'
import Disciplina from '../components/Disciplina'


export default function Actividades() {

  const preciosMusculacion = {
    clase: { debito: 17000, efectivo: 14000 },
    1: { debito: 33000, efectivo: 28000},
    2: { debito: 41000, efectivo: 33000},
    3: { debito: 49000, efectivo: 40000},
    4: { debito: 58000, efectivo: 47000},
    5: { debito: 65000, efectivo: 60000},
    6: { debito: 73000, efectivo: 66000},
  };

  const preciosFuncional = {
    clase: { debito: 17000, efectivo: 14000 },
    1: { debito: 41000, efectivo: 33000},
    2: { debito: 48000, efectivo: 40000},
    3: { debito: 58000, efectivo: 47000},
    4: { debito: 65000, efectivo: 53000},
    5: { debito: 72000, efectivo: 60000},
    6: { debito: 81000, efectivo: 66000},
  };

  const preciosPilates = {
    clase: { debito: 17000, efectivo: 14000 },
    1: { debito: 41000, efectivo: 33000},
    2: { debito: 48000, efectivo: 40000},
    3: { debito: 58000, efectivo: 47000},
    4: { debito: 65000, efectivo: 53000},
    5: { debito: 72000, efectivo: 60000},
    6: { debito: 81000, efectivo: 66000},
  };

  const preciosJudo = {
    clase: { debito: 50000, efectivo: 45000 }
  };

  const fotosMusculacion = [
    { id: 1, src: '/disciplinas/musculacion.png' },
    { id: 2, src: '/disciplinas/musculacion2.png' },
  ];

  const fotosPilates = [
    { id: 1, src: '/disciplinas/pilates1.jpg' },
    { id: 2, src: '/disciplinas/pilates2.jpg' },
  ];
  
  const fotosFuncional = [
    { id: 1, src: '/disciplinas/funcional.jpg' },
    { id: 2, src: '/disciplinas/funcional2.jpg' },
  ];

  const fotosEntrenamiento = [
    { id: 1, src: '/disciplinas/entrenamiento.jpg' },
    { id: 2, src: '/disciplinas/entrenamiento2.jpg' },
  ];
  
  const fotosJudo = [
    { id: 1, src: '/disciplinas/df1.jpg' },
    { id: 2, src: '/disciplinas/df2.jpg' },
  ];
  
  const fotosNatacion = [
    { id: 1, src: '/disciplinas/natacion.jpg' },
    { id: 2, src: '/disciplinas/natacion2.jpg' },
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
        titulo="Judo"
        descripcion="Entrena la fuerza del respeto y la disciplina para caer, levantarte y superar tus límites"
        precios={preciosJudo}
        fotos={fotosJudo}
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
