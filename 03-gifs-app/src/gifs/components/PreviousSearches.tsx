interface PreviousSearchesProps {
  items: string[]
}

export const PreviousSearches = ( {items}: PreviousSearchesProps) => {
  return (
    <div className='history-container'>
      <h2>Historial de Busquedas</h2>
      <ul className='history-list'>
        {
          items.map((item) => <li>{item}</li>)
        }
      </ul>
    </div>
  )
}
