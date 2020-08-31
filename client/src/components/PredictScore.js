import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "../utils/theme";

import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PredictScore = ({ fixtures }) => {
  return (
      <PredictScoreContainer>
        <div className="fixtures-section">
            <div className="card">
                <div className="card-header py-3">
                    <h4 className="text-center mb-0">Gameweek 7</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-borderless">
                            <tbody>
                                {
                                    fixtures.map((fixture, i) => (
                                        <tr key={i + 1}>
                                            <td className="text-center">{fixture.date}</td>
                                            <td className="p-1">
                                                <table className="table table-borderless">
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-center">
                                                                <strong>
                                                                    {fixture.home}
                                                                </strong>
                                                            </td>
                                                            <td className="">
                                                                <div className="form-group ml-auto">
                                                                    <input type="text" className="form-control" placeholder="0" />
                                                                </div>
                                                            </td>
                                                            <td className="">
                                                                <div className="d-flex flex-column justify-content-center align-items-center mr-auto arrow">
                                                                    <FontAwesomeIcon
                                                                        icon={faChevronUp}
                                                                        style={{ color: "#C5C5C5"}}
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={faChevronDown}
                                                                        style={{ color: "#C5C5C5"}}
                                                                    />
                                                                </div>
                                                            </td>
                                                            <td className="text-center time">
                                                                <strong>
                                                                    {fixture.time}
                                                                </strong>
                                                            </td>
                                                            <td className="">
                                                                <div className="form-group ml-auto">
                                                                    <input type="text" className="form-control" placeholder="0" />
                                                                </div>
                                                            </td>
                                                            <td className="">
                                                                <div className="d-flex flex-column justify-content-center align-items-center mr-auto arrow">
                                                                    <FontAwesomeIcon
                                                                        icon={faChevronUp}
                                                                        style={{ color: "#C5C5C5"}}
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={faChevronDown}
                                                                        style={{ color: "#C5C5C5"}}
                                                                    />
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <strong>
                                                                    {fixture.away}
                                                                </strong>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <p className="text-center mb-0">
                        <button type="button" className="btn btn-pink">
                            Submit
                        </button>
                    </p>
                </div>
            </div>
        </div>
    </PredictScoreContainer>
  );
};

const PredictScoreContainer = styled.div`
    .card {
        border: none;
        border-radius: 25px 25px 0 0;
        overflow: hidden;
    }
    .card-header {
        background: transparent linear-gradient(180deg, ${theme.colors.info} 0%, ${theme.colors.accent} 100%) 0% 0% no-repeat padding-box;
        color: ${theme.colors.light};
    }
    .card-body {
        border: 2px solid ${theme.colors.info};
        border-top: none;
    }
    h4 {
        font-weight: bold;
        font-size: 24px;
        line-height: 35px;
    }
    table {
        font-size: 20px;
        line-height: 26px;
    }
    .form-group {
        width: 80px
    }
    .form-control {
        font-size: 20px;
        line-height: 26px;
    }
    .time {
        color: #8F8F8F;
    }
    .arrow {
        cursor: pointer;
    }
    .btn {
        padding: 0.7rem 2.5rem;
        font-size: 24px;
        line-height: 35px;
    }
    .btn-pink {
        color: ${theme.colors.light};
        background: ${theme.colors.primary};
        border-radius: 15px;
    }
`;

PredictScore.propTypes = {
    fixtures: PropTypes.array
  };

export default PredictScore;
