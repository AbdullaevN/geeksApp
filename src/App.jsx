import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
	const [pokemons, setPokemons] = useState([])

	useEffect(() => {
		const fetchPokemons = async () => {
			try {
				const response = await axios.get('https://pokeapi.co/api/v2/pokemon')

				setPokemons(response.data.results)
			} catch (error) {
				console.error('not found!1', error)
			}
		}

		fetchPokemons()
	}, [])

	return (
		<div className='container'>
			{pokemons.map((pokemon, index) => (
				<div key={index} className='pokemon-card'>
					<img
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
							index + 1
						}.png`}
					/>
					<h1>{pokemon.name}</h1>
				</div>
			))}
		</div>
	)
}

export default App
