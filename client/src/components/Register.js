import React, { useState } from "react";
import Link from "next/link";

import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import theme from '../utils/theme';

const Register = () => {

    const [displayPassword, setDisplayPassword] = useState(false);

  return (
      <RegisterContainer>
        <div className="border py-5 px-4 register-section">
            <h4 className="text-center mb-5">Registration</h4>
            <form className="">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="User Name" />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="input-group mb-3">
                    <input type={ displayPassword ? 'text' : 'password' } className="form-control" placeholder="Password" />
                    <div className="input-group-append">
                        <span className="input-group-text" onClick={() => setDisplayPassword(!displayPassword)}>
                            { displayPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} /> }
                        </span>
                    </div>
                </div>
                <p className="text-center my-4 mx-auto p-above-btn">
                    By signing up you agree to our <strong>Terms of Use</strong> and <strong>Privacy Policy</strong>
                </p>
                <p className="text-center"><button type="submit" className="btn btn-pink">Register</button></p>
                <p className="text-center mt-4 p-below-btn">Already have an account? <span>Sign in</span></p>
            </form>
        </div>
    </RegisterContainer>
  );
};

const RegisterContainer = styled.div`
    .register-section {
        background: ${theme.colors.light};
        border-radius: 25px;
    }
    h4 {
        font-size: 24px;
        line-height: 35px;
        color: ${theme.colors.gray};
    }
    .form-control {
        border: none;
        border-radius: 0;
        border-bottom: 1px solid ${theme.colors.gray};
    }
    .form-control:focus {
        border-bottom: 1px solid ${theme.colors.gray};
        box-shadow: none;
    }
    .input-group-text {
        background-color: #ffffff;
        border: none;
        border-bottom: 1px solid ${theme.colors.gray};
        border-radius: 0;
        cursor: pointer;
    }
    .btn {
        padding: 0.7rem 2.5rem;
        font-size: 24px;
        line-height: 35px;
    }
    .btn-pink {
        color: #ffffff;
        background: ${theme.colors.primary};
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
        color: ${theme.colors.primary};
        font-weight: bold;
        cursor: pointer;
    }
`;

export default Register;
