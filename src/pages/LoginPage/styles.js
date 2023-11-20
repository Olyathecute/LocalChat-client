import { Button as ButtonAntD, Form as FormAntD } from 'antd'
import { gray } from '@ant-design/colors'
import { MailOutlined, UserOutlined } from '@ant-design/icons'
import styled from 'styled-components'

export const Header = styled.h1`
  font-weight: 700;
`

export const Form = styled(FormAntD)`
  width: 40%;
  max-width: 400px;
`

export const Button = styled(ButtonAntD)`
  width: 100%;
`

export const IconUser = styled(UserOutlined)`
  color: ${gray[0]};
`

export const IconMail = styled(MailOutlined)`
  color: ${gray[0]};
`
