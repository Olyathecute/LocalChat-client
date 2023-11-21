import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Input } from 'antd'
import { Header, Form, Button, IconUser, IconMail } from './styles'

function LoginPage() {
  const [link, setLink] = useState(null)

  const onFinish = (event) => {
    setLink(`/LocalChat-client/chat?room=${event.room}&name=${event.name}`)
  }

  return (
    <>
      <Header>Join</Header>
      <Form name='login' initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item name='name' rules={[{ required: true, message: 'Please input your name!' }]}>
          <Input prefix={<IconUser />} placeholder='Your name' />
        </Form.Item>
        <Form.Item name='room' rules={[{ required: true, message: 'Please input a room!' }]}>
          <Input prefix={<IconMail />} placeholder='Room' />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Enter the room
          </Button>
        </Form.Item>
      </Form>
      {link && <Navigate to={link} replace={true} />}
    </>
  )
}

export default LoginPage
