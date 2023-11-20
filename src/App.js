import { Routes, Route } from 'react-router-dom'
import Container from './components/Container'
import LoginPage from './pages/LoginPage'
import ChatPage from './pages/ChatPage'

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/chat' element={<ChatPage />} />
      </Routes>
    </Container>
  )
}

export default App
