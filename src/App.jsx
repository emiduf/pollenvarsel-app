import { useState } from 'react'
import './App.css'

function App() {
  const [location, setLocation] = useState('')
  const [pollenData, setPollenData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleInputChange = (e) => {
    setLocation(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(null)

    if (!location.trim()) {
      setError('Vennligst skriv inn en gyldig lokasjon')
      return
    }

    setLoading(true)
    setPollenData(null)

    //Simulerer API-kall med 1 sekunds delay
    setTimeout(() => {
      setPollenData({
        location: location.trim(),
        level: Math.floor(Math.random() * 5) + 1, //nivå 1-5 
        type: 'Bjørk'
      })
      setLoading(false)
    }, 1000)
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

      {error && <p style={{color: 'red' }}>{error}</p>}

      {loading && <p>Laster pollendata...</p>}

      {pollenData && (
        <div style={{marginTop: '1rem'}}>
          <h2>{pollenData.location}</h2>
          <p>Type: {pollenData.type}</p>
          <p>Nivå: {pollenData.level} / 5</p>
          </div>
      )}
    </div>
  )
}

export default App
