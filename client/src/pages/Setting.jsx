const Setting = () => {
    return (
        <>
        <div class="tab-pane show active" id="pills-setting" role="tabpanel" aria-labelledby="pills-setting-tab">
                      
                        <div>
                            <div class="user-profile-img">
                                <img src="https://www.shutterstock.com/image-vector/social-media-sketch-vector-seamless-600nw-1660950727.jpg" class="profile-img profile-foreground-img" style={{height: "160px"}} alt="" />
                                <div class="overlay-content">
                                    <div>
                                        <div class="user-chat-nav p-3">
                    
                                            <div class="d-flex w-100 align-items-center">
                                                <div class="flex-grow-1">
                                                    <h5 class="text-white mb-0">Settings</h5>
                                                </div>
                                                <div class="flex-shrink-0">
                                                    <div class="avatar-xs p-0 rounded-circle profile-photo-edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" title="Change Background">
                                                        <input id="profile-foreground-img-file-input" type="file" class="profile-foreground-img-file-input" />
                                                        <label for="profile-foreground-img-file-input" class="profile-photo-edit avatar-xs">
                                                            <span class="avatar-title rounded-circle bg-light text-body">
                                                                <i class="bx bxs-pencil"></i>
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="text-center p-3 p-lg-4 border-bottom pt-2 pt-lg-2 mt-n5 position-relative">
                                <div class="mb-3 profile-user">
                                    <img src="assets/images/users/avatar-1.jpg" class="rounded-circle avatar-lg img-thumbnail user-profile-image" alt="user-profile-image" />
                                    <div class="avatar-xs p-0 rounded-circle profile-photo-edit">
                                        <input id="profile-img-file-input" type="file" class="profile-img-file-input" />
                                        <label for="profile-img-file-input" class="profile-photo-edit avatar-xs">
                                            <span class="avatar-title rounded-circle bg-light text-body">
                                                <i class="bx bxs-camera"></i>
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                <h5 class="font-size-16 mb-1 text-truncate"></h5>
        
                                <div class="dropdown d-inline-block">
                                    <a class="text-muted dropdown-toggle d-block" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="bx bxs-circle text-success font-size-10 align-middle"></i> Active <i class="mdi mdi-chevron-down"></i>
                                    </a>
          
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#"><i class="bx bxs-circle text-success font-size-10 me-1 align-middle"></i> Active</a>
                                        <a class="dropdown-item" href="#"><i class="bx bxs-circle text-warning font-size-10 me-1 align-middle"></i> Away</a>
                                        <a class="dropdown-item" href="#"><i class="bx bxs-circle text-danger font-size-10 me-1 align-middle"></i> Do not disturb</a>
                                    </div>
                                </div>

        
                            </div>
                           
                        <div className="container" style={{margin:'20px'}}>
                           <div id="personalinfo" class="accordion-collapse collapse show" aria-labelledby="headerpersonalinfo" data-bs-parent="#settingprofile">
                                            <div class="accordion-body">
                                             

                                                <div>
                                                    <p class="text-muted mb-1">Name</p>
                                                    <h5 class="font-size-14">Adam Zampa</h5>
                                                </div>

                                                <div class="mt-4">
                                                    <p class="text-muted mb-1">Email</p>
                                                    <h5 class="font-size-14">adc@123.com</h5>
                                                </div>

                                                <div class="mt-4">
                                                    <p class="text-muted mb-1">Location</p>
                                                    <h5 class="font-size-14 mb-0">California, USA</h5>
                                                </div>
                                            </div>
                                        </div>
                        </div>
                           
                        </div>
                       
                       
                    </div>
        </>
    );
}
 
export default Setting;