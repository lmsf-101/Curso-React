import { heroes, type Hero, Owner }  from "./data/heroes.data"

const getHeroById = (id: number): Hero|undefined => {
    
  const hero = heroes.find(hero => hero.id === id);

  return hero;

}

// console.log(getHeroById(7))

// TAREA : getHeroesByOwner => Hero[]
// Filtra héroes por su propretario (DC o Marvel)
// @param Owner - El propretario a filtrar
// @returns Array de héroes que pertenence al propretario indicado

export const getHeroesByOwner = (owner: Owner)  => {
  const heroes_by_owner = heroes.filter( (hero) => hero.owner === owner);
  
  return heroes_by_owner;

}
