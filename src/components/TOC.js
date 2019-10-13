import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 100px;
  left: 50px;
`;

export const TOC = ({ toc }) => {
  return (
    <Wrapper>
      {toc.map((line, i) => {
        return (
          <>
            <p>
              <a href={line.url}>{line.title}</a>
            </p>
          </>
        );
      })}
    </Wrapper>
  );
};
