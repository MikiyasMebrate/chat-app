import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";


const Home = () => {
  const {userInfo} = useContext(AuthContext);

  return (
    <>

      <div
        className="tab-pane show active"
        id="pills-user"
        role="tabpanel"
        aria-labelledby="pills-user-tab"
      >
        <div>
          <div className="user-profile-img">
            <img
              src="https://wallpapercave.com/wp/wp9875549.jpg"
              className="profile-img"
              style={{ height: "160px" }}
              alt=""
            />
            <div className="overlay-content">
              <div>
                <div className="user-chat-nav p-2 ps-3">
                  <div className="d-flex w-100 align-items-center">
                    <div className="flex-grow-1">
                      <h5 className="text-white mb-0"><button className="btn btn-primary shadow-lg">My Profile</button></h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center p-3 p-lg-4 border-bottom pt-lg-2 mt-n5 position-relative">

            <div className="mb-lg-3 mb-5">
              <img
                src={`http://127.0.0.1:8000/media/${userInfo?.photo?.picture}`}
                className="rounded-circle avatar-lg img-thumbnail"
                alt="user photo"
                style={{width : "150px"}}
              />
            </div>

            <h5 className="font-size-16 mb-1 text-truncate">
              {userInfo?.first_name} {userInfo?.last_name}
            </h5>
            <p className="text-muted font-size-14 text-truncate mb-0">
              {userInfo?.bio}
            </p>
          </div>

          <div className="p-4 profile-desc" data-simplebar>
            <div>

              <div className="d-flex py-2">
                <div className="flex-shrink-0 me-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-lines-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                  </svg>
                </div>

                <div className="flex-grow-1">
                  <p className="mb-0">
                    {userInfo?.first_name} {userInfo?.last_name}
                  </p>
                </div>
              </div>

              <div className="d-flex py-2">
                <div className="flex-shrink-0 me-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-rolodex"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                    <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1z" />
                  </svg>
                </div>

                <div className="flex-grow-1">
                  <p className="mb-0 text-success">@{userInfo?.username}</p>
                </div>
              </div>

              <div className="d-flex py-2">
                <div className="flex-shrink-0 me-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                    />
                  </svg>
                </div>

                <div className="flex-grow-1">
                  <p className="mb-0">{userInfo?.phone}</p>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Home;
