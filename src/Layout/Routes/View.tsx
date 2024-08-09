import { Routes , Route } from 'react-router-dom'
import Home from '../../Pages/Home'

function View() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}

export default View