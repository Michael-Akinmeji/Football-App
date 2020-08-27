import React from "react";
import PropTypes from "prop-types";

const TopFive = ({ users }) => {
  return (
    <div className="topfive-section">
        <div className="card">
            <div className="card-header py-3">
                <h4 className="text-center mb-0">{`Top 5 [Week 2]`}</h4>
            </div>
            <div className="card-body">
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col" className="text-center">Pos</th>
                            <th scope="col" className="text-center">Name</th>
                            <th scope="col" className="text-center">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => (
                                <tr key={i + 1}>
                                    <th scope="row" className="text-center">{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td className="text-center"><strong>{user.points}</strong></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>

        <style jsx>{`
            .card {
                border: none;
                border-radius: 25px;
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
                border-bottom: 1px solid #707070;
            }
            th {
                font-weight: bold;
            }
        `}</style>
    </div>
  );
};

TopFive.propTypes = {
    users: PropTypes.array,
  };

export default TopFive;
