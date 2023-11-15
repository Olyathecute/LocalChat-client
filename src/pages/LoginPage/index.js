import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Button as ButtonAntD, Form as FormAntD, Input } from 'antd'
import { MailOutlined, UserOutlined } from '@ant-design/icons'
import styled from 'styled-components'

function LoginPage() {
  const [link, setLink] = useState(null)

  const onFinish = (event) => {
    setLink(`/chat?room=${event.room}&userName=${event.username}`)
  }

  return (
    <>
      <Header>Join</Header>

      <Form name='login' initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item name='username' rules={[{ required: true, message: 'Please input your Username!' }]}>
          <Input prefix={<IconUser />} placeholder='Username' />
        </Form.Item>
        <Form.Item name='room' rules={[{ required: true, message: 'Please input Room!' }]}>
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

const Header = styled.h1`
  font-weight: 700;
`

const Form = styled(FormAntD)`
  width: 40%;
  max-width: 400px;
`

const Button = styled(ButtonAntD)`
  width: 100%;
`

const IconUser = styled(UserOutlined)`
  color: #bfbfbf;
`

const IconMail = styled(MailOutlined)`
  color: #bfbfbf;
`
