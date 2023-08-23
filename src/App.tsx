import './App.css'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import SuperheroesPage from './components/SuperheroesPage'
import RQSuperheroesPage from './components/RQSuperheroesPage'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <section className="container py-5">
        <Routes>
          <Route path="/super-heroes" element={ <SuperheroesPage /> } />
          <Route path="/rq-super-heroes" element={ <RQSuperheroesPage /> } />
          <Route path="/" element={ <HomePage /> } />
        </Routes>
      </section>
    </BrowserRouter>
  )
}

export default App
