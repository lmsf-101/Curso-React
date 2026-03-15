import type { FC } from "react"

interface PreviousSearchesProps {
  items: string[]
  // Agregar una funcion como argumento del componente:
  onItemClick: (term: string) => void;
}

export const PreviousSearches: FC<PreviousSearchesProps> = ( {items, onItemClick} ) => {
  return (
    <div className='history-container'>
      <h2>Historial de Busquedas</h2>
      <ul className='history-list'>
        {
          items.map((item) => (
          <li key={item}
            onClick={() => onItemClick(item)}
          >{item}</li>
        ))
        }
      </ul>
    </div>
  )
}
