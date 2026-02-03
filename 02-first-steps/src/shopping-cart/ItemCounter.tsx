import React from 'react'

export const ItemCounter = () => {
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
          Producto
        </span>
        
        <button>+1</button>
        <span>20</span>
        <button>-1</button>

    </section>
  )
}
