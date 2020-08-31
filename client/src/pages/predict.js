import React from "react";
import Front from "@/layouts/Front";

import Position from "@/components/Position";
import Points from "@/components/Points";
import theme from "../utils/theme";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PredictScore from "@/components/PredictScore";

const users = [
  {
    name: "John Doe",
    points: 80,
  },
  {
    name: "John Doe",
    points: 80,
  },
  {
    name: "John Doe",
    points: 80,
  },
  {
    name: "John Doe",
    points: 80,
  },
  {
    name: "John Doe",
    points: 80,
  },
];

const fixtures = [
  {
    date: "May 1, 2020",
    home: "Ars",
    away: "Ful",
    time: "13:00",
  },
  {
    date: "May 1, 2020",
    home: "Ars",
    away: "Ful",
    time: "13:00",
  },
  {
    date: "May 1, 2020",
    home: "Ars",
    away: "Ful",
    time: "13:00",
  },
  {
    date: "May 1, 2020",
    home: "Ars",
    away: "Ful",
    time: "13:00",
  },
  {
    date: "May 1, 2020",
    home: "Ars",
    away: "Ful",
    time: "13:00",
  },
  {
    date: "May 1, 2020",
    home: "Ars",
    away: "Ful",
    time: "13:00",
  },
  {
    date: "May 1, 2020",
    home: "Ars",
    away: "Ful",
    time: "13:00",
  },
  {
    date: "May 1, 2020",
    home: "Ars",
    away: "Ful",
    time: "13:00",
  },
  {
    date: "May 1, 2020",
    home: "Ars",
    away: "Ful",
    time: "13:00",
  },
  {
    date: "May 1, 2020",
    home: "Ars",
    away: "Ful",
    time: "13:00",
  }
];

const Predict = () => {
  return (
    <Front activePage="Leaderboard" user={users[0].name}>
      <main>
        <section className="d-flex flex-column justify-content-center user-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-3">
                <div className="d-flex align-items-center user-name">
                    <FontAwesomeIcon
                        icon={faUser}
                        style={{ color: `${theme.colors.primary}`, fontSize: "32px" }}
                    />
                    <h2 className="mx-3">John Doe</h2>
                </div>
              </div>
              <div className="col-md-3 mt-3">
                <Points />
              </div>
              <div className="col-md-3 mt-3">
                <Position />
              </div>
            </div>
          </div>

          <style jsx>{`
            .user-section {
                padding-top: 6rem;
                padding-bottom: 2rem;
                background-image: url(/images/night-football.png);
                background-repeat: no-repeat;
                background-position: bottom;
                background-size: cover;
            }
            .user-section h2 {
                font-weight: bold;
                font-size: 35px;
                line-height: 12px;
                color: ${theme.colors.light};
            }
          `}</style>
        </section>

        <section className="predict-section">
            <div className="container">
                <PredictScore fixtures={fixtures} />
            </div>

            <style jsx>{`
                .predict-section {
                    padding: 3rem 0 6rem 0;
                }
            `}</style>
        </section>

        <section className="football-bg">
            <style jsx>{`
                .football-bg {
                    height: 300px;
                    background-image: url(/images/night-football.png);
                    background-repeat: no-repeat;
                    background-position: bottom;
                    background-size: cover;
                }
            `}</style>
        </section>
      </main>
    </Front>
  );
};

export default Predict;
