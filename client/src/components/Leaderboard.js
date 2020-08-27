import React from "react";
import PropTypes from "prop-types";

import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Leaderboard = ({ users }) => {
  return (
    <div className="leaderboard-section">
        <div className="card">
            <div className="card-header py-3">
                <h4 className="text-center mb-0">Leaderboard</h4>
            </div>
            <div className="card-body py-5">
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
                <p className="text-center mt-5 mb-0">See full table</p>
            </div>
        </div>

        <style jsx>{`
            .card {
                border: 2px solid #3672FF;
                border-radius: 25px 25px 0 0;
                overflow: hidden;
            }
            .card-header {
                background: transparent linear-gradient(180deg, #3672FF 0%, #001D6E 100%) 0% 0% no-repeat padding-box;
                color: #ffffff;
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
                border-bottom: 1px solid #707070;
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
                color: #FF3693;
                cursor: pointer;
            }
        `}</style>
    </div>
  );
};

Leaderboard.propTypes = {
    users: PropTypes.array,
  };

export default Leaderboard;
