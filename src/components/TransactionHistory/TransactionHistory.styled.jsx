import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  margin: 30px auto;
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 50%;
`;
export const TableHaed = styled.thead`
  font-size: 22px;
  background-color: #ecf0f1;
`;

export const TableHaeder = styled.th`
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  color: white;
  background-color: #04aa6d;
  border: 1px solid #ddd;
`;
export const TableBody = styled.tbody`
  vertical-align: middle;
`;
export const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;
  }
`;

export const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;
