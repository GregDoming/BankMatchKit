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

import image from "assets/img/bg7.jpg";

import multiInputFormStyle from "assets/jss/nextjs-material-kit-pro/pages/multiInputFormStyle.js";

import clsx from "clsx";

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   title: {
//     fontSize: 14,
//   },
//   card: {
//     minWidth: 275,
//     width: '80%',
//     raised: true,
//     padding: theme.spacing(2),
//     margin: theme.spacing(3)
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
//   textField: {
//     marginLeft: theme.spacing(3),
//     marginRight: theme.spacing(3),
//   },
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   formControl: {
//     margin: theme.spacing(1),
//   }
// }));
const useStyles = makeStyles(multiInputFormStyle);

export default function MultiInputForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    secondaryEmailAddress: "",
    mobileNumber: "",
    workNumber: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
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
                        startAdornment: (
                          <InputAdornment position="start" className={classes.inputAdornment}>
                            <Face className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
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
                        startAdornment: (
                          <InputAdornment position="start" className={classes.inputAdornment}>
                            <Face className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
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
                        startAdornment: (
                          <InputAdornment position="start" className={classes.inputAdornment}>
                            <Face className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                        placeholder: "First Name..."
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
                        startAdornment: (
                          <InputAdornment position="start" className={classes.inputAdornment}>
                            <Face className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
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
                        startAdornment: (
                          <InputAdornment position="start" className={classes.inputAdornment}>
                            <Face className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                        placeholder: "First Name..."
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
                <GridContainer className={classes.customForm}>
                  <GridItem xs={12} sm={5} md={5}>
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses
                      }}
                      inputProps={{
                        startAdornment: (
                          <InputAdornment position="start" className={classes.inputAdornment}>
                            <Face className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                        placeholder: "First Name..."
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
                        startAdornment: (
                          <InputAdornment position="start" className={classes.inputAdornment}>
                            <Face className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                        placeholder: "First Name..."
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
                        startAdornment: (
                          <InputAdornment position="start" className={classes.inputAdornment}>
                            <Face className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                        placeholder: "First Name..."
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
                        startAdornment: (
                          <InputAdornment position="start" className={classes.inputAdornment}>
                            <Face className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                        placeholder: "First Name..."
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
                        startAdornment: (
                          <InputAdornment position="start" className={classes.inputAdornment}>
                            <Face className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                        placeholder: "First Name..."
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
                <GridContainer className={classes.customForm}>
                  <GridItem xs={12} sm={5} md={5}>
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses
                      }}
                      inputProps={{
                        startAdornment: (
                          <InputAdornment position="start" className={classes.inputAdornment}>
                            <Face className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                        placeholder: "First Name..."
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
                        startAdornment: (
                          <InputAdornment position="start" className={classes.inputAdornment}>
                            <Face className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                        placeholder: "First Name..."
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
                        startAdornment: (
                          <InputAdornment position="start" className={classes.inputAdornment}>
                            <Face className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                        placeholder: "First Name..."
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
                        startAdornment: (
                          <InputAdornment position="start" className={classes.inputAdornment}>
                            <Face className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                        placeholder: "First Name..."
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
                        startAdornment: (
                          <InputAdornment position="start" className={classes.inputAdornment}>
                            <Face className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                        placeholder: "First Name..."
                      }}
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
//   <div className={classes.root}>
//     <Paper className={classes.card}>
//     <Grid container spacing={3}>
//       <form className={classes.container} noValidate autoComplete="off">
//         <Grid item xs>
//           <TextField
//             id="filled-name"
//             label="First Name"
//             className={classes.textField}
//             value={values.name}
//             onChange={handleChange('firstName')}
//             margin="normal"
//             variant="filled"
//           />
//         </Grid>
//         <Grid item xs>
//           <TextField
//             id="filled-name"
//             label="Last Name"
//             className={classes.textField}
//             value={values.name}
//             onChange={handleChange('lastName')}
//             margin="normal"
//             variant="filled"
//           />
//         </Grid>
//         <Grid item xs>
//           <TextField
//             id="filled-name"
//             label="Secondary Email Address"
//             className={classes.textField}
//             value={values.name}
//             onChange={handleChange('secondaryEmailAddress')}
//             margin="normal"
//             variant="filled"
//           />
//         </Grid>
//     </form>
//   </Grid>
//   <Grid container spacing={3}>
//     <form className={classes.container} noValidate autoComplete="off">
//       <Grid item xs>
//         <TextField
//           id="filled-name"
//           label="Mobile Number"
//           className={classes.textField}
//           value={values.name}
//           onChange={handleChange('mobileNumber')}
//           margin="normal"
//           variant="filled"
//         />
//       </Grid>
//         <Grid item xs>
//           <TextField
//             id="filled-name"
//             label="Name"
//             className={classes.textField}
//             value={values.name}
//             onChange={handleChange('name')}
//             margin="normal"
//             variant="filled"
//           />
//         </Grid>
//       </form>
//     </Grid>
//     </Paper>
//     <Paper className={classes.card}>
//     <Grid container spacing={3}>
//       <form className={classes.container} noValidate autoComplete="off">
//         <Grid item xs>
//           <TextField
//             id="filled-name"
//             label="Name of Company"
//             className={classes.textField}
//             value={values.name}
//             onChange={handleChange('nameOfCompany')}
//             margin="normal"
//             variant="filled"
//           />
//         </Grid>
//         <Grid item xs>
//           <TextField
//             id="filled-name"
//             label="Last Name"
//             className={classes.textField}
//             value={values.name}
//             onChange={handleChange('lastName')}
//             margin="normal"
//             variant="filled"
//           />
//         </Grid>
//         <Grid item xs>
//           <TextField
//             id="filled-name"
//             label="Main Phone Line"
//             className={classes.textField}
//             value={values.name}
//             onChange={handleChange('secondaryEmailAddress')}
//             margin="normal"
//             variant="filled"
//           />
//         </Grid>
//         <Grid item xs>
//           <TextField
//             id="filled-name"
//             label="Fax"
//             className={classes.textField}
//             value={values.name}
//             onChange={handleChange('secondaryEmailAddress')}
//             margin="normal"
//             variant="filled"
//           />
//         </Grid>
//     </form>
//   </Grid>
//   <Grid container spacing={3}>
//     <form className={classes.container} noValidate autoComplete="off">
//       <Grid item xs>
//         <TextField
//           id="filled-name"
//           label="Company Street Address"
//           className={classes.textField}
//           value={values.name}
//           onChange={handleChange('mobileNumber')}
//           margin="normal"
//           variant="filled"
//         />
//       </Grid>
//         <Grid item xs>
//           <TextField
//             id="filled-name"
//             label="City"
//             className={classes.textField}
//             value={values.name}
//             onChange={handleChange('name')}
//             margin="normal"
//             variant="filled"
//           />
//         </Grid>
//         <Grid item xs>
//           <TextField
//             id="filled-name"
//             label="State"
//             className={classes.textField}
//             value={values.name}
//             onChange={handleChange('name')}
//             margin="normal"
//             variant="filled"
//           />
//         </Grid>
//         <Grid item xs>
//           <TextField
//             id="filled-name"
//             label="Zip"
//             className={classes.textField}
//             value={values.name}
//             onChange={handleChange('secondaryEmailAddress')}
//             margin="normal"
//             variant="filled"
//           />
//         </Grid>
//       </form>
//     </Grid>
//     </Paper>
//     <Paper className={classes.card}>
//     <Grid container spacing={3}>
//       <form className={classes.container} noValidate autoComplete="off">
//         <Grid item xs>
//           <TextField
//             id="filled-multiline-static"
//             label="Multiline"
//             multiline
//             rows="5"
//             className={classes.textField}
//             margin="normal"
//             variant="filled"
//             fullWidth
//             />
//         </Grid>
//       </form>
//     </Grid>
//     <Grid container spacing={3}>
//         <Grid item xs>
//           <TextField
//             id="filled-name"
//             label="Source Name"
//             className={classes.textField}
//             value={values.name}
//             onChange={handleChange('lastName')}
//             margin="normal"
//             variant="filled"
//           />
//         </Grid>
//         <Grid item xs>
//           <TextField
//             id="filled-name"
//             label="Source Phone"
//             className={classes.textField}
//             value={values.name}
//             onChange={handleChange('secondaryEmailAddress')}
//             margin="normal"
//             variant="filled"
//           />
//         </Grid>
//       <Grid item xs>
//         <TextField
//           id="filled-name"
//           label="Source Email"
//           className={classes.textField}
//           value={values.name}
//           onChange={handleChange('mobileNumber')}
//           margin="normal"
//           variant="filled"
//         />
//       </Grid>
//     </Grid>
//     </Paper>
//   </div>
// );
// };
