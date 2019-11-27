import React, { Component, useContext } from "react";

import { FormDispatchContext, FormStateContext } from "pages/authpagination.js";
import {
  Switch,
  SwitchLabel,
  SwitchRadio,
  SwitchSelection
} from "components/ThreeToggleSwitch/toggleStyle.js";

const titleCase = str =>
  str
    .split(/\s+/)
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join(" ");

const ClickableLabel = ({ title, onChange, id }) => (
  <SwitchLabel onClick={event => onChange(event, title)} className={id} id={id} val={title}>
    {titleCase(title)}
  </SwitchLabel>
);

const ConcealedRadio = ({ value, selected }) => (
  <SwitchRadio type="radio" name="switch" defaultChecked={selected === value} />
);

class ThreeToggleSwitch extends Component {
  state = { selected: this.props.selected };

  combineMethods = (event, val) => {
    this.handleChange(val);
    this.props.onToggleChange(event, val);
  };

  handleChange = val => {
    this.setState({ selected: val });
  };

  selectionStyle = () => {
    return {
      left: `${(this.props.values.indexOf(this.state.selected) / 3) * 100}%`
    };
  };

  render() {
    const { selected } = this.state;
    const { id } = this.props;
    return (
      <Switch>
        {this.props.values.map((val, index) => {
          return (
            <span key={index}>
              <ConcealedRadio value={val} selected={selected} />
              <ClickableLabel
                title={val}
                key={id}
                id={id}
                onChange={(event, val) => this.combineMethods(event, val)}
              />
            </span>
          );
        })}
        <SwitchSelection style={this.selectionStyle()} />
      </Switch>
    );
  }
}
// const ThreeToggleSwitch = () => {
//    const dispatch = useContext(FormDispatchContext);
//    const state = useContext(FormStateContext);

//   // state = { selected: this.props.selected };

//   const combineMethods = (event, val) => {
//     handleChange(val);
//     this.props.onToggleChange(event, val);
//   };

//   const handleChange = event => {
//     dispatch({ type: "toggle", payload: event.target.id })
//   };

//   const selectionStyle = () => {
//     return {
//       left: `${(this.props.values.indexOf(this.state.selected) / 3) * 100}%`
//     };
//   };

//   render() {
//     const { selected } = this.state;
//     const { id } = this.props;
//     console.log(this.props)
//     return (
//       <Switch>
//         {this.props.values.map((val, index) => {
//           return (
//             <span key={index}>
//               <ConcealedRadio value={val} selected={selected} />
//               <ClickableLabel
//                 title={val}
//                 key={id}
//                 id={id}
//                 onChange={(event, val) => this.combineMethods(event, val)}
//               />
//             </span>
//           );
//         })}
//         <SwitchSelection style={this.selectionStyle()} />
//       </Switch>
//     );
//   }
// };

// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import { green, blue } from '@material-ui/core/colors';
// import Box from '@material-ui/core/Box';

// import styles from "assets/jss/nextjs-material-kit-pro/components/threeTabSwitchStyle.js";


// const TabPanel = props => {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`action-tabpanel-${index}`}
//       aria-labelledby={`action-tab-${index}`}
//       {...other}
//     >
//       <Box p={3}>{children}</Box>
//     </Typography>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// const a11yProps = index => {
//   return {
//     id: `action-tab-${index}`,
//     'aria-controls': `action-tabpanel-${index}`,
//   };
// }

// const useStyles = makeStyles(theme => ({
//   root: {
//     backgroundColor: "green",
//     width: 150,
//     position: 'relative',
//     minHeight: 40,
//     margin: 7
//   },
//   fab: {
//     position: 'absolute',
//     bottom: 0,
//     right: 0,
//   },
//   fabGreen: {
//     color: theme.palette.common.white,
//     backgroundColor: blue[500],
//     '&:hover': {
//       backgroundColor: green[600],
//     },
//   },
// }));

// const ThreeToggleSwitch = () => {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [value, setValue] = React.useState(0);

//  const tabStyle = {
//     minWidth: 50,
//     paddingLeft: 0,
//     paddingRight: 0,
//     margin: 0,
//     letterSpacing: "-.04em",
//     backgroundColor: "white"
//   };

//   const tabClass = { 
//     labelContainer: classes.labelContainer 
//   };

//   const labelStyle = { 
//     fontSize: "10px" 
//   };

//   const tabLabels = ["YES", "Unknown", "NO"]


//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar position="absolute" color="default">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="primary"
//           textColor="primary"
//           aria-label="action tabs example"
//         >
//           {tabLabels.map(tab => (
//             <Tab
//               key={tab}
//               label={<span style={labelStyle}>{tab}</span>}
//               classes={tabClass}
//               style={tabStyle}
//             />
//           ))}
//         </Tabs>
//       </AppBar>
//     </div>
//   );
// };


export default ThreeToggleSwitch;
