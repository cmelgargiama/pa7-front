import React, {useEffect, useMemo} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { getGerentes } from '../../reducers/Gerentes/gerentesSlice'
import TableContainer from './TableContainer'
import { useFilters } from 'react-table'
import ActiveFilter from './ActiveFilter'
import { useTable } from 'react-table'

const GerentesTable = () => {

const dispatch = useDispatch()

  useEffect(() => {

  dispatch(getGerentes())
    
    
  }, [])

  


 const {gerentes} = useSelector(
    (state) => state.gerentes)
  
  const columns = useMemo(
    () => [
      {
        Header: "Código",
        accessor: "Codigo",
        Cell: ({ value }) => <strong>{value}</strong>,
        Filter: ActiveFilter
      },
      {
        Header: "Nombre",
        accessor: "Nombre",
        Filter: ActiveFilter
      },
      {
        Header: "Activo",
        accessor: "Activo",
        Cell: ({ value }) => <strong>{value === 0 ? 'No' : 'Si'}</strong>,
        Filter: ActiveFilter
      }
    ],
    []
  );
  const tableInstance = useTable({ columns: columns, data: gerentes }, useFilters);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = tableInstance;
  



  return (

    <div style={{alignItems: 'center'}}>
      <h1>Gerentes</h1>
      <TableContainer>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}
                <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
       </TableContainer>    
    </div>
       
   

        
    

  )
}

export default GerentesTable