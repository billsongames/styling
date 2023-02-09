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
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type/grass`).then(res => {
            setPokemon(res.data.pokemon)
        })
    }, [])
    return (
      <div>
        <h1>Grass Types!</h1>
        <GrassTypes>
          {pokemon.map((thisPokemon) => {
              return (
                  <GrassCard>
                      {thisPokemon.pokemon.name}
                  </GrassCard>
              )
          })}
        </GrassTypes>
      </div>
  )
}

export default StyledContainer