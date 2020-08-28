import React from "react";
import Front from "@/layouts/Front";

import Register from '@/components/Register';
import TopFive from '@/components/TopFive';
import Leaderboard from '@/components/Leaderboard';
import Fixtures from '@/components/Fixtures';
import PredictionTime from '@/components/PredictionTime';

const users = [
    {
        name: 'John Doe',
        points: 80
    },
    {
        name: 'John Doe',
        points: 80
    },
    {
        name: 'John Doe',
        points: 80
    },
    {
        name: 'John Doe',
        points: 80
    },
    {
        name: 'John Doe',
        points: 80
    }
];

const fixtures = [
    {
        date: 'May 1',
        home: 'Ars',
        away: 'Ful',
        time: '13:00'
    },
    {
        date: 'May 1',
        home: 'Ars',
        away: 'Ful',
        time: '13:00'
    },
    {
        date: 'May 1',
        home: 'Ars',
        away: 'Ful',
        time: '13:00'
    },
    {
        date: 'May 1',
        home: 'Ars',
        away: 'Ful',
        time: '13:00'
    },
    {
        date: 'May 1',
        home: 'Ars',
        away: 'Ful',
        time: '13:00'
    },
    {
        date: 'May 1',
        home: 'Ars',
        away: 'Ful',
        time: '13:00'
    },
    {
        date: 'May 1',
        home: 'Ars',
        away: 'Ful',
        time: '13:00'
    },
    {
        date: 'May 1',
        home: 'Ars',
        away: 'Ful',
        time: '13:00'
    },
    {
        date: 'May 1',
        home: 'Ars',
        away: 'Ful',
        time: '13:00'
    },
    {
        date: 'May 1',
        home: 'Ars',
        away: 'Ful',
        time: '13:00'
    },
];

const HomePage = () => {
  return (
      <Front activePage='Home'>
          <main>
            <section className="d-flex flex-column justify-content-center landing-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mt-3 d-flex flex-column justify-content-center text-white">
                            <div className="d-flex flex-column">
                                <h1 className="">CTA HEADER</h1>
                                <p className="mb-5">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet…
                                </p>
                                <h6 className="text-right">&mdash; How to play</h6>
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-1 mt-3">
                            <Register />
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .landing-section {
                        height: 100vh;
                        background-image: url(/images/night-football.png);
                        background-repeat: no-repeat;
                        background-size: cover;
                    }
                    .landing-section h1 {
                        font-weight: 900;
                        font-size: 50px;
                        line-height: 76px;
                    }
                    .landing-section p {
                        font-size: 16px;
                        line-height: 25px;
                    }
                    .landing-section h6 {
                        color: #FF3693;
                        font-size: 18px;
                        line-height: 27px;
                    }
                    @media only screen and (max-width: 767px) {
                        .landing-section {
                            height: fit-content;
                            padding-top: 4rem;
                            padding-bottom: 1rem;
                        }
                    }
                `}</style>
            </section>

            <section className="summary-section position-relative">
                <div className="container">
                    <div className="summary-content-wrapper py-5 px-4">
                        <div className="d-flex flex-column">
                            <div className="summary-content">
                                <h4 className="mb-3">Short Summary of the how to play the game and some features</h4>
                                <p className="mb-5">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea…
                                </p>
                                <h6 className="text-right">&mdash; How to play</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="coach-avatar">
                    <img className="d-block" src="/images/coach-img.png" alt="coach avatar" />
                </div>

                <style jsx>{`
                    .summary-section {
                        max-width: 1500px;
                        padding: 3rem 0;
                    }
                    .summary-content-wrapper {
                        border: 2px solid #3672FF;
                        border-radius: 25px;
                    }
                    .summary-content {
                        width: 70%;
                    }
                    h4 {
                        color: #5B5B5B;
                        font-weight: bold;
                        font-size: 24px;
                        line-height: 35px;
                    }
                    p {
                        color: #5B5B5B;
                        font-size: 16px;
                        line-height: 25px;
                    }
                    h6 {
                        color: #FF3693;
                        font-size: 18px;
                        line-height: 27px;
                    }
                    .coach-avatar {
                        height: 600px;
                        position: absolute;
                        top: 0;
                        right: 0;
                        overflow: hidden;
                        margin-top: -150px;
                    }
                    .coach-avatar img {
                        margin-right: -160px;
                    }
                    @media only screen and (max-width: 767px) {
                        .summary-content {
                            width: 100%;
                        }
                        .coach-avatar {
                            display: none;
                        }
                    }
                `}</style>
            </section>

            <section className="data-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mt-3">
                            <TopFive users={users} />
                        </div>
                        <div className="col-md-7 offset-md-1 mt-3">
                            <PredictionTime />
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .data-section {
                        background-color: #011B28;
                        padding: 2.5rem 0;
                    }
                `}</style>
            </section>

            <section className="leaderboard-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mt-3">
                            <Leaderboard users={users} />
                        </div>
                        <div className="col-md-5 offset-md-1 mt-3">
                            <Fixtures fixtures={fixtures} />
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .leaderboard-section {
                        padding: 4rem 0;
                        background-image: url(/images/night-football.png);
                        background-repeat: no-repeat;
                        background-size: cover;
                    }
                `}</style>
            </section>
          </main>
      </Front>
  );
};

export default HomePage;
