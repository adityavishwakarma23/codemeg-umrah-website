import React from "react";
import { Umrah } from "../../../assets/images";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="hdr-main">
        <div className="container">
          <div className="hdr-top">
            <div className="left-img">
              <img src={Umrah} alt="" />
            </div>
            <div className="hdr btns">
              <ul>
                <li>
                  <div className="hdrbtnh">
                  <Link to="/">Home</Link>
                  </div>
                </li>
                <li>
                  <div className="hdrbtnh btnh">
                  <Link to="/packagemain"> Packages </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className="hdr-icon">
            <span>
                <svg
                  width="21"
                  height="29"
                  viewBox="0 0 21 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.05598 16.4145L4.47536 14.4305L5.96976 13.1867L4.47536 11.3211L6.40084 9.72202L7.95272 11.6765L6.48705 12.9202L7.95272 14.7266L6.05598 16.4145ZM0.480707 2.85184C1.77394 0.00900639 4.93518 -0.760927 7.80903 0.778942C11.8899 3.08875 12.2922 7.47145 12.2922 11.8542V21.8337C12.2922 23.7289 15.4822 22.6925 15.942 20.8565V2.55571L18.7009 3.71061V25.0023C18.7009 29 21 29 21 29H18.2411C18.2411 29 15.942 29 15.942 25.0023V22.9294C14.735 25.0023 9.59081 27.6082 9.5046 22.5148V10.7289C9.5046 8.83364 9.59081 5.96119 8.7574 4.3621C6.40084 0.0682331 -0.898741 4.8359 3.55573 11.3211C3.55573 11.3211 -1.55973 7.17532 0.480707 2.85184Z"
                    fill="black"
                  />
                </svg>
              </span>
              <div className="dropdown-main">
              <div class="dropdownmain">
                  <div className="card dropdown-mango">
                      <div className="wedmango-main">
                                                        <div className="wedero">
                                                            <span>
                                                                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                  <path d="M1.5 15.6667C3.44649 13.6021 6.08918 12.3333 9 12.3333C11.9108 12.3333 14.5535 13.6021 16.5 15.6667M12.75 5.25C12.75 7.32107 11.0711 9 9 9C6.92893 9 5.25 7.32107 5.25 5.25C5.25 3.17893 6.92893 1.5 9 1.5C11.0711 1.5 12.75 3.17893 12.75 5.25Z" stroke="#292524" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                  </svg>
                                                            </span>
                                                        </div>
                                                        <div className="wedmango">
                                                            <h1> Account </h1>
                                                        </div>
                      </div>
                      <div className="wedmango-main">
                                                        <div className="wedero">
                                                            <span>
                                                               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M2.5 18.3332V4.99209C2.5 4.38136 2.5 4.076 2.66989 3.85201C2.83978 3.62803 3.13339 3.5463 3.72059 3.38284L9.55393 1.75906C9.77558 1.69735 9.88641 1.6665 10 1.6665C10.1136 1.6665 10.2244 1.69735 10.4461 1.75906L16.2794 3.38284C16.8666 3.5463 17.1602 3.62803 17.3301 3.85201C17.5 4.076 17.5 4.38136 17.5 4.99209V18.3332" stroke="#292524" stroke-width="1.5"/>
                                                                <path d="M1.66663 18.3333H18.3333" stroke="#292524" stroke-width="1.5" stroke-linecap="round"/>
                                                                <path d="M2.5 7.49992L9.63845 5.87393C9.87658 5.81969 10.1234 5.81969 10.3616 5.87393L17.5 7.49992" stroke="#292524" stroke-width="1.5"/>
                                                                <path d="M16.375 10.5832L17.5 10.8332M13 9.83317L13.75 9.99984M10.75 9.33317L10 9.1665L9.25 9.33317M3.625 10.5832L2.5 10.8332M7 9.83317L6.25 9.99984" stroke="#292524" stroke-width="1.5" stroke-linecap="round"/>
                                                                <path d="M10 5.83325V18.3333" stroke="#292524" stroke-width="1.5"/>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <div className="wedmango">
                                                            <h1> Previous Tours </h1>
                                                        </div>
                      </div>
                      <div className="wedmango-main">
                                                        <div className="wedero">
                                                            <span>
                                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.16667 2.33333H5.5C4.09987 2.33333 3.3998 2.33333 2.86502 2.60582C2.39462 2.8455 2.01217 3.22795 1.77248 3.69836C1.5 4.23314 1.5 4.9332 1.5 6.33333V12.5C1.5 13.9001 1.5 14.6002 1.77248 15.135C2.01217 15.6054 2.39462 15.9878 2.86502 16.2275C3.3998 16.5 4.09987 16.5 5.5 16.5H11.6667C13.0668 16.5 13.7669 16.5 14.3016 16.2275C14.772 15.9878 15.1545 15.6054 15.3942 15.135C15.6667 14.6002 15.6667 13.9001 15.6667 12.5V9.83333M9.83333 13.1667H4.83333M11.5 9.83333H4.83333M15.7678 2.23223C16.7441 3.20854 16.7441 4.79146 15.7678 5.76777C14.7915 6.74408 13.2085 6.74408 12.2322 5.76777C11.2559 4.79146 11.2559 3.20854 12.2322 2.23223C13.2085 1.25592 14.7915 1.25592 15.7678 2.23223Z" stroke="#292524" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <div className="wedmango">
                                                            <h1> Notification </h1>
                                                        </div>
                      </div>
                      <div className="wedmango-main">
                                                        <div className="wedero">
                                                            <span>
                                                                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.55882 18.3334C5.23126 18.3334 3.56748 18.3334 2.53374 17.3571C1.5 16.3808 1.5 14.8094 1.5 11.6667L1.5 8.33341C1.5 5.19072 1.5 3.61937 2.53374 2.64306C3.56748 1.66675 5.23126 1.66675 8.55883 1.66675L9.44118 1.66675C12.7687 1.66675 14.4325 1.66675 15.4663 2.64306C16.5 3.61937 16.5 5.19072 16.5 8.33342M8.58333 18.3334H9.83333" stroke="#292524" stroke-width="1.5" stroke-linecap="round"/>
                                                                <path d="M5.66663 5.8335H12.3333" stroke="#292524" stroke-width="1.5" stroke-linecap="round"/>
                                                                <path d="M5.66663 10H9.83329" stroke="#292524" stroke-width="1.5" stroke-linecap="round"/>
                                                                <path d="M13.5834 15.4915L12.8316 18.1192C12.7977 18.2511 12.9283 18.3656 13.0549 18.315L14.7096 17.6542C14.789 17.6225 14.8777 17.6225 14.9572 17.6542L16.6276 18.3213C16.7512 18.3707 16.88 18.2626 16.8526 18.1326L16.2158 15.4094M17.3334 13.3294C17.3334 11.951 16.2141 10.8335 14.8334 10.8335C13.4527 10.8335 12.3334 11.951 12.3334 13.3294C12.3334 14.7079 13.4527 15.8254 14.8334 15.8254C16.2141 15.8254 17.3334 14.7079 17.3334 13.3294Z" stroke="#292524" stroke-width="1.5" stroke-linejoin="round"/>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <div className="wedmango">
                                                            <h1> Privacy Policy </h1>
                                                        </div>
                      </div>
                      <div className="wedmango-main">
                                                        <div className="wedero">
                                                            <span>
                                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M7.57496 7.50008C7.77088 6.94314 8.15759 6.4735 8.66659 6.17436C9.17559 5.87521 9.77404 5.76586 10.3559 5.86567C10.9378 5.96549 11.4656 6.26802 11.8459 6.71969C12.2261 7.17136 12.4342 7.74302 12.4333 8.33342C12.4333 10.0001 9.93329 10.8334 9.93329 10.8334M9.99996 14.1667H10.0083M18.3333 10.0001C18.3333 14.6025 14.6023 18.3334 9.99996 18.3334C5.39759 18.3334 1.66663 14.6025 1.66663 10.0001C1.66663 5.39771 5.39759 1.66675 9.99996 1.66675C14.6023 1.66675 18.3333 5.39771 18.3333 10.0001Z" stroke="#292524" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <div className="wedmango">
                                                            <h1> Help & Support </h1>
                                                        </div>
                      </div>
                      <div className="wedmango-main">
                                                        <div className="wedero">
                                                            <span>
                                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M12.3333 13.1667L16.5 9M16.5 9L12.3333 4.83333M16.5 9H6.5M6.5 1.5H5.5C4.09987 1.5 3.3998 1.5 2.86502 1.77248C2.39462 2.01217 2.01217 2.39462 1.77248 2.86502C1.5 3.3998 1.5 4.09987 1.5 5.5V12.5C1.5 13.9001 1.5 14.6002 1.77248 15.135C2.01217 15.6054 2.39462 15.9878 2.86502 16.2275C3.3998 16.5 4.09987 16.5 5.5 16.5H6.5" stroke="#292524" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <div className="wedmango">
                                                            <h1> Help & Support </h1>
                                                        </div>
                      </div>                    
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;