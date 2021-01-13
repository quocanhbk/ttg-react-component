const TableBody = (props) => {
    const { headers, rows } = props;
  
    const buildRow = (row, headers) => {
      return (
           <tr key={row.id}>
           { headers.map((value, index) => {
               return <td key={index}>{row[value]}</td>
            })}
           </tr>
       )
    };
  
    return(
        <tbody>
          { rows && rows.map((value) => {
                  return buildRow(value, headers);
              })}
        </tbody>
  );
  }
export default TableBody