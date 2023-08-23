import './App.css'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import SuperheroesPage from './components/SuperheroesPage'
import { QueryClientProvider, QueryClient } from "react-query"
import RQSuperheroesPage from './components/RQSuperheroesPage'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <section className="container py-5">
          <Routes>
            <Route path="/super-heroes" element={<SuperheroesPage />} />
            <Route path="/rq-super-heroes" element={<RQSuperheroesPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </section> 
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
