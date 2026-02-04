import { useState } from "react";

// Importación de archivo CSS para estilos estáticos
// import './ItemCounter.css'

// Otra forma de utilizar CSS es mediante modulos:
import styles from './ItemCounter.module.css';

interface Producto {
  nombre: string,
  cantidad?: number // El signo de interrogación hace que la propiedad sea opcional
}

// React utiliza props como una forma de enviar  información a los
// componentes:

// Como buena practica, se pueden emplear interfaces para indiciar
// que tipo de parametros / datos se esperan introducir:
export const ItemCounter = ({ nombre, cantidad = 1 }: Producto) => {

  // USO DE HOOKS (useState)
  // Mediante desestructuración de arreglo:
  const [ count, setCount ] = useState(cantidad);

  const handleAdd = () => setCount(count + 1);

  const handleSubtract = () => {
    // Si esta hasta el minimo, regresa inmediatamente:
    if (count === 1) return; 
    setCount(count - 1);
  }

  return (
    <section className={styles['item-row']}>
        <span className={styles['item-text']} style={{
          color: count === 1 ? 'blue' : 'black',
        }}>
          {nombre}
        </span>

        <button onClick={handleAdd}>+1</button>
        <span>{count}</span>
        <button onClick={handleSubtract}>-1</button>

    </section>
  )
}
