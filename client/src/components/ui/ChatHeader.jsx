const ChatHeader = ({user}) => {
    return (
        <>
         
         <div className="p-3 p-lg-4 user-chat-topbar">
                  <div className="row align-items-center">


                    <div className="col-sm-4 col-8">
                      <div className="d-flex align-items-center">
                        
                        <div className="flex-grow-1 overflow-hidden">
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
                              <img src={`http://127.0.0.1:8000/media/${user?.photo}`} className="rounded-circle avatar-sm" alt="" />
                              <span className="user-status"></span>
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                              <h6 className="text-truncate mb-0 font-size-18"><a href="#" className="user-profile-show text-reset">{user?.first_name} {user?.last_name}</a></h6>
                              <p className="text-truncate text-muted mb-0"><small>Online</small></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="col-sm-8 col-4">
                      <ul className="list-inline user-chat-nav text-end mb-0">
                        <li className="list-inline-item">
                          <div className="dropdown">
                            <button
                              className="btn nav-btn dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                fill="currentColor"
                                className="bi bi-search"
                                viewBox="0 0 16 16"
                              >
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                              </svg>
                            </button>
                            <div className="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg">
                              <div className="search-box p-2">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Search.."
                                  id="searchChatMessage"
                                />
                              </div>
                            </div>
                          </div>
                        </li>

                        <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                          <button
                            type="button"
                            className="btn nav-btn"
                            data-bs-toggle="modal"
                            data-bs-target=".audiocallModal"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              fill="currentColor"
                              className="bi bi-telephone"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                            </svg>
                          </button>
                        </li>

                        <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                          <button
                            type="button"
                            className="btn nav-btn"
                            data-bs-toggle="modal"
                            data-bs-target=".videocallModal"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              fill="currentColor"
                              className="bi bi-camera-video"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"
                              />
                            </svg>
                          </button>
                        </li>

                        <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                          <button
                            type="button"
                            className="btn nav-btn user-profile-show"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              fill="currentColor"
                              className="bi bi-info-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                            </svg>
                          </button>
                        </li>
                      </ul>
                    </div>


                  </div>
                </div>
        </>
    );
}
 
export default ChatHeader;