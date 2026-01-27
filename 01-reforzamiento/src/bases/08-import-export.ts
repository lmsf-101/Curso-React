import { heroes, type Hero }  from "./data/heroes.data"

const getHeroById = (id: number): Hero|undefined => {
    
  const hero = heroes.find(hero => hero.id === id);

  return hero;

}

console.log(getHeroById(7))
