import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import ModalEdit from "../components/ui/ModalEdit";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const schema = yup.object().shape({
    photo: yup.mixed().test("file", "You need to provide a file", (value) => {
        if (value.length > 0) {
            return true;
        }
        return true;
    }),
    username: yup.string().min(4).trim().required("username is required!"),
    first_name: yup.string().min(2).required("first name is required!"),
    last_name: yup.string().min(2).required("last name is required!"),
    bio: yup.string(),
    phone: yup.string().min(1).trim().required("last name is required!"),
});

const Setting = () => {
    const { userInfo, authTokens, getUserInfo } = useContext(AuthContext);

    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const setCurrentValueForm = () => {
        setValue("first_name", userInfo?.first_name);
        setValue("last_name", userInfo?.last_name);
        setValue("phone", userInfo?.phone);
        setValue("username", userInfo?.username);
        setValue("bio", userInfo?.bio);
    };

    const handleOnSubmit = async (data) => {
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/user-profile/",
                data,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: "Bearer " + String(authTokens?.access),
                    },
                }
            );
            if (response.status == 200) {
                getUserInfo();
                handleModalShow();
            } else {
            }
        } catch (err) {
            console.log(err);
        }
    };

    const [modalShow, setModalShow] = useState(false);
    const handleModalShow = () => setModalShow(!modalShow);

    return (
        <>
            <ModalEdit
                handleModalShow={handleModalShow}
                title={"Edit Profile"}
                show={modalShow}
                handleSubmit={handleSubmit}
                handleOnSubmit={handleOnSubmit}
                isSubmitting={isSubmitting}
                formBody={
                    <>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="Photo" className="form-label">
                                    Photo
                                </label>
                                <input
                                    type="file"
                                    className={`form-control ${errors.photo ? "is-invalid" : ""}`}
                                    id="Photo"
                                    {...register("photo")}
                                />
                                {errors.photo && (
                                    <p className="text-danger">{errors.photo.message}</p>
                                )}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                                    id="phone"
                                    {...register("phone")}
                                />
                                {errors.phone && (
                                    <p className="text-danger">{errors.phone.message}</p>
                                )}
                            </div>

                            <div className="row">
                                <div className="col mb-3">
                                    <label htmlFor="first_name" className="form-label">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.first_name ? "is-invalid" : ""
                                            }`}
                                        id="first_name"
                                        {...register("first_name")}
                                    />
                                    {errors.first_name && (
                                        <p className="text-danger">{errors.first_name.message}</p>
                                    )}
                                </div>

                                <div className="col mb-3">
                                    <label htmlFor="last_name" className="form-label">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.last_name ? "is-invalid" : ""
                                            }`}
                                        id="last_name"
                                        {...register("last_name")}
                                    />
                                    {errors.last_name && (
                                        <p className="text-danger">{errors.last_name.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.username ? "is-invalid" : ""
                                        }`}
                                    id="username"
                                    {...register("username")}
                                />
                                {errors.username && (
                                    <p className="text-danger">{errors.username.message}</p>
                                )}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="bio" className="form-label">
                                    Bio
                                </label>
                                <textarea
                                    className={`form-control ${errors.bio ? "is-invalid" : ""}`}
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="10"
                                    {...register("bio")}
                                ></textarea>
                                {errors.bio && (
                                    <p className="text-danger">{errors.bio.message}</p>
                                )}
                            </div>
                        </form>
                    </>
                }
            />
            <div
                className="tab-pane show  active"
                id="pills-setting"
                role="tabpanel"
                aria-labelledby="pills-setting-tab"
            >
                <div>
                    <div className="user-profile-img">
                        <img
                            src="https://wallpapercave.com/wp/wp9875549.jpg"
                            className="profile-img profile-foreground-img"
                            style={{ height: "160px" }}
                            alt=""
                        />
                        <div className="overlay-content">
                            <div>
                                <div className="user-chat-nav p-3">
                                    <div className="d-flex w-100 align-items-center">
                                        <div className="flex-grow-1">
                                            <button className="btn btn-primary">Settings</button>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <div
                                                className="avatar-xs p-0 rounded-circle profile-photo-edit"
                                                data-bs-toggle="tooltip"
                                                data-bs-trigger="hover"
                                                data-bs-placement="bottom"
                                                onClick={() => {
                                                    handleModalShow();
                                                    setCurrentValueForm();
                                                }}
                                            >
                                                <label
                                                    htmlFor="profile-foreground-img-file-input"
                                                    className="profile-photo-edit avatar-xs"
                                                >
                                                    <span className="avatar-title rounded-circle bg-light text-body">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            className="bi bi-pencil-square"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                                            />
                                                        </svg>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center p-3 p-lg-0 border-bottom  mt-n5 position-relative">
                        <div className="mb-3 profile-user">
                            <img
                                src={`http://127.0.0.1:8000/media/${userInfo?.photo?.picture}`}
                                className="rounded-circle avatar-lg img-thumbnail user-profile-image"
                                alt="user-profile-image"
                                style={{width : '150px'}}
                            />
                        </div>

                        <h5 className="font-size-16 mb-1 text-truncate"></h5>
                        <button className="btn btn-primary mb-4 btn-sm rounded mt-0">
                            active
                        </button>
                    </div>

                    <div className="container">
                        <div
                            id="personalinfo"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headerpersonalinfo"
                            data-bs-parent="#settingprofile"
                        >
                            <div className="accordion-body p-3">
                                <div>
                                    <p className="text-muted mb-1">Name</p>
                                    <h5 className="font-size-14">
                                        {userInfo?.first_name} {userInfo?.last_name}
                                    </h5>
                                </div>

                                <div className="mt-4">
                                    <p className="text-muted mb-1">Username</p>
                                    <h5 className="font-size-14">{userInfo?.username}</h5>
                                </div>

                                <div className="mt-4">
                                    <p className="text-muted mb-1">Bio</p>
                                    <h5 className="font-size-14 mb-0">{userInfo?.bio}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Setting;
