import React from "react";
import Link from "next/link";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Register = () => {
  return (
    <div className="border py-5 px-4 register-section">
        <h4 className="text-center mb-5">Registration</h4>
        <form className="">
            <div className="form-group">
                <input type="text" className="form-control" placeholder="User Name" />
            </div>
            <div className="form-group">
                <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" placeholder="Password" />
            </div>
            <p className="text-center my-4 mx-auto p-above-btn">
                By signing up you agree to our <strong>Terms of Use</strong> and <strong>Privacy Policy</strong>
            </p>
            <p className="text-center"><button type="submit" className="btn btn-pink">Register</button></p>
            <p className="text-center mt-4 p-below-btn">Already have an account? <span>Sign in</span></p>
        </form>

        <style jsx>{`
            .register-section {
                background: #ffffff;
                border-radius: 25px;
            }
            h4 {
                font-size: 24px;
                line-height: 35px;
                color: #707070;
            }
            .form-control {
                border: none;
                border-radius: 0;
                border-bottom: 1px solid #707070;
            }
            .form-control:focus {
                border-bottom: 1px solid #707070;
                box-shadow: none;
            }
            .btn {
                padding: 15px 45px;
                font-size: 24px;
                line-height: 35px;
            }
            .btn-pink {
                color: #ffffff;
                background: #FF3693;
                border-radius: 15px;
            }
            .p-above-btn {
                width: 70%;
                font-size: 16px;
                line-height: 25px;
            }
            .p-below-btn {
                font-size: 18px;
                line-height: 12px;
            }
            p span {
                color: #FF3693;
                font-weight: bold;
                cursor: pointer;
            }
        `}</style>
    </div>
  );
};

export default Register;
