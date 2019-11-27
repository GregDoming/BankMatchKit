import React, { useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import FormGroup from "@material-ui/core/FormGroup";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";

import MaskedNumberInput from "components/MaskedNumberInput/MaskedNumberInput.js";
import { FormDispatchContext, FormStateContext } from "pages/authpagination.js";

import multiInputFormStyle from "assets/jss/nextjs-material-kit-pro/pages/multiInputFormStyle.js";

const useStyles = makeStyles(multiInputFormStyle);

const lenderSelect = [
  "Bank",
  "CDFI",
  "Credit Union",
  "Insurance Company",
  "Non Bank Lender",
  "Private Equity"
];

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

const MultiInputForm = props => {
  const classes = useStyles();
  const [multipleSelect, setMultipleSelect] = React.useState([]);
  const [simpleSelect, setSimpleSelect] = React.useState("");
  const [values, setValues] = React.useState({
    secondaryEmailAddress: "",
    workNumber: "",
    nameOfCompany: "",
    workNumber: "(  )    -    ",
    companyPhoneNumber: "(  )    -    ",
    fax: "(  )    -    ",
    companyStreetAddress: "",
    zip: "",
    personalNotes: ""
  });
  const dispatch = useContext(FormDispatchContext);
  const state = useContext(FormStateContext);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value.trim() });
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
                      labelText="First Name"
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses
                      }}
                      inputProps={{
                        value: state.firstName,
                        onChange: () => dispatch({ type: "handleFormInput", payload: "firstName" }),
                        id: "firstName"
                      }}
                    />
                  </GridItem>
                  <GridItem className={classes.customGridItem} xs={12} sm={5} md={5}>
                    <CustomInput
                      labelText="Last Name"
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses
                      }}
                      inputProps={{
                        value: state.lastName,
                        onChange: () => dispatch({ type: "handleFormInput", payload: "lastName" }),
                        id: "lastName"
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
                        value: state.secondaryEmailAddress,
                        onChange: () =>
                          dispatch({ type: "handleFormInput", payload: "secondaryEmailAddress" }),
                        id: "secondaryEmailAddress"
                      }}
                      labelText="Secondary Email Address"
                      id="secondaryEmailAddress"
                      type="email"
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer justify="space-between">
                  <GridItem className={classes.customGridItem} xs={12} sm={5} md={5}>
                    <CustomInput
                      labelText="Phone Number"
                      inputProps={{
                        type: "text",
                        label: "With normal TextField",
                        value: state.phoneNumber,
                        onChange: () =>
                          dispatch({ type: "handlePhoneNumberInput", payload: "phoneNumber" }),
                        id: "phoneNumber"
                      }}
                      autoFocus
                    />
                  </GridItem>
                  <GridItem className={classes.customGridItem} xs={12} sm={5} md={5}>
                    <CustomInput
                      labelText="Work Number"
                      inputProps={{
                        placeholder: "Work Number...",
                        type: "text",
                        label: "With normal TextField",
                        value: state.workNumber,
                        onChange: () =>
                          dispatch({ type: "handlePhoneNumberInput", payload: "workNumber" }),
                        id: "workNumber"
                      }}
                      autoFocus
                    />
                  </GridItem>
                </GridContainer>
              </form>
            </CardBody>
          </Card>
        </GridItem>
        <Card className={classes.cardSignupToggle}>
          <h5 className={classes.cardTitle}>BROKER RELATIONSHIP</h5>
          <CardBody>
            <div className={classes.rowContainer} >
              <FormControlLabel
                control={
                  <Switch
                    checked={state.clientPaysBrokerDemand}
                    onChange={dispatch({ type: "handleBinaryToggle" })}
                    value={state.clientPaysBrokerDemand}
                    color="primary"
                  />
                }
                labelPlacement="start"
                label={state.clientPaysBrokerDemand ? "YES" : "NO"}
              />


              <h5 className={classes.cardTitle}>BROKER RELATIONSHIP</h5>
              <FormControlLabel
                control={
                  <Switch
                    checked={state.lenderPaysRebates}
                    onChange={dispatch({ type: "handleBinaryToggle" })}
                    value={state.lenderPaysRebates}
                    color="primary"
                  />
                }
                labelPlacement="start"
                label={state.lenderPaysRebates ? "YES" : "NO"}
              />


              <h5 className={classes.cardTitle}>Lender RELATIONSHIP</h5>
              <FormControlLabel
                control={
                  <Switch
                    checked={state.brokerPaidThroughEscrow}
                    onChange={dispatch({ type: "handleBinaryToggle" })}
                    value={state.brokerPaidThroughEscrow}
                    color="primary"
                  />
                }
                labelPlacement="start"
                label={state.brokerPaidThroughEscrow ? "YES" : "NO"}
              />
              </div>
          </CardBody>
        </Card>
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
                      labelText="Name of Company"
                      id="nameOfCompany"
                    />
                  </GridItem>
                  <GridItem
                    className={classes.customFormControlClasses}
                    xs={12}
                    sm={6}
                    md={5}
                    lg={5}
                  >
                    <FormControl style={{ minWidth: 160 }}>
                      <InputLabel id="demo-mutiple-checkbox-label">Type of Lender</InputLabel>
                      <Select
                        multiple
                        value={multipleSelect}
                        onChange={handleMultiple}
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
                        {lenderSelect.map((lenderType, index) => {
                          return (
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value={index + 1}
                              key={"lenderSelect" + index.toString()}
                            >
                              {lenderType}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={5} md={5}>
                    <InputLabel id="companyNumber">Company Phone Number</InputLabel>
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses
                      }}
                      inputProps={{
                        value: values.companyPhoneNumber,
                        onChange: handleChange("companyPhoneNumber"),
                        id: "formatted-text-mask-input",
                        inputComponent: MaskedNumberInput
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={5} md={5}>
                    <InputLabel id="fax">Fax</InputLabel>
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses
                      }}
                      inputProps={{
                        value: values.fax,
                        onChange: handleChange("fax"),
                        id: "formatted-text-mask-input",
                        inputComponent: MaskedNumberInput
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer className={classes.customContainer}>
                  <GridItem xs={12} sm={5} md={5}>
                    <CustomInput
                      formControlProps={{
                        className: classes.customFormControlClasses
                      }}
                      labelText="Company Street Address"
                      id="companyStreetAddress"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={5} md={5}>
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses
                      }}
                      labelText="City"
                      id="city"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={5} md={5}>
                    <FormControl style={{ minWidth: 120 }}>
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
                              key={"listOfStates" + index.toString()}
                            >
                              {stateName}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={5} md={5}>
                    <FormControl style={{ minWidth: 10 }}>
                      <CustomInput
                        formControlProps={{
                          className: classes.customFormControlClasses
                        }}
                        labelText="zip"
                        id="zip"
                      />
                    </FormControl>
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
                  <GridItem xs={12} sm={5} md={5}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows="8"
                      fullWidth={true}
                      defaultValue="Default Value"
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
                  </GridItem>
                </GridContainer>
                <div className={classes.rowContainer}>
                  <CustomInput
                    labelText="Source Name"
                    id="sourceName"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.customFormControlClasses
                    }}
                  />
                  <CustomInput
                    labelText="Source Number"
                    id="sourcePhone"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.customFormControlClasses
                    }}
                  />
                  <CustomInput
                    labelText="Source Email"
                    id="sourceEmail"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.customFormControlClasses
                    }}
                  />
                </div>
              </form>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default MultiInputForm;
