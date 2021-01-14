import Pagination from './Pagination'

const TablePagination = (props)=>{
    const {headers,rows, totalPage, pageSize} = props
    return(
        <>
            <Pagination 
                totalPage={totalPage}
                headers={headers}
                rows={rows} 
                pageSize={pageSize}   
            />
        </>
    )
}

export default TablePagination