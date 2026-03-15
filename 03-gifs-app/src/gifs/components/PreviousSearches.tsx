import type { FC } from "react"

interface PreviousSearchesProps {
  items: string[]
}

export const PreviousSearches: FC<PreviousSearchesProps> = ( {items} ) => {
  return (
    <div className='history-container'>
      <h2>Historial de Busquedas</h2>
      <ul className='history-list'>
        {
          items.map((item) => (
          <li key={item}>{item}</li>
        ))
        }
      </ul>
    </div>
  )
}
