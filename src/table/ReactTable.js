import React from "react";
import styled from "styled-components";
import { useTable, useBlockLayout } from "react-table";

const Styles = styled.div`
  padding: 1rem;

  .table {
    display: inline-block;
    border-spacing: 0;
    border: 1px solid black;

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
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

function Table({ tableData }) {
  const columns = React.useMemo(
    () => [
      {
        Header: "April",
        columns: [
          {
            Header: "日",
            accessor: "apr.day"
          },
          {
            Header: "曜日",
            accessor: "apr.dayofweek"
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
            accessor: "may.day"
          },
          {
            Header: "曜日",
            accessor: "may.dayofweek"
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
            accessor: "jun.day"
          },
          {
            Header: "曜日",
            accessor: "jun.dayofweek"
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
            accessor: "jul.day"
          },
          {
            Header: "曜日",
            accessor: "jul.dayofweek"
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
            accessor: "aug.day"
          },
          {
            Header: "曜日",
            accessor: "aug.dayofweek"
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
            accessor: "sep.day"
          },
          {
            Header: "曜日",
            accessor: "sep.dayofweek"
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
            accessor: "oct.day"
          },
          {
            Header: "曜日",
            accessor: "oct.dayofweek"
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
            accessor: "nov.day"
          },
          {
            Header: "曜日",
            accessor: "nov.dayofweek"
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
            accessor: "dec.day"
          },
          {
            Header: "曜日",
            accessor: "dec.dayofweek"
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
            accessor: "jan.day"
          },
          {
            Header: "曜日",
            accessor: "jan.dayofweek"
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
            accessor: "feb.day"
          },
          {
            Header: "曜日",
            accessor: "feb.dayofweek"
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
            accessor: "mar.day"
          },
          {
            Header: "曜日",
            accessor: "mar.dayofweek"
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
      data: tableData
    },
    useBlockLayout
  );

  // Render the UI for your table
  return (
    <Styles>
      return (
      <div {...getTableProps()} className="table">
        <div>
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => (
                <div {...column.getHeaderProps()} className="th">
                  {column.render("Header")}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr">
                {row.cells.map((cell) => {
                  return (
                    <div {...cell.getCellProps()} className="td">
                      {cell.render("Cell")}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      )
    </Styles>
  );
}

export default Table;
