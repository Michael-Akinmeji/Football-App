import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import { faTimes, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import theme from '../utils/theme';

const Signin = ({ show, closeModal }) => {

    const [displayPassword, setDisplayPassword] = useState(false);

    let modalClass;
    if(show) {
        modalClass = 'bg-modal show';
    } else {
        modalClass = 'bg-modal';
    }

  return (
      <SigninContainer>
        <div className={modalClass}>
            <div className="modal-content">
                <div className="">
                    <div className="" onClick={() => closeModal()}>
                        <FontAwesomeIcon icon={faTimes} className="close" />
                    </div>
                </div>
                <h4 className="text-center mb-5">Sign in</h4>
                <form className="">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="User Name" />
                    </div>
                    <div className="input-group mb-3">
                        <input type={ displayPassword ? 'text' : 'password' } className="form-control" placeholder="Password" />
                        <div className="input-group-append">
                            <span className="input-group-text" onClick={() => setDisplayPassword(!displayPassword)}>
                                { displayPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} /> }
                            </span>
                        </div>
                    </div>
                    <p className="text-center my-4">
                        <Link href="/leaderboard">
                            <a className="btn btn-pink">Login</a>
                        </Link>
                    </p>
                    <p className="text-center p-below-btn">Forgot password?</p>
                </form>
            </div>
        </div>
    </SigninContainer>
  );
};

const SigninContainer = styled.div`
    .bg-modal {
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 3;
        position: fixed;
        top: 0;
        left: 0;
        display: none;
    }
    .bg-modal.show {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal-content {
        width: 500px;
        max-width: 95%;
        height: 400px;
        background-color: ${theme.colors.light};
        padding: 1rem 1.5rem;
    }
    .close {
        font-size: 24px;
        line-height: 35px;
        cursor: pointer;
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
        padding: 0.5rem 1.5rem;
        font-size: 20px;
        line-height: 30px;
    }
    .btn-pink {
        color: #ffffff;
        background: ${theme.colors.primary};
        border-radius: 15px;
    }
    .p-below-btn {
        color: ${theme.colors.info};
        font-size: 16px;
        line-height: 12px;
    }
`;

Signin.propTypes = {
    show: PropTypes.bool,
    closeModal: PropTypes.func
  };

export default Signin;
