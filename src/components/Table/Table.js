import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import styled from 'styled-components';


const DivContainer = styled.div`
  width: 80%;
  margin: auto;
  overflow-x: auto;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
`;
const TableStyle = styled.table`
  min-width: 650px;
  width: 100%;
  display:table;
  border-spacing: 0;
  border-collapse: collapse;

  & tr{
    color: inherit;
    display: table-row;
    outline:   0;
    vertical-align: middle;
  }
  & td{
    color: rgba(0, 0, 0, 0.87);
    font-weight: normal;
    line-height: 1.5rem;
    padding: 15px;
    font-size: 0.875rem;
    text-align: left;
    border-bottom: 1px solid rgba(224,224,224,1);
    letter-spacing: 0.01071em;
    vertical-align: inherit;
  }
  & th{
    color: rgba(0, 0, 0, 0.87);
    font-weight: bold;
    line-height: 1.5rem;
    padding: 15px;
    font-size: 0.875rem;
    text-align: left;
    border-bottom: 1px solid rgba(224,224,224,1);
    letter-spacing: 0.01071em;
    vertical-align: inherit;
  }
`;

const Table = (props) => {
    const { headers, rows } = props;

    return (
      <DivContainer className="MuiTableContainer-root">
        <TableStyle className="table table-bordered table-hover">
          <TableHeader headers={headers}></TableHeader>
          <TableBody headers={headers} rows={rows}></TableBody>
        </TableStyle>
      </DivContainer>
    );
  }
export default Table