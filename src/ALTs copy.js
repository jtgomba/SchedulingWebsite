import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Table from "./table/ReactTable";
import { makeData } from "./table/makeData";
import RRuleGen from "./BootstrapRRuleGen/RRuleGenerator";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
  },
  accord: {
    width: '100%',
    flexGrow: '1'
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
      <Grid item xs={12}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>Add Schools</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className={classes.accord}>
                  <RRuleGen />
                  </div>
              </AccordionDetails>
            </Accordion>
      </Grid>
      <Grid item xs={12}>
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
