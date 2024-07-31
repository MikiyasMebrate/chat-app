const Calls = () => {
    return (
        <>
      <div className="tab-pane show active" id="pills-calls" role="tabpanel" aria-labelledby="pills-calls-tab">
                     
                        <div>
                            <div className="px-4 pt-4">
                                <div className="d-flex align-items-start">
                                    <div className="flex-grow-1">
                                        <h4 className="mb-3">Calls</h4>
                                    </div>
                                </div>
                            </div>
                           

                          
                            <div className="chat-message-list chat-call-list" data-simplebar>
                                <ul className="list-unstyled chat-list" id="callList">      
                  
                                </ul>
                            </div>
                            
                        </div>
                       
                    </div>
        </>
    );
}
 
export default Calls;