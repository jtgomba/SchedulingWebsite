import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTable } from "react-table";
import { RRule } from "rrule";

import { makeData } from "./makeData";

const Styles = styled.div`
  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      font-size: 11px;
      :last-child {
        border-right: 0;
      }
    }
  }
`;

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function Calendar({ newData }) {
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

  const [data, setData] = useState(makeData(31));

  useEffect(() => {
    //let newbie = makeCustomData("Bando ES", newData, 31);
    if (newData) {
      data.forEach((x) => {
        for (const property in x) {
          if (x.hasOwnProperty(property)) {
            x[property].assignment = Math.floor(Math.random() * 11);
          }
        }
      });
    }
  }, [newData]);

  /*   function findNested(obj, key, value) {
    // Base case
    if (obj[key] === value) {
      return obj;
    } else {
      for (var i = 0, len = Object.keys(obj).length; i < len; i++) {
        if (typeof obj[i] === "object") {
          var found = this.findNested(obj[i], key, value);
          if (found) {
            // If the object was found in the recursive call, bubble it up.
            return found;
          }
        }
      }
    }
  } */

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
}

export default Calendar;
