import React from "react";

import Face from "@material-ui/icons/Face";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FilledInput from "@material-ui/core/FilledInput";
import Paper from "@material-ui/core/Paper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "components/CustomButtons/Button.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import FormGroup from "@material-ui/core/FormGroup";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import image from "assets/img/bg7.jpg";

import multiInputFormStyle from "assets/jss/nextjs-material-kit-pro/pages/multiInputFormStyle.js";

import clsx from "clsx";

const useStyles = makeStyles(multiInputFormStyle);

const listOfStates = [
  "AK - Alaska",
  "AL - Alabama",
  "AR - Arkansas",
  "AS - American Samoa",
  "AZ - Arizona",
  "CA - California",
  "CO - Colorado",
  "CT - Connecticut",
  "DC - District of Columbia",
  "DE - Delaware",
  "FL - Florida",
  "GA - Georgia",
  "GU - Guam",
  "HI - Hawaii",
  "IA - Iowa",
  "ID - Idaho",
  "IL - Illinois",
  "IN - Indiana",
  "KS - Kansas",
  "KY - Kentucky",
  "LA - Louisiana",
  "MA - Massachusetts",
  "MD - Maryland",
  "ME - Maine",
  "MI - Michigan",
  "MN - Minnesota",
  "MO - Missouri",
  "MS - Mississippi",
  "MT - Montana",
  "NC - North Carolina",
  "ND - North Dakota",
  "NE - Nebraska",
  "NH - New Hampshire",
  "NJ - New Jersey",
  "NM - New Mexico",
  "NV - Nevada",
  "NY - New York",
  "OH - Ohio",
  "OK - Oklahoma",
  "OR - Oregon",
  "PA - Pennsylvania",
  "PR - Puerto Rico",
  "RI - Rhode Island",
  "SC - South Carolina",
  "SD - South Dakota",
  "TN - Tennessee",
  "TX - Texas",
  "UT - Utah",
  "VA - Virginia",
  "VI - Virgin Islands",
  "VT - Vermont",
  "WA - Washington",
  "WI - Wisconsin",
  "WV - West Virginia",
  "WY - Wyoming"
];

export default function MultiInputForm() {
  const classes = useStyles();
  const [multipleSelect, setMultipleSelect] = React.useState([]);
  const [simpleSelect, setSimpleSelect] = React.useState("");
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    secondaryEmailAddress: "",
    mobileNumber: "",
    workNumber: "",
    nameOfCompany: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleMultiple = event => {
    setMultipleSelect(event.target.value);
  };

  const handleSimple = event => {
    setSimpleSelect(event.target.value);
  };

  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={5} md={10}>
          <Card className={classes.cardSignup}>
            <h5 className={classes.cardTitle}>ABOUT YOU</h5>
            <CardBody>
              <form className={classes.customForm}>
                <GridContainer className={classes.customContainer}>
                  <GridItem className={classes.customGridItem} xs={12} sm={5} md={5}>
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses
                      }}
                      inputProps={{
                        placeholder: "First Name..."
                      }}
                    />
                  </GridItem>
                  <GridItem className={classes.customGridItem} xs={12} sm={5} md={5}>
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses
                      }}
                      inputProps={{
                        placeholder: "Last Name..."
                      }}
                    />
                  </GridItem>
                  <GridItem className={classes.customGridItem} xs={12} sm={5} md={5}>
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses
                      }}
                      inputProps={{
                        placeholder: "Secondary Email Address..."
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer justify="space-between">
                  <GridItem className={classes.customGridItem} xs={12} sm={5} md={5}>
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses
                      }}
                      inputProps={{
                        placeholder: "Mobile Number*..."
                      }}
                    />
                  </GridItem>
                  <GridItem className={classes.customGridItem} xs={12} sm={5} md={5}>
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses
                      }}
                      inputProps={{
                        placeholder: "Work Number..."
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </form>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={10} md={10}>
          <Card className={classes.cardSignupToggle}>
            <h5 className={classes.cardTitle}>BROKER RELATIONSHIP</h5>
            <CardBody>
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <GridContainer className={classes.customToggleForm}>
                    <GridItem className={classes.customToggleItem} xs={12} sm={5} md={10}>
                      <FormControlLabel
                        value="start"
                        control={<Switch color="primary" />}
                        label="Start"
                        labelPlacement="start"
                      />
                    </GridItem>
                    <GridItem className={classes.customToggleItem} xs={12} sm={5} md={10}>
                      <FormControlLabel
                        value="start"
                        control={<Switch color="primary" />}
                        label="Start"
                        labelPlacement="start"
                      />
                    </GridItem>
                    <GridItem className={classes.customToggleItem} xs={12} sm={5} md={10}>
                      <FormControlLabel
                        value="start"
                        control={<Switch color="primary" />}
                        label="Start"
                        labelPlacement="start"
                      />
                    </GridItem>
                    <GridItem className={classes.customGridItem} xs={12} sm={5} md={10}>
                      <FormControlLabel
                        value="start"
                        control={<Switch color="primary" />}
                        label="Start"
                        labelPlacement="start"
                      />
                    </GridItem>
                  </GridContainer>
                </FormGroup>
              </FormControl>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={10} md={10}>
          <Card className={classes.cardSignup}>
            <h5 className={classes.cardTitle}>YOUR COMPANY INFO</h5>
            <CardBody>
              <form className={classes.customForm}>
                <GridContainer justify="center" className={classes.customContainer}>
                  <GridItem xs={12} sm={5} md={5}>
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses
                      }}
                      inputProps={{
                        placeholder: "Name Of Company..."
                      }}
                    />
                  </GridItem>
                  <GridItem
                    className={classes.customFormControlClasses}
                    xs={12}
                    sm={6}
                    md={5}
                    lg={5}
                  >
                    <InputLabel id="demo-mutiple-checkbox-label">Type of Lender</InputLabel>
                    <Select
                      multiple
                      value={multipleSelect}
                      onChange={handleMultiple}
                      fullWidth={true}
                      MenuProps={{
                        className: classes.selectMenu,
                        classes: { paper: classes.selectPaper }
                      }}
                      classes={{ select: classes.select }}
                      inputProps={{
                        name: "Type of Lender",
                        id: "multiple-select"
                      }}
                    >
                      <MenuItem
                        disabled
                        classes={{
                          root: classes.selectMenuItem
                        }}
                      >
                        Type of Lender
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelectedMultiple
                        }}
                        value="1"
                      >
                        Bank
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelectedMultiple
                        }}
                        value="2"
                      >
                        CDFI
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelectedMultiple
                        }}
                        value="3"
                      >
                        Credit Union
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelectedMultiple
                        }}
                        value="4"
                      >
                        Insurance Company
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelectedMultiple
                        }}
                        value="5"
                      >
                        Non-Bank Lender
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelectedMultiple
                        }}
                        value="6"
                      >
                        Private Equity
                      </MenuItem>
                    </Select>
                  </GridItem>
                  <GridItem xs={12} sm={5} md={5}>
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,

                        className: classes.customFormControlClasses
                      }}
                      inputProps={{
                        placeholder: "Main Phone Line..."
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={5} md={5}>
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses
                      }}
                      inputProps={{
                        placeholder: "Fax..."
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer className={classes.customContainer}>
                  <GridItem xs={12} sm={5} md={5}>
                    <CustomInput
                      formControlProps={{
                        flexGrow: 3,
                        className: classes.customFormControlClasses
                      }}
                      inputProps={{
                        placeholder: "Company Street Address..."
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={5} md={5}>
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses
                      }}
                      inputProps={{
                        placeholder: "City..."
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={5} md={5}>
                    <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                      State
                    </InputLabel>
                    <Select
                      fullWidth={true}
                      MenuProps={{
                        className: classes.selectMenu
                      }}
                      classes={{
                        select: classes.select
                      }}
                      value={simpleSelect}
                      onChange={handleSimple}
                      inputProps={{
                        name: "simpleSelect",
                        id: "simple-select"
                      }}
                    >
                      <MenuItem
                        disabled
                        classes={{
                          root: classes.selectMenuItem
                        }}
                      >
                        Single Select
                      </MenuItem>
                      {listOfStates.map((stateName, index) => {
                        return (
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value={index + 1}
                          >
                            {stateName}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </GridItem>
                  <GridItem style={{ flexGrow: 1 }} xs={12} sm={5} md={5}>
                    <CustomInput
                      formControlProps={{
                        flexGrow: 1,
                        className: classes.customFormControlClasses
                      }}
                      inputProps={{
                        placeholder: "Zip..."
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </form>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={10} md={10}>
          <Card className={classes.cardSignup}>
            <h5 className={classes.cardTitle}>PERSONAL NOTES / AREAS OF EXCELLENCE</h5>
            <CardBody>
              <form className={classes.customForm}>
                <GridContainer className={classes.customToggleForm}>
                  <GridItem justifyContent={"center"} xs={12} sm={5} md={5}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows="8"
                      fullWidth={true}
                      justifyContent="center"
                      defaultValue="Default Value"
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
                  </GridItem>
                </GridContainer>
              </form>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
