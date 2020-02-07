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

import SingleStateSelect from "components/SingleSelect/SingleStateSelect.js";
import SingleLenderSelect from "components/SingleSelect/SingleLenderSelect.js";
import LenderSpecialties from "components/LenderSpecialties/LenderSpecialties.js";

import multiInputFormStyle from "assets/jss/nextjs-material-kit-pro/pages/multiInputFormStyle.js";
import { mergeClasses } from "@material-ui/styles";

const useStyles = makeStyles(multiInputFormStyle);

const MultiInputForm = props => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const { state, dispatch } = props;

  const { clientPaysBrokerDemand, lenderPaysRebates, brokerPaidThroughEscrow } = state;

  const toggleChecked = async () => {
    event.preventDefault();
    setChecked(prev => !prev);
    dispatch({ type: "handleBinaryToggle", payload: checked });
  };

  return (
    <GridContainer className={classes.container}>
      <GridItem className={classes.gridItem} xs={12} sm={10} md={12}>
        <Card className={classes.cardSignup}>
          <h5 className={classes.cardTitle}>ABOUT YOU</h5>
          <CardBody>
            <form className={classes.customForm}>
              <GridContainer className={classes.customContainer}>
                <GridItem className={classes.customGridItem} xs={12} sm={10} md={12}>
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
                <GridItem className={classes.customGridItem} xs={12} sm={5} md={12}>
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
                      value: state.email,
                      onChange: () => dispatch({ type: "handleFormInput" }),
                      id: "secondaryEmailAddress",
                      disabled: true,
                    }}
                    labelText="Primary Email Address"
                    id="primaryEmailAddress"
                    type="email"
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
              <GridContainer className={classes.justify} >
                <GridItem className={classes.customGridItem} xs={12} sm={5} md={5}>
                  <CustomInput
                    labelText="Mobile Number"
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
      <GridItem className={classes.gridItem} xs={12} sm={10} md={12}>
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
      <GridItem className={classes.gridItem} xs={12} sm={10} md={12}>
        <Card className={classes.cardCompanySelect}>
          <h4 className={classes.cardTitle}>YOUR COMPANY INFO</h4>
          <div className={classes.rowContainerSelect}>
            <GridItem className={classes.gridSelect}>
              State
              <SingleStateSelect dispatch={dispatch} state={state} />
            </GridItem>
            <div className={classes.spacerDiv} />
            <GridItem className={classes.gridSelect} style={{ overFlow: "visible" }}>
              Type Of Lender
              <SingleLenderSelect state={state} dispatch={dispatch} />
            </GridItem>
          </div>
          <CardHeader></CardHeader>
          <CardBody>
            <form className={classes.customForm}>
              <GridContainer justify="center" className={classes.customContainer}>
                <GridItem xs={12} sm={5} md={5}>
                  <CustomInput
                    labelText={"Company Street Address"}
                    formControlProps={{
                      fullWidth: true,
                      className: classes.customFormControlClasses
                    }}
                    inputProps={{
                      value: state.companyStreetAddress,
                      onChange: () => dispatch({ type: "handleFormInput" }),
                      id: "companyStreetAddress"
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
              </GridContainer>
              <GridContainer className={classes.customContainer}>
                <GridItem xs={12} sm={5} md={5}>
                  <FormControl style={{ minWidth: 10 }}>
                    <CustomInput
                      labelText={"City"}
                      formControlProps={{
                        className: classes.customFormControlClasses
                      }}
                      inputProps={{
                        value: state.city,
                        onChange: () => dispatch({ type: "handleFormInput" }),
                        id: "city"
                      }}
                    />
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={2} md={2}>
                  <CustomInput
                    labelText={"Zip"}
                    formControlProps={{
                      className: classes.customFormControlClasses
                    }}
                    inputProps={{
                      type: "text",
                      label: "With normal TextField",
                      value: state.zip,
                      onChange: () => dispatch({ type: "handleNumberInput" }),
                      id: "zip"
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={5} md={5}>
                  <CustomInput
                    labelText="FAX"
                    inputProps={{
                      type: "text",
                      label: "With normal TextField",
                      value: state.fax,
                      onChange: () => dispatch({ type: "handleNumberInput" }),
                      id: "fax"
                    }}
                  />
                </GridItem>
              </GridContainer>
            </form>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem className={classes.gridItem} xs={12} sm={10} md={12}>
        <Card className={classes.cardSignup}>
          <h5 className={classes.cardTitle}>LENDER SPECIALTIES</h5>
          <CardBody>
            <LenderSpecialties state={state} dispatch={dispatch} dispatch={dispatch} />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem className={classes.gridItem} xs={12} sm={10} md={12}>
        <Card className={classes.cardSignup}>
          <h5 className={classes.cardTitle}>PERSONAL NOTES / AREAS OF EXCELLENCE</h5>
          <CardBody>
            <form className={classes.customForm}>
              <GridContainer className={classes.customToggleForm}>
                <GridItem xs={12} sm={10} md={10}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Notes"
                    multiline
                    rows="8"
                    fullWidth={true}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    inputProps={{
                      value: state.personalNotes,
                      onChange: () => dispatch({ type: "handleFormInput" }),
                      id: "personalNotes"
                    }}
                  />
                </GridItem>
              </GridContainer>
              <div className={classes.rowContainer}>
                <CustomInput
                  labelText="Source Name"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.customFormTwo
                  }}
                  inputProps={{
                    value: state.sourceName,
                    onChange: () => dispatch({ type: "handleFormInput" }),
                    id: "sourceName"
                  }}
                />
                <CustomInput
                  labelText="Source Phone"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.customFormTwo
                  }}
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
                    className: classes.customFormTwo
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
  );
};

export default MultiInputForm;
