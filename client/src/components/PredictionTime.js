import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import theme from "../utils/theme";

const PredictionTime = () => {
  const calcTime = () => {
    let date = new Date("Sep 11, 2020 15:00:00");
    let deadline = date.getTime();
    let dueDate = date.getDate();
    let now = new Date().getTime();
    let difference = deadline - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dueDate,
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calcTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calcTime());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <div className="d-flex flex-column justify-content-center align-items-center mt-5 prediction-section">
        <h2 className="">Prediction Deadline</h2>
        {Object.keys(timeLeft).length > 0 ? (
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h3 className="mb-3">
              {`${timeLeft.days} days : ${timeLeft.hours}h : ${timeLeft.minutes}m : ${timeLeft.seconds}s`}
            </h3>
            <p className="">11th September, 2020</p>
            <p className="text-center mb-0">
                <Link href="/predict">
                    <a className="btn btn-pink">
                        Predict now
                    </a>
                </Link>
            </p>
          </div>
        ) : (
          <h1 className="text-primary">Time Out!</h1>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .prediction-section {
    color: ${theme.colors.light};
    border: 5px solid ${theme.colors.light};
    padding: 3rem;
  }
  h2 {
    background-color: ${theme.colors.secondary};
    padding: 0 10px;
    font-weight: 900;
    font-size: 50px;
    line-height: 76px;
    margin-top: -6rem;
    margin-left: -2.5rem;
  }
  h3 {
    font-weight: bold;
    font-size: 35px;
    line-height: 53px;
  }
  p {
    font-size: 24px;
    line-height: 35px;
    margin-bottom: 4rem;
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
  .text-primary {
    color: ${theme.colors.primary};
  }
`;

export default PredictionTime;
