import {useState, useEffect} from "react"
import axios from "axios"
import css from "../styles/ModulesContainer.module.css"

const ModulesContainer = () => {
    const [pokemon, setPokemon] = useState([])
    const [selected, setSelected] = useState()
    const [image, setImage] = useState()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type/water`).then(res => {
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
        <h1>Water Types!</h1>
        <div className={css["waterTypes"]}>
          {pokemon.map((thisPokemon) => {
              return (
                  <div className={css["waterCard"]} onMouseEnter={() => setSelected(thisPokemon.pokemon.url)} onMouseLeave={() => setSelected("")}>
                    {thisPokemon.pokemon.name}
                    {(selected === thisPokemon.pokemon.url) && <img src={image} className="pokemonImage"/>}
                  </div>
              )
          })}
        </div>
      </div>
  )
}

export default ModulesContainer