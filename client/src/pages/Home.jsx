import { Outlet } from "react-router-dom";

const Home = () => {
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
              src="https://www.shutterstock.com/image-vector/social-media-sketch-vector-seamless-600nw-1660950727.jpg"
              className="profile-img"
              style={{ height: "160px" }}
              alt=""
            />
            <div className="overlay-content">
              <div>
                <div className="user-chat-nav p-2 ps-3">
                  <div className="d-flex w-100 align-items-center">
                    <div className="flex-grow-1">
                      <h5 className="text-white mb-0">My Profile</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center p-3 p-lg-4 border-bottom pt-2 pt-lg-2 mt-n5 position-relative">
            <div className="mb-lg-3 mb-2">
              <img
                src="assets/images/users/avatar-1.jpg"
                className="rounded-circle avatar-lg img-thumbnail"
                alt=""
              />
            </div>

            <h5 className="font-size-16 mb-1 text-truncate">Adam Zampa</h5>
            <p className="text-muted font-size-14 text-truncate mb-0">
              Front end Developer
            </p>
          </div>

          <div className="p-4 profile-desc" data-simplebar>
            <div className="text-muted">
              <p className="mb-4">
                If several languages coalesce, the grammar of the resulting
                language is more simple.
              </p>
            </div>

            <div>
              <div className="d-flex py-2">
                <div className="flex-shrink-0 me-3">
                  <i className="bx bx-user align-middle text-muted"></i>
                </div>
                <div className="flex-grow-1">
                  <p className="mb-0">Adam Zampa</p>
                </div>
              </div>

              <div className="d-flex py-2">
                <div className="flex-shrink-0 me-3">
                  <i className="bx bx-message-rounded-dots align-middle text-muted"></i>
                </div>
                <div className="flex-grow-1">
                  <p className="mb-0">adc@123.com</p>
                </div>
              </div>

              <div className="d-flex py-2">
                <div className="flex-shrink-0 me-3">
                  <i className="bx bx-location-plus align-middle text-muted"></i>
                </div>
                <div className="flex-grow-1">
                  <p className="mb-0">California, USA</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Home;
