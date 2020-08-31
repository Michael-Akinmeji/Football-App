import React from "react";

import styled from "styled-components";
import theme from "../utils/theme";

const Position = () => {
  return (
      <PositionContainer>
          <div className="d-flex flex-column justify-content-center align-items-center p-3 position-section">
              <h6 className="text-center mb-3">Position</h6>
              <h1 className="text-center">14th</h1>
          </div>
      </PositionContainer>
  );
};

const PositionContainer = styled.div`
    .position-section {
        background-color: ${theme.colors.light};
        border-radius: 20px;
    }
    h6 {
        font-size: 20px;
        line-height: 30px;
        color: ${theme.colors.gray};
    }
    h1 {
        font-weight: bold;
        font-size: 50px;
        line-height: 76px;
        color: ${theme.colors.grey};
    }
`;

export default Position;
