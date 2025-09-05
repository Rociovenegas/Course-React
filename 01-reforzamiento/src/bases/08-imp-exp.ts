import { heroes, Owner, type Hero } from '../data/heroes.data';

const getHeroById = ( id:number ): Hero | undefined => {
    
    const hero = heroes.find( (hero) => {
        return hero.id === id;
    });

    // if (!hero) {
    //     throw new Error(`No existe un héroe con el id ${id}`); 
    // }

    return hero;
}

//console.log(getHeroById(1));

/**
 *  getHeroesByOwner => Hero[]
 * Filtra héroes por su propietario
 * @param Owner - El propietario por el cual filtrar (DC o Marvel), usar la enumeración Owner
 * @returns Array de héroes pertenecientes al propietario especificado
 */

export const getHeroesByOwner = ( owner:Owner ): Hero[] => {
    let heroesByOwner: Hero[] = [];
    heroes.filter( (hero) => {
        if ( hero.owner === owner ) heroesByOwner.push(hero);
    })

    return heroesByOwner;
}


// export const getHeroesByOwner = (owner: Owner) => {
//   const heroesByOwner = heroes.filter((hero) => hero.owner === owner);
//   return heroesByOwner;
// };

// export const getHeroesByOwner = (owner: Owner) =>
// 


//console.log(getHeroById)
//console.log(getHeroesByOwner(Owner.DC));
