import React from 'react'

const Curso =()=>(
    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src="https://definicionyque.es/wp-content/uploads/2018/10/IMAGEN-_PUBLICITARIA.jpg" alt="Poster del curso"></img>
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">
          Programación orientada a objetos con Go
        </h3>
        <div className="s-mb-2 s-main-center">
          <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
              <div className="circle img-container">
                <img src="https://1.bp.blogspot.com/-79DdxzZkDog/T76QV6v5IuI/AAAAAAAAAEY/6DzpGZzsmfA/s320/homerocatolico_456_336.jpg" alt=""></img>
              </div>
            </div>
            <span className="small">Alexys Lozada</span>
          </div>
        </div>
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="https://ux.ed.team/cards.html">$ 20USD</a>
        </div>
      </div>
    </article>    
)

export default Curso