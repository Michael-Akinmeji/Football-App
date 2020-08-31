import React from "react";
import PropTypes from "prop-types";

import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import theme from "../utils/theme";

const Leaderboard = ({ users }) => {
  return (
      <LeaderboardContainer>
          <div className="leaderboard-section">
            <div className="card">
                <div className="card-header py-3">
                    <h4 className="text-center mb-0">Leaderboard</h4>
                </div>
                <div className="card-body py-5">
                    <div className="table-responsive">
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col" className="text-center">Position</th>
                                    <th scope="col" className="text-center">Name</th>
                                    <th scope="col" className="text-center">Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, i) => (
                                        <tr key={i}>
                                            <th scope="row" className="text-center">{i + 1}</th>
                                            <td>{user.name}</td>
                                            <td className="text-center">{user.points}</td>
                                            {
                                                i === 0 ? 
                                                <td className="text-center medal">
                                                    <FontAwesomeIcon icon={faMedal} />
                                                </td>
                                                : null
                                            }
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <p className="text-center mt-5 mb-0">See full table</p>
                </div>
            </div>
        </div>
      </LeaderboardContainer>
  );
};

const LeaderboardContainer = styled.div`
    .card {
        border: none;
        border-radius: 25px 25px 0 0;
        overflow: hidden;
    }
    .card-header {
        background: linear-gradient(180deg, ${theme.colors.info} 0%, ${theme.colors.accent} 100%) 0% 0% no-repeat;
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
    thead {
        font-size: 24px;
        line-height: 35px;
        border-bottom: 1px solid ${theme.colors.gray};
    }
    th {
        font-weight: bold;
    }
    td.medal {
        font-size: 20px !important;
    }
    p {
        font-weight: bold;
        font-size: 24px;
        line-height: 35px;
        color: ${theme.colors.primary};
        cursor: pointer;
    }
`;

Leaderboard.propTypes = {
    users: PropTypes.array,
  };

export default Leaderboard;
