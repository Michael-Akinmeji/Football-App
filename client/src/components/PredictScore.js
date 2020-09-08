import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "../utils/theme";

import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PredictScore = ({ fixtures }) => {

    const predict = {
        fixture1: {
            home: 0,
            away: 0
        },
        fixture2: {
            home: 0,
            away: 0
        },
        fixture3: {
            home: 0,
            away: 0
        },
        fixture4: {
            home: 0,
            away: 0
        },
        fixture5: {
            home: 0,
            away: 0
        },
        fixture6: {
            home: 0,
            away: 0
        },
        fixture7: {
            home: 0,
            away: 0
        },
        fixture8: {
            home: 0,
            away: 0
        },
        fixture9: {
            home: 0,
            away: 0
        },
        fixture10: {
            home: 0,
            away: 0
        }
    }

    const [prediction, setPrediction] = useState(predict);

    const incrementScore = (id, team) => {
        let home = prediction[`fixture${id}`].home;
        let away = prediction[`fixture${id}`].away;
        if(team === 'home') {
            setPrediction(prevState => ({
                ...prevState,
                [`fixture${id}`]: {
                    home: home + 1,
                    away
                }
            }))
        } else {
            setPrediction(prevState => ({
                ...prevState,
                [`fixture${id}`]: {
                    home,
                    away: away + 1
                }
            }))
        }
    }

    const decrementScore = (id, team) => {
        let home = prediction[`fixture${id}`].home;
        let away = prediction[`fixture${id}`].away;
        if(team === 'home') {
            setPrediction(prevState => ({
                ...prevState,
                [`fixture${id}`]: {
                    home: home > 0 ? home - 1 : 0,
                    away
                }
            }))
        } else {
            setPrediction(prevState => ({
                ...prevState,
                [`fixture${id}`]: {
                    home,
                    away: away > 0 ? away - 1 : 0
                }
            }))
        }
    }

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
                                            <td className="text-center">
                                                <strong>
                                                    {fixture.home}
                                                </strong>
                                            </td>
                                            <td className="">
                                                <div className="d-flex flex-nowrap justify-content-center align items-center">
                                                    <div className="form-group mr-2">
                                                        <input 
                                                            id={i + 1}
                                                            type="number"
                                                            className="form-control"
                                                            placeholder="0"
                                                            value={prediction[`fixture${i + 1}`].home}
                                                            readOnly
                                                        />
                                                    </div>
                                                    <div className="d-flex flex-column p-1 arrow">
                                                        <FontAwesomeIcon
                                                            id={i + 1}
                                                            icon={faChevronUp}
                                                            style={{ color: "#C5C5C5", marginBottom: "0.3rem"}}
                                                            onClick={() => incrementScore(i + 1, 'home')}
                                                        />
                                                        <FontAwesomeIcon
                                                            id={i + 1}
                                                            icon={faChevronDown}
                                                            style={{ color: "#C5C5C5"}}
                                                            onClick={() => decrementScore(i + 1, 'home')}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center time">
                                                <strong>
                                                    {fixture.time}
                                                </strong>
                                            </td>
                                            <td className="">
                                                <div className="d-flex flex-nowrap justify-content-center align items-center">
                                                    <div className="form-group mr-2">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="0"
                                                            value={prediction[`fixture${i + 1}`].away}
                                                            readOnly
                                                        />
                                                    </div>
                                                    <div className="d-flex flex-column p-1 arrow">
                                                        <FontAwesomeIcon
                                                            id={i + 1}
                                                            icon={faChevronUp}
                                                            style={{ color: "#C5C5C5", marginBottom: "0.3rem"}}
                                                            onClick={() => incrementScore(i + 1, 'away')}
                                                        />
                                                        <FontAwesomeIcon
                                                            id={i + 1}
                                                            icon={faChevronDown}
                                                            style={{ color: "#C5C5C5"}}
                                                            onClick={() => decrementScore(i + 1, 'away')}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <strong>
                                                    {fixture.away}
                                                </strong>
                                            </td>
                                        </tr>
                                    )
                                )}
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
        font-size: 18px;
        line-height: 27px;
    }
    .form-group {
        width: 80px
    }
    .form-control {
        text-align: center;
        font-size: 20px;
        line-height: 26px;
    }
    .form-control[readonly] {
        background-color: ${theme.colors.light};
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
