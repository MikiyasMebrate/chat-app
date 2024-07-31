const Message = () => {
    return (
        <>
        
        <div class="position-relative">
                <div class="chat-input-section p-3 p-lg-4">
                  <form id="chatinput-form" enctype="multipart/form-data">
                    <div class="row g-0 align-items-center">
                      <div class="file_Upload"></div>
                      <div class="col-auto">
                        <div class="chat-input-links me-md-2">
                          <div
                            class="links-list-item"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="More"
                          ></div>
                          <div
                            class="links-list-item"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="Emoji"
                          >
                            <button
                              type="button"
                              class="btn btn-link text-decoration-none btn-lg waves-effect emoji-btn"
                              id="emoji-btn"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                class="bi bi-emoji-smile-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="position-relative">
                          <div class="chat-input-feedback">
                            Please Enter a Message
                          </div>
                          <input
                            autocomplete="off"
                            type="text"
                            class="form-control form-control-lg chat-input"
                            autofocus
                            id="chat-input"
                            placeholder="Type your message..."
                          />
                        </div>
                      </div>
                      <div class="col-auto">
                        <div class="chat-input-links ms-2 gap-md-1">
                          <div
                            class="links-list-item d-none d-sm-block"
                            data-bs-container=".chat-input-links"
                            data-bs-toggle="popover"
                            data-bs-trigger="focus"
                            data-bs-html="true"
                            data-bs-placement="top"
                            data-bs-content="<div class='loader-line'><div class='line'></div><div class='line'></div><div class='line'></div><div class='line'></div><div class='line'></div></div>"
                          >
                            <button
                              type="button"
                              class="btn btn-link text-decoration-none btn-lg waves-effect"
                              onclick="audioPermission()"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                class="bi bi-mic-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" />
                                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
                              </svg>
                            </button>
                          </div>
                          <div class="links-list-item">
                            <button
                              type="submit"
                              class="btn btn-primary btn-lg chat-send waves-effect waves-light"
                              data-bs-toggle="collapse"
                              data-bs-target=".chat-input-collapse1.show"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                class="bi bi-send-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="replyCard">
                  <div class="card mb-0">
                    <div class="card-body py-3">
                      <div class="replymessage-block mb-0 d-flex align-items-start">
                        <div class="flex-grow-1">
                          <h5 class="conversation-name"></h5>
                          <p class="mb-0"></p>
                        </div>
                        <div class="flex-shrink-0">
                          <button
                            type="button"
                            id="close_toggle"
                            class="btn btn-sm btn-link mt-n2 me-n3 font-size-18"
                          >
                            <i class="bx bx-x align-middle"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </>
    );
}
 
export default Message;