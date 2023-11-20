import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import socketIO from 'socket.io-client'
import ChatBox from '../../components/ChatBox'

const socket = socketIO.connect('https://localchat-ch58.onrender.com')

function ChatPage() {
  const navigate = useNavigate()
  const { search } = useLocation()
  const [params, setParams] = useState({ room: '', user: '' })
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')
  const [users, setUsers] = useState(0)

  useEffect(() => {
    const searchParams = Object.fromEntries(new URLSearchParams(search))
    setParams(searchParams)
    socket.emit('join', searchParams)
  }, [search])

  useEffect(() => {
    socket.on('message', (data) => setMessages((state) => [...state, data]))
  }, [])

  useEffect(() => {
    socket.on('room', ({ users }) => setUsers(users.length))
  }, [])

  const leftRoom = () => {
    socket.emit('left', { params })
    navigate('/')
  }

  const sendMessage = (event) => {
    event.preventDefault()

    if (!message) return

    socket.emit('sendMessage', { message, params })
    setMessage('')
  }

  return (
    <ChatBox
      currentRoom={params.room}
      userName={params.name}
      usersInRoom={users}
      messages={messages}
      leftRoom={leftRoom}
      message={message}
      setMessage={setMessage}
      sendMessage={sendMessage}
    />
  )
}

export default ChatPage
