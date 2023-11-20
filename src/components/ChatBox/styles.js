import { Input, Button } from 'antd'
import { blue } from '@ant-design/colors'
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 80%;
  height: 80vh;
  display: flex;
  flex-direction: column;

  border-radius: 8px;
`

export const RoomInfo = styled.div`
  background-color: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border: 1px solid ${blue[4]};

  color: #000;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`

export const RoomName = styled.h2`
  padding: 0;
`

export const RoomUsers = styled.p`
  padding: 0;
`

export const MessagesBox = styled.div`
  flex-grow: 1;

  background-color: #fff;
  border: 1px solid ${blue[4]};
  border-top: none;

  overflow: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }
`

export const Message = styled.div`
  margin: 10px 20px;
  color: #000;

  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.$itsMe ? 'flex-end' : 'flex-start')};
`

export const MessageSender = styled.p`
  margin: 0;
  padding: 10px;
`

export const MessageContentWrapper = styled.div`
  max-width: 50%;
`

export const MessageContent = styled.span`
  display: inline-block;
  background-color: ${(props) => (props.$itsMe ? blue[3] : blue[1])};
  padding: 10px;
  border-radius: 8px;
`

export const SendGroup = styled.div`
  display: flex;
  align-items: flex-end;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 1px solid ${blue[4]};
  border-top: none;

  background-color: #fff;
`

export const TextArea = styled(Input.TextArea)`
  background-color: #fff;
  border: none;
  border-color: transparent;
  box-shadow: none;

  margin: 10px 0;
  padding-left: 20px;

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

export const SendButton = styled(Button)`
  border: none;
  box-shadow: none;
  padding: 0 15px;
  height: 100%;
`

export const LeftButton = styled(Button)`
  border: none;
  box-shadow: none;
  padding: 0 15px;
`
