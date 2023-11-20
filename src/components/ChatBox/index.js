import { createRef } from 'react'
import { SendOutlined } from '@ant-design/icons'
import {
  Wrapper,
  RoomInfo,
  RoomName,
  RoomUsers,
  LeftButton,
  MessagesBox,
  Message,
  MessageSender,
  MessageContentWrapper,
  MessageContent,
  SendGroup,
  TextArea,
  SendButton,
} from './styles'

function ChatBox({ currentRoom, userName, usersInRoom, messages, message, setMessage, sendMessage, leftRoom }) {
  const textarea = createRef(null)

  return (
    <Wrapper>
      <RoomInfo>
        <RoomName>{currentRoom}</RoomName>
        <RoomUsers>
          {usersInRoom} user{usersInRoom !== 1 && 's'} in this room
        </RoomUsers>
        <LeftButton type='primary' onClick={leftRoom}>
          Left The Room
        </LeftButton>
      </RoomInfo>

      <MessagesBox>
        {messages.map((message, index) => {
          const itsMe = userName.trim().toLowerCase() === message.user.name.trim().toLowerCase()

          return (
            <Message key={index} $itsMe={itsMe}>
              <MessageSender>{message.user.name}</MessageSender>
              <MessageContentWrapper>
                <MessageContent $itsMe={itsMe}>{message.message}</MessageContent>
              </MessageContentWrapper>
            </Message>
          )
        })}
      </MessagesBox>

      <SendGroup>
        <TextArea
          ref={textarea}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyDown={(event) => event.code === 'Enter' && sendMessage(event)}
          autoSize={{ minRows: 1, maxRows: 4 }}
          placeholder='Enter your message...'
        />
        <SendButton onClick={sendMessage}>
          <SendOutlined />
        </SendButton>
      </SendGroup>
    </Wrapper>
  )
}

export default ChatBox
