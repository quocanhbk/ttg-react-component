const TableBody = (props) => {
    const { headers, rows } = props;
  
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
          { rows && rows.map((value) => {
                  return buildRow(value, headers);
              })}
        </tbody>
  );
  }
export default TableBody