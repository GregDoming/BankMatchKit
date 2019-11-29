import React, { useContext, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CardHeader from "@material-ui/core/CardHeader";
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
  const [checked, setChecked] = React.useState(false);
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
  const { clientPaysBrokerDemand, lenderPaysRebates, brokerPaidThroughEscrow } = state;

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value.trim() });
  };
  const toggleChecked = async () => {
    event.preventDefault();
    setChecked(prev => !prev);
    dispatch({ type: "handleBinaryToggle", payload: checked });
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
                        onChange: () => dispatch({ type: "handleFormInput" }),
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
                        onChange: () => dispatch({ type: "handleNumberInput" }),
                        id: "phoneNumber"
                      }}
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
                        onChange: () => dispatch({ type: "handleNumberInput" }),
                        id: "workNumber"
                      }}
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
                  <FormControlLabel
                    label={"Client Pays Broker Demand"}
                    control={
                      <Switch
                        onClick={toggleChecked}
                        checked={clientPaysBrokerDemand}
                        color="primary"
                        id="clientPaysBrokerDemand"
                      />
                    }
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    label={"Lender Pays Rebates"}
                    control={
                      <Switch
                        onClick={toggleChecked}
                        checked={lenderPaysRebates}
                        color="primary"
                        id="lenderPaysRebates"
                      />
                    }
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    label={"Broker Paid Through Escrow"}
                    control={
                      <Switch
                        onChange={toggleChecked}
                        checked={brokerPaidThroughEscrow}
                        color="primary"
                        id="brokerPaidThroughEscrow"
                      />
                    }
                    labelPlacement="start"
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
              <div className={classes.spacerDiv} />
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
                    <CustomInput
                      labelText="Company Phone Number"
                      inputProps={{
                        type: "text",
                        label: "With normal TextField",
                        value: state.companyPhoneNumber,
                        onChange: () => dispatch({ type: "handleNumberInput" }),
                        id: "companyPhoneNumber"
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={5} md={5}>
                    <CustomInput
                      labelText="fax"
                      inputProps={{
                        type: "text",
                        label: "With normal TextField",
                        value: state.companyPhoneNumber,
                        onChange: () => dispatch({ type: "handleNumberInput" }),
                        id: "fax"
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
                    formControlProps={{
                      fullWidth: true,
                      className: classes.customFormControlClasses
                    }}
                    inputProps={{
                      value: state.sourceName,
                      onChange: () => dispatch({ type: "handleFormInput" }),
                      id: "sourceName"
                    }}
                  />
                  <CustomInput
                    labelText="Source Phone"
                    inputProps={{
                      type: "text",
                      label: "With normal TextField",
                      value: state.sourcePhone,
                      onChange: () => dispatch({ type: "handleNumberInput" }),
                      id: "sourcePhone"
                    }}
                  />
                  <CustomInput
                    labelText="Source Email"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.customFormControlClasses
                    }}
                    inputProps={{
                      value: state.sourceEmail,
                      onChange: () => dispatch({ type: "handleFormInput" }),
                      id: "sourceEmail"
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
