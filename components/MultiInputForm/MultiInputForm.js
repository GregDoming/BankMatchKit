import React, { useContext, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ListItemText from "@material-ui/core/ListItemText";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CardHeader from "@material-ui/core/CardHeader";
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
// import Select from "@material-ui/core/Select";
import makeAnimated from "react-select/animated";

import MaskedNumberInput from "components/MaskedNumberInput/MaskedNumberInput.js";
import { FormDispatchContext, FormStateContext } from "pages/authpagination.js";
import MultiLenderSelect from "components/MultiSelect/MultiLenderSelect.js";
import SingleStateSelect from "components/SingleSelect/SingleStateSelect.js";

import multiInputFormStyle from "assets/jss/nextjs-material-kit-pro/pages/multiInputFormStyle.js";

const useStyles = makeStyles(multiInputFormStyle);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const MultiInputForm = props => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    checkedClientPaysBroker: true,
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
        <GridItem xs={12} sm={5} md={10}>
          <Card className={classes.cardCompanySignupToggle}>
            <CardBody>
              <GridContainer className={classes.customContainer}>
                <div className={classes.rowContainer}>
                  <h5>Client Pays Broker Demand</h5>
                  {/* <FormControlLabel
                    control={
                      <Switch
                        // classes={this.props.classes}
                        checked={checkedClientPaysBroker}
                        onChange={handleChange("checkedClientPaysBroker")}
                        value={checkedClientPaysBroker}
                        color="primary"
                      />
                    }
                    labelPlacement="start"
                    label={values.checkedClientPaysBroker ? "On" : "Off"}
                  /> */}
                  <h5>Lender Pays Rebates to Broker</h5>
                  <FormControlLabel
                    control={
                      <Switch
                        onChange={() =>
                          dispatch({ type: "handleBinaryToggle", payload: "lenderPaysRebates" })
                        }
                        value={state.lenderPaysRebates}
                        color="primary"
                        id="lenderPaysRebates"
                      />
                    }
                    labelPlacement="start"
                    // label={state.lenderPaysRebates ? "YES" : "NO"}
                  />
                  <h5>Broker Paid Through Escrow</h5>
                  <FormControlLabel
                    control={
                      <Switch
                        onChange={() =>
                          dispatch({
                            type: "handleBinaryToggle",
                            payload: "brokerPaidThroughEscrow"
                          })
                        }
                        value={state.brokerPaidThroughEscrow}
                        color="primary"
                        id="brokerPaidThroughEscrow"
                      />
                    }
                    labelPlacement="start"
                    label={state.brokerPaidThroughEscrow ? "YES" : "NO"}
                  />
                </div>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={10} md={10}>
          <Card className={classes.cardCompanySelect}>
            <h4 className={classes.cardTitle}>YOUR COMPANY INFO</h4>
            <div className={classes.rowContainerSelect}>
              <GridItem className={classes.gridSelect}>
                State
                <SingleStateSelect />
              </GridItem>
              <div className={classes.spacerDiv}/>
              <GridItem className={classes.gridSelect}>
              Type Of Lender
                <MultiLenderSelect />
              </GridItem>
            </div>
            <CardHeader></CardHeader>
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
                        value: state.nameOfCompany,
                        onChange: () => dispatch({ type: "handleFormInput" }),
                        id: "nameOfCompany"
                      }}
                      labelText="Name of Company"
                    />
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
