import React from 'react'

interface Producto {
  nombre: string,
  cantidad?: number // El signo de interrogación hace que la propiedad sea opcional
}

// React utiliza props como una forma de enviar  información a los
// componentes:

// Como buena practica, se pueden emplear interfaces para indiciar
// que tipo de parametros / datos se esperan introducir:
export const ItemCounter = ({ nombre, cantidad }: Producto) => {
  return (
    <section style={{
      display: 'flex',
      alignItems: 'center',
      gap: 15,
      margin: 15,
      border: '1px solid red',
      fontFamily: 'serif'
    }}>
        <span style={{
          marginRight: 20
        }}>
          {nombre}
        </span>

        <button>+1</button>
        <span>{cantidad ? cantidad : 10}</span>
        <button>-1</button>

    </section>
  )
}
