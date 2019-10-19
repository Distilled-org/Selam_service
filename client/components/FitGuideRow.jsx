/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const FitGuideRow = (props) => {
  const { row, index } = props;

  return (
    <TableRow>
      {row.map((value, id) => {
        if (index === 0 || id === 0) {
          return <TableHead key={id}>{value}</TableHead>;
        }
        return <TableData key={id}>{value}</TableData>;
      })}
    </TableRow>
  );
};

export default FitGuideRow;

const TableRow = styled.tr`
  &:hover {
    background-color:#f5f5f5;
  };
`;

const TableHead = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-weight: 700;
`;

const TableData = styled.td`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;
