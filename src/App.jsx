import { useState } from 'react'
import './App.css'

function App() {
  const [location, setLocation] = useState('')

  const handleInputChange = (e) => {
    setLocation(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Brukerens lokasjon: ${location}')
    //Her kan man senere hente pollendata basert på lokasjon 
  }

  return (
    <div className="app">
      <h1>Pollenvarsel 🌿</h1>
      <p>Her vises dagens pollennivå basert på din lokasjon📍</p>

      <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Skriv inn din by eller sted"
        value={location}
        onChange={handleInputChange}
        />
        <button type="submit">Sjekk pollennivå</button>
      </form>
    </div>
  )
}

export default App
