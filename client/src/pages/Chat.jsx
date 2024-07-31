const Chat = () => {
    return (
        <>
         <div className="tab-pane show active" id="pills-chat" role="tabpanel" aria-labelledby="pills-chat-tab">
                   
                        <div>
                            <div className="px-4 pt-4">
                                <div className="d-flex align-items-start">
                                    <div className="flex-grow-1">
                                        <h4 className="mb-4">Chats</h4>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" title="Add Contact">

                                            <button type="button" className="btn btn-soft-primary btn-sm" data-bs-toggle="modal" data-bs-target="#addContact-exampleModal">
                                                <i className="bx bx-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <form>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control bg-light border-0 pe-0" id="serachChatUser" onkeyup="searchUser()" placeholder="Search here.." 
                                        aria-label="Example text with button addon" aria-describedby="searchbtn-addon" autocomplete="off" />
                                        <button className="btn btn-light" type="button" id="searchbtn-addon"><i className='bx bx-search align-middle'></i></button>
                                    </div>
                                </form>

                            </div> 
                            <div className="chat-room-list" data-simplebar>
                                <h5 className="mb-3 px-4 mt-4 font-size-11 text-muted text-uppercase">Favourites</h5>

                                <div className="chat-message-list">
            
                                    <ul className="list-unstyled chat-list chat-user-list" id="favourite-users">
                                    </ul>
                                </div>

                                <div className="d-flex align-items-center px-4 mt-5 mb-2">
                                    <div className="flex-grow-1">
                                        <h4 className="mb-0 font-size-11 text-muted text-uppercase">Direct Messages</h4>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" title="New Message">

                                           
                                            <button type="button" className="btn btn-soft-primary btn-sm" data-bs-toggle="modal" data-bs-target=".contactModal">
                                                <i className="bx bx-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="chat-message-list">
            
                                    <ul className="list-unstyled chat-list chat-user-list" id="usersList">
                
                                    </ul>
                                </div>

                                <div className="d-flex align-items-center px-4 mt-5 mb-2">
                                    <div className="flex-grow-1">
                                        <h4 className="mb-0 font-size-11 text-muted text-uppercase">Channels</h4>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" title="Create group">

                                            <button type="button" className="btn btn-soft-primary btn-sm" data-bs-toggle="modal" data-bs-target="#addgroup-exampleModal">
                                                <i className="bx bx-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="chat-message-list">
            
                                    <ul className="list-unstyled chat-list chat-user-list mb-3" id="channelList">
                
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="modal fade" id="addgroup-exampleModal" tabindex="-1" role="dialog" aria-labelledby="addgroup-exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content modal-header-colored shadow-lg border-0">
                                    <div className="modal-header">
                                        <h5 className="modal-title text-white font-size-16" id="addgroup-exampleModalLabel">Create New Group</h5>
                                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close">
                                        </button>
                                    </div>
                                    <div className="modal-body p-4">
                                        <form>
                                            <div className="mb-4">
                                                <label for="addgroupname-input" className="form-label">Group Name</label>
                                                <input type="text" className="form-control" id="addgroupname-input" placeholder="Enter Group Name" />
                                            </div>
                                            <div className="mb-4">
                                                <label className="form-label">Group Members</label>
                                                <div className="mb-3">
                                                    <button className="btn btn-light btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#groupmembercollapse" aria-expanded="false" aria-controls="groupmembercollapse">
                                                        Select Members
                                                    </button>
                                                </div>

                                                <div className="collapse" id="groupmembercollapse">
                                                    <div className="card border">
                                                        <div className="card-header">
                                                            <h5 className="font-size-15 mb-0">Contacts</h5>
                                                        </div>
                                                        <div className="card-body p-2">
                                                            <div data-simplebar style={{maxHeight : "150px"}}>
                                                                <div>
                                                                    <div className="contact-list-title">
                                                                        A
                                                                    </div>

                                                                    <ul className="list-unstyled contact-list">
                                                                        <li>
                                                                            <div className="form-check">
                                                                                <input type="checkbox" className="form-check-input" id="memberCheck1" checked />
                                                                                <label className="form-check-label" for="memberCheck1">Albert Rodarte</label>
                                                                            </div>
                                                                        </li>

                                                                        <li>
                                                                            <div className="form-check">
                                                                                <input type="checkbox" className="form-check-input" id="memberCheck2" />
                                                                                <label className="form-check-label" for="memberCheck2">Allison Etter</label>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div>
                                                                    <div className="contact-list-title">
                                                                        C
                                                                    </div>

                                                                    <ul className="list-unstyled contact-list">
                                                                        <li>
                                                                            <div className="form-check">
                                                                                <input type="checkbox" className="form-check-input" id="memberCheck3" />
                                                                                <label className="form-check-label" for="memberCheck3">Craig Smiley</label>
                                                                            </div>
                                                                        </li>

                                                                    </ul>
                                                                </div>

                                                                <div>
                                                                    <div className="contact-list-title">
                                                                        D
                                                                    </div>

                                                                    <ul className="list-unstyled contact-list">
                                                                        <li>
                                                                            <div className="form-check">
                                                                                <input type="checkbox" className="form-check-input" id="memberCheck4" />
                                                                                <label className="form-check-label" for="memberCheck4">Daniel Clay</label>
                                                                            </div>
                                                                        </li>

                                                                    </ul>
                                                                </div>

                                                                <div>
                                                                    <div className="contact-list-title">
                                                                        I
                                                                    </div>

                                                                    <ul className="list-unstyled contact-list">
                                                                        <li>
                                                                            <div className="form-check">
                                                                                <input type="checkbox" className="form-check-input" id="memberCheck5" />
                                                                                <label className="form-check-label" for="memberCheck5">Iris Wells</label>
                                                                            </div>
                                                                        </li>

                                                                    </ul>
                                                                </div>

                                                                <div>
                                                                    <div className="contact-list-title">
                                                                        J
                                                                    </div>

                                                                    <ul className="list-unstyled contact-list">
                                                                        <li>
                                                                            <div className="form-check">
                                                                                <input type="checkbox" className="form-check-input" id="memberCheck6" />
                                                                                <label className="form-check-label" for="memberCheck6">Juan Flakes</label>
                                                                            </div>
                                                                        </li>

                                                                        <li>
                                                                            <div className="form-check">
                                                                                <input type="checkbox" className="form-check-input" id="memberCheck7" />
                                                                                <label className="form-check-label" for="memberCheck7">John Hall</label>
                                                                            </div>
                                                                        </li>

                                                                        <li>
                                                                            <div className="form-check">
                                                                                <input type="checkbox" className="form-check-input" id="memberCheck8" />
                                                                                <label className="form-check-label" for="memberCheck8">Joy Southern</label>
                                                                            </div>
                                                                        </li>

                                                                    </ul>
                                                                </div>

                                                                <div>
                                                                    <div className="contact-list-title">
                                                                        M
                                                                    </div>

                                                                    <ul className="list-unstyled contact-list">
                                                                        <li>
                                                                            <div className="form-check">
                                                                                <input type="checkbox" className="form-check-input" id="memberCheck9" />
                                                                                <label className="form-check-label" for="memberCheck9">Michael Hinton</label>
                                                                            </div>
                                                                        </li>

                                                                        <li>
                                                                            <div className="form-check">
                                                                                <input type="checkbox" className="form-check-input" id="memberCheck10" />
                                                                                <label className="form-check-label" for="memberCheck10">Mary Farmer</label>
                                                                            </div>
                                                                        </li>

                                                                    </ul>
                                                                </div>

                                                                <div>
                                                                    <div className="contact-list-title">
                                                                        P
                                                                    </div>

                                                                    <ul className="list-unstyled contact-list">
                                                                        <li>
                                                                            <div className="form-check">
                                                                                <input type="checkbox" className="form-check-input" id="memberCheck11" />
                                                                                <label className="form-check-label" for="memberCheck11">Phillis Griffin</label>
                                                                            </div>
                                                                        </li>

                                                                    </ul>
                                                                </div>

                                                                <div>
                                                                    <div className="contact-list-title">
                                                                        R
                                                                    </div>

                                                                    <ul className="list-unstyled contact-list">
                                                                        <li>
                                                                            <div className="form-check">
                                                                                <input type="checkbox" className="form-check-input" id="memberCheck12" />
                                                                                <label className="form-check-label" for="memberCheck12">Rocky Jackson</label>
                                                                            </div>
                                                                        </li>

                                                                    </ul>
                                                                </div>

                                                                <div>
                                                                    <div className="contact-list-title">
                                                                        S
                                                                    </div>

                                                                    <ul className="list-unstyled contact-list">
                                                                        <li>
                                                                            <div className="form-check">
                                                                                <input type="checkbox" className="form-check-input" id="memberCheck13" />
                                                                                <label className="form-check-label" for="memberCheck13">Simon Velez</label>
                                                                            </div>
                                                                        </li>

                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label for="addgroupdescription-input" className="form-label">Description</label>
                                                <textarea className="form-control" id="addgroupdescription-input" rows="3" placeholder="Enter Description"></textarea>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-link" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Create Groups</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    );
}
 
export default Chat;