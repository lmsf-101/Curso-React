
interface Hero {
  key: string;
  name: string;
  age: number;
  rank?: string;
}

const person = {
  key: 'Ironman',
  name: 'Tony',
  age: 45,
  rank: 'Leader',
}

const {key, name: ironManName, age: ironManAge} = person

console.log({key, ironManName, ironManAge})

const useContext = ({key, name, age, rank }: Hero) => {
  return {
    keyName: key,
    user: {
      // TIP : Si lo haces de esta forma, se crea un par llave:valor con el nombre de "name"
      name,  
      age,
    },
    rank: rank
  };
};

// const context = useContext(person);

// Ejercicio de desestructuración de un objeto
// Para objetos anidados, se puede usar la siguiente sintaxis:
const { rank, keyName, user: {name, age} } = useContext(person);

// const { name, age } = user;

console.log(rank, keyName, name, age);
