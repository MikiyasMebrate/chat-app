import { useContext, useEffect, useState } from "react";
import pattern05 from "../../assets/bg-pattern/pattern-05.png";
import MessageContext from "../../context/MessageContext";
import ChatHeader from "./ChatHeader";
import Message from "./Message";
import AuthContext from "../../context/AuthContext";
import formatDateTime from "../../utility/formatDateTime"
import { useParams } from "react-router-dom"
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  text: yup.string().min(1).required()
})


const Default = () => {
  const { room, createRoom, loading } = useContext(MessageContext);
  const { userInfo } = useContext(AuthContext)
  const [roomUrl, setRoomUrl] = useState(null)
  const [ws, setWs] = useState(null);
  const [messageSocket, setMessageSocket] = useState([])


  const { register, handleSubmit, reset, formState: { isSubmitting, errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const params = useParams()

  useEffect(() => {
    createRoom(params.username)
  }, [params.username])

  useEffect(() => {
    if (room) {
      setRoomUrl(`ws://127.0.0.1:8000/ws/chat/${room.room}/`);
    }
  }, [room]);

  useEffect(() => {
    if (roomUrl) {
      const socket = new WebSocket(roomUrl);

      socket.onopen = () => {
        console.log('WebSocket connected');
      };

      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log('Received message:', data);
        setMessageSocket((messageSocket) => [...messageSocket, data]);
      };

      socket.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

      socket.onclose = () => {
        console.log('WebSocket closed');
      };

      setWs(socket);

     // Cleanup the WebSocket connection when the component unmounts or roomUrl changes
      return () => {
        if (socket.readyState === WebSocket.OPEN) {
          socket.close();
        }
      };
    }
  }, [roomUrl]);

  const handleOnSubmit = (data) => {
    const message = {
      'msg': data.text,
      'id': userInfo.id
    }
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ message: message }));
    }
    reset();
  };


  return (
    <>
      <div
        className="user-chat w-100 overflow-hidden"
        style={{ background: `url(${pattern05})` }}
      >
        {!room && !loading && (
          <div className="position-absolute top-50 start-50 translate-middle bg-secondary rounded-pill">
            <p className="p-3 pb-0 text-light">
              {" "}
              Select a Chat to start messaging!{" "}
            </p>
          </div>
        )}

        {room && !loading && (
          <div className="chat-content d-lg-flex">
            <div className="w-100 overflow-hidden position-relative">
              <div
                id="users-chat"
                className="position-relative"
                style={{ display: "block" }}
              >
                <ChatHeader user={room?.user2[0]} />

                <div
                  className="chat-conversation p-3 p-lg-4 simplebar-scrollable-y"
                  id="chat-conversation"
                  data-simplebar="init"
                >
                  <div className="simplebar-wrapper" style={{ margin: "-24px" }}>
                    <div className="simplebar-height-auto-observer-wrapper">
                      <div className="simplebar-height-auto-observer"></div>
                    </div>


                    <div className="simplebar-mask">

                      <div className="simplebar-offset" style={{ right: "0px", bottom: "0px" }} >
                        <div className="simplebar-content-wrapper" tabIndex="0" role="region" aria-label="scrollable content" style={{ height: "100%", overflow: "hidden scroll" }}>



                          <div className="simplebar-content" style={{ padding: "24px" }} >


                            <ul className="list-unstyled chat-conversation-list" id="users-conversation" >
                              {room?.messages.map((msg, index) => {
                                if (msg.sender_id != userInfo.id) {
                                  return (
                                    <li key={index} className="chat-list left" id="1">
                                      <div className="conversation-list">
                                        <div className="user-chat-content">
                                          <div className="ctext-wrap">
                                            <div className="ctext-wrap-content" id="1">
                                              <p className="mb-0 ctext-content">
                                                {msg.message}
                                              </p>
                                            </div>
                                          </div>
                                          <div className="conversation-name">
                                            <small className="text-muted time">
                                              {formatDateTime(msg.time_stamp)}
                                            </small>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  )
                                }
                                return (
                                  <li key={index} className="chat-list right" id="2">
                                    <div className="conversation-list">
                                      <div className="user-chat-content">
                                        <div className="ctext-wrap">
                                          <div className="ctext-wrap-content" id="2">
                                            <p className="mb-0 ctext-content">
                                              {msg.message}
                                            </p>
                                          </div>
                                        </div>
                                        <div className="conversation-name">
                                          <small className="text-muted time">
                                            {formatDateTime(msg.time_stamp)}
                                          </small>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                )
                              })}



                              {messageSocket?.map((msg, index) => {
                                if (msg.message.id != userInfo.id) {
                                  return (
                                    <li key={index} className="chat-list left" id="1">
                                      <div className="conversation-list">
                                        <div className="user-chat-content">
                                          <div className="ctext-wrap">
                                            <div className="ctext-wrap-content" id="1">
                                              <p className="mb-0 ctext-content">
                                                {msg.message.msg}
                                              </p>
                                            </div>
                                          </div>
                                          <div className="conversation-name">
                                            <small className="text-muted time">
                                              {formatDateTime(msg.time_stamp)}
                                            </small>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  )
                                }
                                return (
                                  <li key={index} className="chat-list right" id="2">
                                    <div className="conversation-list">
                                      <div className="user-chat-content">
                                        <div className="ctext-wrap">
                                          <div className="ctext-wrap-content" id="2">
                                            <p className="mb-0 ctext-content">
                                              {msg.message.msg}
                                            </p>
                                          </div>
                                        </div>
                                        <div className="conversation-name">
                                          <small className="text-muted time">
                                            {formatDateTime(msg.time_stamp)}
                                          </small>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                )
                              })}












                            </ul>


                          </div>




                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <Message register={register} errors={errors} handleSubmit={handleSubmit} handleOnSubmit={handleOnSubmit} isSubmitting={isSubmitting} />
              </div>
            </div>
          </div>
        )}

        {loading &&
          <>


            <div className="position-absolute top-50 start-50 translate-middle bg-secondary rounded-pill">
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>


          </>}


      </div>
    </>
  );
};

export default Default;
