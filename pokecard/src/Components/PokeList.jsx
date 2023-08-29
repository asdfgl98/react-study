import React from 'react'
import PokeCard from './PokeCard'

const PokeList = ({pokemons}) => {
  return (
    <div className="poke-list">
        {pokemons.map((item)=>(
            <PokeCard pokemon={item}/>
        ))}
    </div>
  )
}

export default PokeList