import { useState, useEffect } from "react"

export default function FetchApi() {

    const [character, setCharacter] = useState([])

    useEffect(() => {
        fetch("https://swapi.dev/api/people/1/")
        .then(response => response.json())
        .then(result => setCharacter(result))
        .catch(error => console.error(error))
    }, [])

    return(
        <>
        <h2>Fetch Api Example from SWAPI</h2>
        <p>Name: {character.name}</p>
        <p>Birth Year: {character.birth_year}</p>
        <p>Gender: {character.gender}</p>
        </>
    )
}