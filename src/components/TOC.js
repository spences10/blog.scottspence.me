import React from 'react';

export const TOC = ({ toc }) => {
  return (
    <>
      {toc.map((line, i) => {
        return <p>{line.title}</p>;
      })}
    </>
  );
};
