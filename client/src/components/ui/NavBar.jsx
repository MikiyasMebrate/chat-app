const NavBar = () => {
    return ( 
        <>
          <div className="side-menu flex-lg-column">
                
                <div className="navbar-brand-box">
                    <a href="index.html" className="logo logo-dark">
                        <span className="logo-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path d="M8.5,18l3.5,4l3.5-4H19c1.103,0,2-0.897,2-2V4c0-1.103-0.897-2-2-2H5C3.897,2,3,2.897,3,4v12c0,1.103,0.897,2,2,2H8.5z M7,7h10v2H7V7z M7,11h7v2H7V11z"/></svg>
                        </span>
                    </a>

                    <a href="index.html" className="logo logo-light">
                        <span className="logo-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path d="M8.5,18l3.5,4l3.5-4H19c1.103,0,2-0.897,2-2V4c0-1.103-0.897-2-2-2H5C3.897,2,3,2.897,3,4v12c0,1.103,0.897,2,2,2H8.5z M7,7h10v2H7V7z M7,11h7v2H7V11z"/></svg>
                        </span>
                    </a>
                </div>
                
                <div className="flex-lg-column my-0 sidemenu-navigation">
                    <ul className="nav nav-pills side-menu-nav" role="tablist">
                        <li className="nav-item d-none d-lg-block" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-trigger="hover" data-bs-container=".sidemenu-navigation" title="Profile">
                            <a className="nav-link" id="pills-user-tab" data-bs-toggle="pill" href="#pills-user" role="tab">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
                            </a>
                        </li>
                        <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-trigger="hover" data-bs-container=".sidemenu-navigation" title="Chats">
                            <a className="nav-link active" id="pills-chat-tab" data-bs-toggle="pill" href="#pills-chat" role="tab">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
  <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>
                            </a>
                        </li>
                        <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-trigger="hover" data-bs-container=".sidemenu-navigation" title="Contacts">
                            <a className="nav-link" id="pills-contacts-tab" data-bs-toggle="pill" href="#pills-contacts" role="tab">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
</svg>
                            </a>
                        </li>
                        <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-trigger="hover" data-bs-container=".sidemenu-navigation" title="Calls">
                            <a className="nav-link" id="pills-calls-tab" data-bs-toggle="pill" href="#pills-calls" role="tab">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>
                            </a>
                        </li>
                        <li className="nav-item d-none d-lg-block" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-container=".sidemenu-navigation" data-bs-trigger="hover" title="Settings">
                            <a className="nav-link" id="pills-setting-tab" data-bs-toggle="pill" href="#pills-setting" role="tab">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
</svg>
                            </a>
                        </li>
                        <li className="nav-item mt-auto">
                            <a className="nav-link light-dark" href="#" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="right" data-bs-container=".sidemenu-navigation" data-bs-html="true" title="<span className='light-mode'>Light</span> <span className='dark-mode'>Dark</span> Mode">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
</svg>
                            </a>
                        </li>
                        <li className="nav-item dropdown profile-user-dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="assets/images/users/avatar-1.jpg" alt="" className="profile-user rounded-circle"/>
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item d-flex align-items-center justify-content-between" id="pills-user-tab" data-bs-toggle="pill" href="#pills-user" role="tab">Profile <i className="bx bx-user-circle text-muted ms-1"></i></a>
                                <a className="dropdown-item d-flex align-items-center justify-content-between" id="pills-setting-tab" data-bs-toggle="pill" href="#pills-setting" role="tab">Setting <i className="bx bx-cog text-muted ms-1"></i></a>
                                <a className="dropdown-item d-flex align-items-center justify-content-between" href="auth-changepassword.html">Change Password <i className="bx bx-lock-open text-muted ms-1"></i></a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item d-flex align-items-center justify-content-between" href="auth-logout.html">Log out <i className="bx bx-log-out-circle text-muted ms-1"></i></a>
                            </div>
                        </li>
                    </ul>
                </div>
          
            </div>
        </>
    );
}
 
export default NavBar; 