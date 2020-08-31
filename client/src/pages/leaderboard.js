import React from "react";
import Front from "@/layouts/Front";
import Link from "next/link";

import Position from "@/components/Position";
import TopFive from "@/components/TopFive";
import Points from "@/components/Points";
import Leaderboard from "@/components/Leaderboard";
import Fixtures from "@/components/Fixtures";
import Results from "@/components/Results";
import PredictionTime from "@/components/PredictionTime";
import theme from "../utils/theme";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const results = [
    {
      date: "May 1",
      home: "Ars",
      away: "Ful",
      homeScore: "3",
      awayScore: "2"
    },
    {
        date: "May 1",
        home: "Ars",
        away: "Ful",
        homeScore: "3",
        awayScore: "2"
    },
    {
        date: "May 1",
        home: "Ars",
        away: "Ful",
        homeScore: "3",
        awayScore: "2"
    },
    {
        date: "May 1",
        home: "Ars",
        away: "Ful",
        homeScore: "3",
        awayScore: "2"
    },
    {
        date: "May 1",
        home: "Ars",
        away: "Ful",
        homeScore: "3",
        awayScore: "2"
    },
    {
        date: "May 1",
        home: "Ars",
        away: "Ful",
        homeScore: "3",
        awayScore: "2"
    },
    {
        date: "May 1",
        home: "Ars",
        away: "Ful",
        homeScore: "3",
        awayScore: "2"
    },
    {
        date: "May 1",
        home: "Ars",
        away: "Ful",
        homeScore: "3",
        awayScore: "2"
    },
    {
        date: "May 1",
        home: "Ars",
        away: "Ful",
        homeScore: "3",
        awayScore: "2"
    },
    {
        date: "May 1",
        home: "Ars",
        away: "Ful",
        homeScore: "3",
        awayScore: "2"
    },
  ];

const fixtures = [
  {
    date: "May 1",
    home: "Ars",
    away: "Ful",
    time: "13:00",
  },
  {
    date: "May 1",
    home: "Ars",
    away: "Ful",
    time: "13:00",
  },
  {
    date: "May 1",
    home: "Ars",
    away: "Ful",
    time: "13:00",
  },
  {
    date: "May 1",
    home: "Ars",
    away: "Ful",
    time: "13:00",
  },
  {
    date: "May 1",
    home: "Ars",
    away: "Ful",
    time: "13:00",
  },
  {
    date: "May 1",
    home: "Ars",
    away: "Ful",
    time: "13:00",
  },
  {
    date: "May 1",
    home: "Ars",
    away: "Ful",
    time: "13:00",
  },
  {
    date: "May 1",
    home: "Ars",
    away: "Ful",
    time: "13:00",
  },
  {
    date: "May 1",
    home: "Ars",
    away: "Ful",
    time: "13:00",
  },
  {
    date: "May 1",
    home: "Ars",
    away: "Ful",
    time: "13:00",
  }
];

const UserBoard = () => {
  return (
    <Front activePage="Leaderboard" user={users[0].name}>
      <main>
        <section className="d-flex flex-column justify-content-center user-section">
          <div className="container">
              <div className="d-flex align-items-center user-name">
                <FontAwesomeIcon
                    icon={faUser}
                    style={{ color: `${theme.colors.primary}`, fontSize: "32px" }}
                />
                <h2 className="mx-3">John Doe</h2>
              </div>
            <div className="row">
              <div className="col-md-3 mt-5">
                <Position />
              </div>
              <div className="col-md-4 offset-md-1 mt-3">
                <TopFive users={users} />
              </div>
              <div className="col-md-3 offset-md-1 mt-5">
                <Points />
                <p className="text-center mt-5">
                    <Link href="/predict">
                        <a className="btn btn-pink">
                            Predict now
                        </a>
                    </Link>
                </p>
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
            .btn {
                padding: 0.5rem 1.5rem;
                font-size: 24px;
                line-height: 35px;
            }
            .btn-pink {
                color: ${theme.colors.light};
                background: ${theme.colors.primary};
                border-radius: 15px;
            }
            @media only screen and (max-width: 767px) {
              
            }
          `}</style>
        </section>

        <section className="leaderboard-section">
          <div className="container">
              <div className="row">
                  <div className="col-md-7 mt-3">
                    <Leaderboard users={users} />
                  </div>
                  <div className="col-md-5 mt-3">
                    <Results results={results} />
                  </div>
              </div>
          </div>

          <style jsx>{`
            .leaderboard-section {
                padding: 3rem 0;
            }
          `}</style>
        </section>

        <section className="data-section">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mt-3">
                <Fixtures fixtures={fixtures} />
              </div>
              <div className="col-md-7 offset-md-1 mt-3">
                <PredictionTime />
              </div>
            </div>
          </div>

          <style jsx>{`
            .data-section {
              background-color: ${theme.colors.secondary};
              padding: 6rem 0;
            }
          `}</style>
        </section>
      </main>
    </Front>
  );
};

export default UserBoard;
