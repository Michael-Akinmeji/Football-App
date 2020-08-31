import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "../utils/theme";

const Fixtures = ({ fixtures }) => {
  return (
      <FixturesContainer>
        <div className="fixtures-section">
            <div className="card">
                <div className="card-header py-3">
                    <h4 className="text-center mb-0">{`Fixtures [Week 2]`}</h4>
                </div>
                <div className="card-body">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col" className="text-center">Date</th>
                                <th scope="col" colSpan="3" className="text-center">Games</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                fixtures.map((fixture, i) => (
                                    <tr key={i + 1}>
                                        <td className="text-center p-1">{fixture.date}</td>
                                        <td className="p-1">
                                            <table className="table table-borderless">
                                                <tbody>
                                                    <tr>
                                                        <td className="p-0"><strong>{fixture.home}</strong></td>
                                                        <td className="p-0">{fixture.time}</td>
                                                        <td className="p-0"><strong>{fixture.away}</strong></td>
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
            </div>
        </div>
    </FixturesContainer>
  );
};

const FixturesContainer = styled.div`
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
    th {
        font-weight: bold;
        font-size: 24px;
        line-height: 35px;
    }
`;

Fixtures.propTypes = {
    fixtures: PropTypes.array,
  };

export default Fixtures;
