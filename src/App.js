import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ChatPage from './pages/ChatPage'
import { blue } from '@ant-design/colors'
import styled from 'styled-components'

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/LocalChat-client/' element={<LoginPage />} />
        <Route path='/LocalChat-client/chat' element={<ChatPage />} />
      </Routes>
    </Container>
  )
}

export default App

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  background-color: ${blue[2]};
  color: #fff;
`
