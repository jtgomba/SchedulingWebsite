import { RRule, RRuleSet } from "rrule";

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const rruleSet = new RRuleSet();

rruleSet.rrule(
  new RRule({
    freq: RRule.DAILY,
    count: 365,
    tzid: "Asia/Tokyo",
    dtstart: new Date(Date.UTC(2021, 3, 1))
  })
);

function filterDates(arr, query) {
  return arr.filter(function (el) {
    return el.getDate() === query;
  });
}

function filterMonths(arr, query) {
  return arr.filter(function (el) {
    return el.getMonth() === query;
  });
}

function changeToNumber(value) {
  if (value[0]) {
    const num = value[0].getDate();
    return num;
  } else return "";
}

function changeToDayOfWeek(value) {
  var weekday = new Array(7);
  weekday[1] = "MO";
  weekday[2] = "TU";
  weekday[3] = "WE";
  weekday[4] = "TH";
  weekday[5] = "FR";
  weekday[6] = "SA";
  weekday[0] = "SU";

  if (value[0]) {
    const num = value[0].getDay();
    return weekday[num];
  } else return "";
}

export const newRow = (mappy, rowNum) => {
  const thisRow = filterDates(rruleSet.all(), rowNum);
  return {
    jan: {
      day: changeToNumber(filterMonths(thisRow, 0)),
      dayofweek: changeToDayOfWeek(filterMonths(thisRow, 0)),
      assignment:
        filterMonths(thisRow, 0)[0] &&
        mappy.get(filterMonths(thisRow, 0)[0].toDateString()),
      date: filterMonths(thisRow, 0)[0]
    },
    feb: {
      day: changeToNumber(filterMonths(thisRow, 1)),
      dayofweek: changeToDayOfWeek(filterMonths(thisRow, 1)),
      assignment:
        filterMonths(thisRow, 1)[0] &&
        mappy.get(filterMonths(thisRow, 1)[0].toDateString()),
      date: filterMonths(thisRow, 1)[0]
    },
    mar: {
      day: changeToNumber(filterMonths(thisRow, 2)),
      dayofweek: changeToDayOfWeek(filterMonths(thisRow, 2)),
      assignment:
        filterMonths(thisRow, 2)[0] &&
        mappy.get(filterMonths(thisRow, 2)[0].toDateString()),
      date: filterMonths(thisRow, 2)[0]
    },
    apr: {
      day: changeToNumber(filterMonths(thisRow, 3)),
      dayofweek: changeToDayOfWeek(filterMonths(thisRow, 3)),
      assignment:
        filterMonths(thisRow, 3)[0] &&
        mappy.get(filterMonths(thisRow, 3)[0].toDateString()),
      date: filterMonths(thisRow, 3)[0]
    },
    may: {
      day: changeToNumber(filterMonths(thisRow, 4)),
      dayofweek: changeToDayOfWeek(filterMonths(thisRow, 4)),
      assignment:
        filterMonths(thisRow, 4)[0] &&
        mappy.get(filterMonths(thisRow, 4)[0].toDateString()),
      date: filterMonths(thisRow, 4)[0]
    },
    jun: {
      day: changeToNumber(filterMonths(thisRow, 5)),
      dayofweek: changeToDayOfWeek(filterMonths(thisRow, 5)),
      assignment:
        filterMonths(thisRow, 5)[0] &&
        mappy.get(filterMonths(thisRow, 5)[0].toDateString()),
      date: filterMonths(thisRow, 5)[0]
    },
    jul: {
      day: changeToNumber(filterMonths(thisRow, 6)),
      dayofweek: changeToDayOfWeek(filterMonths(thisRow, 6)),
      assignment:
        filterMonths(thisRow, 6)[0] &&
        mappy.get(filterMonths(thisRow, 6)[0].toDateString()),
      date: filterMonths(thisRow, 6)[0]
    },
    aug: {
      day: changeToNumber(filterMonths(thisRow, 7)),
      dayofweek: changeToDayOfWeek(filterMonths(thisRow, 7)),
      assignment:
        filterMonths(thisRow, 7)[0] &&
        mappy.get(filterMonths(thisRow, 7)[0].toDateString()),
      date: filterMonths(thisRow, 7)[0]
    },
    sep: {
      day: changeToNumber(filterMonths(thisRow, 8)),
      dayofweek: changeToDayOfWeek(filterMonths(thisRow, 8)),
      assignment:
        filterMonths(thisRow, 8)[0] &&
        mappy.get(filterMonths(thisRow, 8)[0].toDateString()),
      date: filterMonths(thisRow, 8)[0]
    },
    oct: {
      day: changeToNumber(filterMonths(thisRow, 9)),
      dayofweek: changeToDayOfWeek(filterMonths(thisRow, 9)),
      assignment:
        filterMonths(thisRow, 9)[0] &&
        mappy.get(filterMonths(thisRow, 9)[0].toDateString()),
      date: filterMonths(thisRow, 9)[0]
    },
    nov: {
      day: changeToNumber(filterMonths(thisRow, 10)),
      dayofweek: changeToDayOfWeek(filterMonths(thisRow, 10)),
      assignment:
        filterMonths(thisRow, 10)[0] &&
        mappy.get(filterMonths(thisRow, 10)[0].toDateString()),
      date: filterMonths(thisRow, 10)[0]
    },
    dec: {
      day: changeToNumber(filterMonths(thisRow, 11)),
      dayofweek: changeToDayOfWeek(filterMonths(thisRow, 11)),
      assignment:
        filterMonths(thisRow, 11)[0] &&
        mappy.get(filterMonths(thisRow, 11)[0].toDateString()),
      date: filterMonths(thisRow, 11)[0]
    }
  };
};

export function makeData(mappy) {
  const makeDataLevel = (depth = 0) => {
    return range(31).map((d) => {
      return {
        ...newRow(mappy, d + 1)
      };
    });
  };
  return makeDataLevel();
}
