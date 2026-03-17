import { useEffect, useState, type KeyboardEvent } from "react";

interface SearchBarProps {
  placeholder?: string
  onQuery: (query: string) => void;
}

export const SearchBar = ( {placeholder = 'Buscar', onQuery}: SearchBarProps) => {
  // Para empezar a administrar el valor / texto de la entrada
  // de busqueda que ingresa el usuario, es necesario manejarlo
  // mediante useState
  const [query, setQuery] = useState('');

  // Empiezo de useEffect para aplicar el patron de Debouncer (Retrasar la)
  // ejecución hasta que el usuario deje de escribir su busqueda:
  useEffect(() => {
    const timeOutID = setTimeout(() => {
        onQuery(query);
    }, 700)

    return () => {
      clearTimeout(timeOutID);
    }

  }, [query, onQuery])

  const handleSearch = () => {
    onQuery(query);
    setQuery('');
  }

  // 1. Tipicamente, y como practica, se pueden separar eventos / acciones
  // dentro de un componente como funciones individuales, ya que permite
  // mantener la estructura del componente mas limpia, y puede que ayude
  // a renderizar mejor (Investigar):
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    (event.key == "Enter") && handleSearch();
  }
  
  return (
    <div className='search-container'>
      <input type='text' 
        placeholder={placeholder} 
        value={ query }
        onChange={ (event) => setQuery(event.target.value)}
        // 2. De esta manera, se mantiene el codigo del componente mas limpio 
        onKeyDown={ handleKeyDown }
      />
      <button
        onClick={ handleSearch }
      >
        Buscar
      </button>
    </div>
  )
}
