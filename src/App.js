import React from 'react';
import './styles/styles.scss';
import Curso from './Curso';

const Cursos = [
  {
    titulo:"React desde cero",
    image:"https://steamuserimages-a.akamaihd.net/ugc/273969530040390215/58E29EF8863140262E52F3956A6F166C9DEE9402/",
    price:"50",
    profesor:"Fernanda"
  },
  {
    titulo:"Html desde cero",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDGhJ0Mm7sAcDmPgn1gvdctcAo8n-2F0xq3xCwgk_oz7xJBN6O",
    price:"50",
    profesor:"Sofi"
  },
  {
    titulo:"JS desde cero",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZWxq_DqhMbwm5yN1F3G3O7AU0r37vyj6MZOAGxj-7Gxq3Rr0R",
    price:"50",
    profesor:"Brayan"
  }
]

const App=()=>(
<>
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" src="https://www.imagen.com.mx/assets/img/imagen_share.png" alt="baner"></img>
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Curso de Edteam</p>
          <p> Subtítulo del banner</p>
          <a href="https://ux.ed.team/banner.html" className="button">Botón del banner</a>
        </div>
      </div>
    </div>
  </div>
  <div className="ed-grid m-grid-3">
    {
      Cursos.map(curso=>
        <Curso 
          titulo={curso.titulo} 
          imagen={curso.imagen}
          price = {curso.price}
          profesor = {curso.profesor}
        />)
    }
  </div>
</>
)

export default App;
