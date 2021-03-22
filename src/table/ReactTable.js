import React from "react";
import styled from "styled-components";
import { useTable, useBlockLayout } from "react-table";
import { useMemo } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import BTable from 'react-bootstrap/Table';

const Styles = styled.div`
  .table {
    text-align: center;
    font-size: 11px;
    font-family: Calibri, sans-serif;

    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }

    .th,
    .td {
      margin: 0;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;


function Table({ tableData }) {
  const defaultColumn = useMemo(
    () => ({
      minWidth: 30,
      maxWidth: 120
    }),
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "April",
        columns: [
          {
            Header: "日",
            accessor: "apr.day",
            width: 30
          },
          {
            Header: "曜",
            accessor: "apr.dayofweek",
            width: 30
          },
          {
            Header: "訪問計画",
            accessor: "apr.assignment"
          }
        ]
      },
      {
        Header: "May",
        columns: [
          {
            Header: "日",
            accessor: "may.day",
            width: 30
          },
          {
            Header: "曜",
            accessor: "may.dayofweek",
            width: 30
          },
          {
            Header: "訪問計画",
            accessor: "may.assignment"
          }
        ]
      },
      {
        Header: "June",
        columns: [
          {
            Header: "日",
            accessor: "jun.day",
            width: 30
          },
          {
            Header: "曜",
            accessor: "jun.dayofweek",
            width: 30
          },
          {
            Header: "訪問計画",
            accessor: "jun.assignment"
          }
        ]
      },
      {
        Header: "July",
        columns: [
          {
            Header: "日",
            accessor: "jul.day",
            width: 30
          },
          {
            Header: "曜",
            accessor: "jul.dayofweek",
            width: 30
          },
          {
            Header: "訪問計画",
            accessor: "jul.assignment"
          }
        ]
      },
      {
        Header: "August",
        columns: [
          {
            Header: "日",
            accessor: "aug.day",
            width: 30
          },
          {
            Header: "曜",
            accessor: "aug.dayofweek",
            width: 30
          },
          {
            Header: "訪問計画",
            accessor: "aug.assignment"
          }
        ]
      },
      {
        Header: "September",
        columns: [
          {
            Header: "日",
            accessor: "sep.day",
            width: 30
          },
          {
            Header: "曜",
            accessor: "sep.dayofweek",
            width: 30
          },
          {
            Header: "訪問計画",
            accessor: "sep.assignment"
          }
        ]
      },
      {
        Header: "October",
        columns: [
          {
            Header: "日",
            accessor: "oct.day",
            width: 30
          },
          {
            Header: "曜",
            accessor: "oct.dayofweek",
            width: 30
          },
          {
            Header: "訪問計画",
            accessor: "oct.assignment"
          }
        ]
      },
      {
        Header: "November",
        columns: [
          {
            Header: "日",
            accessor: "nov.day",
            width: 30
          },
          {
            Header: "曜",
            accessor: "nov.dayofweek",
            width: 30
          },
          {
            Header: "訪問計画",
            accessor: "nov.assignment"
          }
        ]
      },
      {
        Header: "December",
        columns: [
          {
            Header: "日",
            accessor: "dec.day",
            width: 30
          },
          {
            Header: "曜",
            accessor: "dec.dayofweek",
            width: 30
          },
          {
            Header: "訪問計画",
            accessor: "dec.assignment"
          }
        ]
      },
      {
        Header: "January",
        columns: [
          {
            Header: "日",
            accessor: "jan.day",
            width: 30
          },
          {
            Header: "曜",
            accessor: "jan.dayofweek",
            width: 30
          },
          {
            Header: "訪問計画",
            accessor: "jan.assignment"
          }
        ]
      },
      {
        Header: "February",
        columns: [
          {
            Header: "日",
            accessor: "feb.day",
            width: 30
          },
          {
            Header: "曜",
            accessor: "feb.dayofweek",
            width: 30
          },
          {
            Header: "訪問計画",
            accessor: "feb.assignment"
          }
        ]
      },
      {
        Header: "March",
        columns: [
          {
            Header: "日",
            accessor: "mar.day",
            width: 30
          },
          {
            Header: "曜",
            accessor: "mar.dayofweek",
            width: 30
          },
          {
            Header: "訪問計画",
            accessor: "mar.assignment"
          }
        ]
      }
    ],
    []
  );

  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data: tableData,
      defaultColumn
    },
    useBlockLayout
  );

  // Render the UI for your table
  return (
    <Styles>
    <BTable striped bordered hover size="sm" {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </BTable>
    </Styles>
  );
}

export default Table;
