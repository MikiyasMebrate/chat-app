import useFetch from "../hook/useFetch";
import Spinner from "../components/ui/Spinner";
import { Link } from "react-router-dom";

const Contact = () => {
  const [loading, data, err] = useFetch("http://127.0.0.1:8000/contact-lists/");

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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person-plus-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                      <path
                        fillRule="evenodd"
                        d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="chat-message-list chat-group-list" data-simplebar>
            <div className="sort-contact">
              <div className="list-group">
                <div className="container">
                  <form>
                    <div className="input-group mb-4">
                      <input type="text" className="form-control bg-light border-0 pe-0" id="searchContact" placeholder="Search Contacts.." aria-label="Search Contacts..." aria-describedby="button-searchcontactsaddon" autoComplete="off" />
                      <button className="btn btn-light" type="button" id="button-searchcontactsaddon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
                {loading && <Spinner />}

                {data &&
                  !loading &&
                  data.contacts.map((contact) => (
                    <Link
                      key={contact.phone}
                      to={`/chat/${contact.username}`}
                      className="list-group-item border-0 list-group-item-action"
                      aria-current="true"
                    >
                      <div className="row">
                        <div className="col-2">
                          <img
                            src={`http://127.0.0.1:8000/media/${contact.photo}`}
                            alt=""
                            className="img-fluid rounded-circle"
                          />
                        </div>
                        <div className="col-9">
                          <div className="d-flex w-100 justify-content-between">
                            <div className="flex-grow-1">
                              <h5 className="font-size-14 m-0">
                                {contact.first_name[0].toUpperCase() + contact.first_name.substring(1)}   {contact.last_name[0].toUpperCase() + contact.last_name.substring(1)}
                              </h5>
                              <p>{contact.phone}</p>
                            </div>

                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
