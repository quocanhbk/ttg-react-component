import React from 'react'
import useSortableData from './useSortableData'
import IcoSort from '../icons/IcoRepeat'
const TableBody = (props) => {
    const { headers, rows } = props;
    const {requestSort} = useSortableData(rows)


    const buildRow = (rows, headers) => {
      return (
           <tr key={rows.id}>
           { headers.map((value, index) => {
               return <td key={index}>{rows[value]}</td>
            })}
           </tr>
       )
    };
    return(
        <tbody>
          <tr className="tr-sort-data">
            {headers.map((value,index) => <th key={index}><button className="button-sort" onClick={() => requestSort(value)}><IcoSort/></button></th>)}
          </tr>
          { rows && rows.map((value) => {
                  return buildRow(value, headers);
              })}
        </tbody>
  );
  }
export default TableBody