import React from "react";
import styled from "styled-components";
import { useTable } from "react-table";
import { RRule } from "rrule";
import Title from "./Title";

import makeData from "./makeData";

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

function Calendar() {
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

  const data = React.useMemo(() => makeData(31), []);

  const rule = new RRule({
    freq: RRule.WEEKLY,
    dtstart: new Date(Date.UTC(2021, 3, 8, 0, 0, 0)),
    tzid: "Asia/Tokyo",
    until: new Date(Date.UTC(2022, 2, 31, 0, 0, 0)),
    count: 30,
    interval: 1
  });

  //based on an rrule will change the assignment in
  rule.all().forEach((tes) => {
    data.forEach((element) => {
      Object.entries(element).forEach((row) => {
        if (tes && row[1].date[0]) {
          if (row[1].date[0].toDateString() === tes.toDateString()) {
            row[1].assignment = "Bando ES";
          }
        }
      });
    });
  });

  return (
    <Styles>
      <Title>Recent Orders</Title>
      <Table columns={columns} data={data} />
    </Styles>
  );
}

export default Calendar;
