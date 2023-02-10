import {useState, useEffect} from "react"
import axios from "axios"
import styled from "styled-components"

const GrassTypes = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: 32px
`
const GrassCard = styled.div`
  text-align: center;
  width: 10%;
  height: 32px;
  background-color: green;
  color: white;
  border: 2px solid black;
  border-radius: 4px;
  margin: 2px;
  padding: 2px;
  font-size: 16px;
  font-weight: bold;
`


const StyledContainer = () => {
    const [pokemon, setPokemon] = useState([])
    const [selected, setSelected] = useState()
    const [image, setImage] = useState()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type/grass`).then(res => {
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
        <h1>Grass Types!</h1>
        <GrassTypes>
          {pokemon.map((thisPokemon) => {
              return (
                  <GrassCard onMouseEnter={() => setSelected(thisPokemon.pokemon.url)} onMouseLeave={() => setSelected()}>
                    {thisPokemon.pokemon.name}
                    {(selected === thisPokemon.pokemon.url) && <img src={image} className="pokemonImage"/>}
                  </GrassCard>
              )
          })}
        </GrassTypes>
      </div>
  )
}

export default StyledContainer