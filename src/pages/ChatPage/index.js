import { useEffect } from 'react'
import { Input, Button as ButtonAntD } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const { TextArea: TextAreaAntD } = Input

function ChatPage() {
  useEffect(() => {}, [])

  return (
    <Wrapper>
      <MessageBox></MessageBox>
      <SendGroup>
        <TextArea autoSize={{ minRows: 1, maxRows: 4 }} placeholder='Enter your message...' />
        <Button>
          <SendOutlined />
        </Button>
      </SendGroup>
    </Wrapper>
  )
}

export default ChatPage

const Wrapper = styled.div`
  width: 80%;
  height: 80vh;
  display: flex;
  flex-direction: column;
`

const MessageBox = styled.div`
  flex-grow: 1;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
`

const SendGroup = styled.div`
  display: flex;
  align-items: flex-end;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 1px solid #d9d9d9;
  border-top: none;

  background-color: #fff;
`

const TextArea = styled(TextAreaAntD)`
  background-color: #fff;
  border: none;
  border-color: transparent;
  box-shadow: none;

  &:focus-within {
    border-color: transparent;
    box-shadow: none;
  }

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 2px;
  }
`

const Button = styled(ButtonAntD)`
  border: none;
  box-shadow: none;
  padding: 0 15px;
`
