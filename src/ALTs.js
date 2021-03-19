import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ReactRRule from "./rrule/RuleComp";
import Table from "./table/ReactTable";
import { makeData } from "./table/makeData";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));

export default function ALTs() {
  const classes = useStyles();
  const [info, setInfo] = useState({
    number: 0,
    word: "",
    map: new Map(),
    rrule: ""
  });

  const [schools, setSchool] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [myMap, setMyMap] = useState(new Map());

  const onClick = () => {
    setRefresh(true);
    if (info.word.length) {
      // info.map.forEach(function (value, key) {
      //   updateMap(key, value);
      // });
      setMyMap(new Map([...info.map, ...myMap]));
      setSchool((arr) => [...arr, info]);
      console.log(schools);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <div className={classes.calendar}>
            <button onClick={onClick}>Click me</button>
            <ReactRRule
              value={refresh && schools}
              onChange={(val) =>
                val.name.length > 0 &&
                setInfo({
                  ...info,
                  number: val.number,
                  word: val.name,
                  map: val.mappy,
                  rrule: val.object
                })
              }
            />
          </div>
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <Paper className={classes.paper}>
          <div className={classes.calendar}>
            <Table
              tableData={
                myMap.size > 0
                  ? makeData(new Map([...info.map, ...myMap]))
                  : makeData(info.map)
              }
            />
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}
