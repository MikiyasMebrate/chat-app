const Contact = () => {
  return (
    <>
      <div
        className="tab-pane show active "
        id="pills-contacts"
        role="tabpanel"
        aria-labelledby="pills-contacts-tab"
      >
        <div>
          <div className="px-4 pt-4">
            <div className="d-flex align-items-start">
              <div className="flex-grow-1">
                <h4 className="mb-4">Contacts</h4>
              </div>
              <div className="flex-shrink-0">
                <div
                  data-bs-toggle="tooltip"
                  data-bs-trigger="hover"
                  data-bs-placement="bottom"
                  title="Add Contact"
                >
                  <button
                    type="button"
                    className="btn btn-soft-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#addContact-exampleModal"
                  >
                    <i className="bx bx-plus"></i>
                  </button>
                </div>
              </div>
            </div>

            <form>
              <div className="input-group mb-4">
                <input
                  type="text"
                  className="form-control bg-light border-0 pe-0"
                  id="searchContact"
                  onkeyup="searchContacts()"
                  placeholder="Search Contacts.."
                  aria-label="Search Contacts..."
                  aria-describedby="button-searchcontactsaddon"
                  autocomplete="off"
                />
                <button
                  className="btn btn-light"
                  type="button"
                  id="button-searchcontactsaddon"
                >
                  <i className="bx bx-search align-middle"></i>
                </button>
              </div>
            </form>
          </div>

          <div className="chat-message-list chat-group-list" data-simplebar>
            <div className="sort-contact">

                
              <div class="list-group">
                <a
                  href="#"
                  class="list-group-item list-group-item-action"
                  aria-current="true"
                >
                  <div className="row">
                    <div className="col-3">
                      <img
                        src="https://media.licdn.com/dms/image/D4E03AQHX9ugagRN98w/profile-displayphoto-shrink_200_200/0/1708174916977?e=2147483647&v=beta&t=HolK3nSp-KcDNGs8D03jKKhtlPhKO3Qoca8KGBNFbeU"
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div className="col-9">
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Kaleab Hegie</h5>
                        <small>3 days ago</small>
                      </div>
                      <small>0988765436</small>
                    </div>
                  </div>
                </a>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
