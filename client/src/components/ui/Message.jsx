const Message = ({register, errors, handleSubmit, handleOnSubmit, isSubmitting}) => {

    return (
        <>
        
        <div className="position-relative">
          
                <div className="chat-input-section p-3 p-lg-4">
                  <form onSubmit={handleSubmit(handleOnSubmit)}>
                    <div className="row g-0 align-items-center">
                     
                      
                      <div className="col">
                        <div className="position-relative">
                          <div className="chat-input-feedback">
                            Please Enter a Message
                          </div>
                          <input
                            autoComplete="off"
                            type="text"
                            className={`form-control form-control-lg chat-input ${errors.text ? 'is-invalid' : ''}`}
                            autoFocus
                            placeholder="Type your message..."
                            {...register("text")}
                          />
                         
                        </div>
                      </div>


                      <div className="col-auto">
                        <div className="chat-input-links ms-2 gap-md-1">
                          <div className="links-list-item">
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="btn btn-primary btn-lg chat-send waves-effect waves-light"
                              data-bs-toggle="collapse"
                              data-bs-target=".chat-input-collapse1.show"
                            >
                            {isSubmitting ? 'Sending' :   <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-send-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                              </svg>}
                            </button>
                          </div>
                        </div>
                      </div>


                    </div>
                  </form>
                </div>

                <div className="replyCard">
                  <div className="card mb-0">
                    <div className="card-body py-3">
                      <div className="replymessage-block mb-0 d-flex align-items-start">
                        <div className="flex-grow-1">
                          <h5 className="conversation-name"></h5>
                          <p className="mb-0"></p>
                        </div>
                        <div className="flex-shrink-0">
                          <button
                            type="button"
                            id="close_toggle"
                            className="btn btn-sm btn-link mt-n2 me-n3 font-size-18"
                          >
                            <i className="bx bx-x align-middle"></i>
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