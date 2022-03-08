import React from "react";
import { BsFillEyeFill, BsGithub } from "react-icons/bs";
import "./styles.scss";


const CardProject = () => {
    return(
        <div className="card-container">
            <div className="card-image-container">
                <img className="card-image" src="https://lh3.googleusercontent.com/Bay2gwi4ZMDmZ3lbvs4Mv15mEKJkpQbwmBQxwzrI7NncvtCsTOiyM1psv1KYjQsgz3cVl4PY9H85x_Oh33ctrdtJdVo=w640-h400-e365-rj-sc0x00ffffff" alt="image-project"/>
            </div>
            <div className="card-content-container">
                <div className="card-text">
                    <h3 className="card-title text-center">Project Title</h3>
                    <p className="truncated">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="card-links">
                    <div className="card-button github-button">
                        <BsGithub />
                        <p>Source</p>
                    </div>
                    <div className="card-button demo-button">
                        <BsFillEyeFill/>
                        <p>Demo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { CardProject };