import React from 'react'
import PokeNav from './PokeNav'
import PokeList from './PokeList'

import {useState} from 'react'
// 포켓몬 정보 json 파일
import pokemonData from '../data/pokemon.json'

const PokeBoard = () => {

    const [pokemons, setPokemon] = useState(pokemonData)
    const [pokeCard, setPokeCard] = useState(pokemons)

    let filter = []

    const navClick = (e)=>{
        console.log(pokemons.slice(100,150))
        let nav = e.target.innerText
        if(nav === '1~50'){
            filter = pokemonData.filter((item)=> item.id >= 1 && item.id <= 50)
        }
        else if(nav === '51~100'){
            filter = pokemonData.filter((item)=> item.id >= 51 && item.id <= 100)
        }
        else if(nav === '101~151'){
            filter = pokemonData.filter((item)=> item.id >= 101 && item.id <= 151)
        }
        else if(nav === 'All'){
            filter=pokemonData
        }
        setPokeCard(filter)
    }
    
  return (
    <div>
        {/* 메뉴영역 */}
        <PokeNav click={navClick}/>
        {/* 포켓몬 정보 */}
        <PokeList pokemons={pokeCard}/>
    </div>
  )
}

export default PokeBoard