/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import FitGuideRow from './FitGuideRow';

const FitGuide = (props) => {
  const { chart } = props;

  return (
    <Table>
      <TableHead>
        <FitGuideRow row={chart[0]} index={0} key="header" />
      </TableHead>
      <TableBody>
        {chart.map((row, index) => {
          if (index !== 0) {
            return <FitGuideRow row={row} index={index} key={index} />;
          }
        })}
      </TableBody>
    </Table>
  );
};

export default FitGuide;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 20px;
`;

const TableHead = styled.thead``;

const TableBody = styled.tbody``;
