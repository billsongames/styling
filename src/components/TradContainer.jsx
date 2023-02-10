import {useState, useEffect} from "react"
import axios from "axios"
import "../styles/TradContainer.css"

const Container = () => {
    const [pokemon, setPokemon] = useState([])
    const [selected, setSelected] = useState()
    const [image, setImage] = useState()

    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/type/fire`).then(res => {
      setPokemon(res.data.pokemon)
        })
    }, [])

    useEffect(() => {
      axios.get(selected).then(res => {
      setImage(res.data.sprites.front_default)
      })  
    }, [selected])

    return (
      <div>
        <h1>Fire Types!</h1>
        <div className="fireTypes">
          {pokemon.map((thisPokemon) => {
            return (
              <div className="fireCard" onMouseEnter={() => setSelected(thisPokemon.pokemon.url)} onMouseLeave={() => setSelected()}>
                {thisPokemon.pokemon.name}
                {(selected === thisPokemon.pokemon.url) && <img src={image} className="pokemonImage"/>}
              </div>
              
            )
          })}
        </div>
      </div>
    )
}

export default Container