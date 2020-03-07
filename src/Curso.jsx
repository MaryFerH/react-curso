import React from 'react'
import PropTypes from 'prop-types'
//Cuando se recibe por props se recibe todo el objeto, pero esto se puede optimisar
//escojiendo solo lo que se necesita para tu componente ({titulo,imagen,price})
const Curso = ({titulo,imagen,price,profesor})=>(
    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src={imagen} alt={titulo}></img>
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">{titulo}</h3>
        <div className="s-mb-2 s-main-center">
          <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
              <div className="circle img-container">
                <img src="https://1.bp.blogspot.com/-79DdxzZkDog/T76QV6v5IuI/AAAAAAAAAEY/6DzpGZzsmfA/s320/homerocatolico_456_336.jpg" alt=""></img>
              </div>
            </div>
            <span className="small">{profesor}</span>
          </div>
        </div>        
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="https://ux.ed.team/cards.html">$ {price} usd</a>
        </div>
      </div>
    </article>    
)

Curso.propTypes = {
    titulo: PropTypes.string,
    imagen: PropTypes.string,
    price: PropTypes.string,
    profesor: PropTypes.string
}

Curso.defaultProps ={
    titulo: "No se encontró titulo",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZWxq_DqhMbwm5yN1F3G3O7AU0r37vyj6MZOAGxj-7Gxq3Rr0R",
    price: "20",
    profesor: "Fer"
}
export default Curso