import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
// core components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Close from "@material-ui/icons/Close";
import Email from "@material-ui/icons/Email";

import style from "assets/jss/nextjs-material-kit-pro/components/emailModalStyle.js";

import { sendEmailObj, setSolicitationDate } from "lib/api";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(style);

const EmailButton = props => {
  const { index, id, emailArr, subjectText, bodyText } = props;
  const [emailModal, setEmailModal] = React.useState(false);

  const sendEmail = (event, arr) => {
    event.preventDefault();
    const sendObj = {};

    sendObj["contactList"] = arr;
    sendObj["subjectText"] = subjectText;
    sendObj["bodyText"] = bodyText;

    setSolicitationDate(arr)
    sendEmailObj(sendObj);
    setEmailModal(false);
  };

  const classes = useStyles();


  return (
    <>
      <Tooltip
        id={"EmailButtonTop" + index}
        title="Send Single Email"
        placement="top"
        key={"EmailButtonTop" + index}
      >
        <Button
          id={id}
          simple
          index={index}
          value={index}
          justIcon
          size="sm"
          color="primary"
          key={"EmailTop" + index}
          onClick={() => setEmailModal(true)}
        >
          <Email />
        </Button>
      </Tooltip>
      <Dialog
        classes={{
          root: classes.modalRoot,
          paper: classes.modal + " " + classes.modalEmail
        }}
        open={emailModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setEmailModal(false)}
        aria-labelledby="login-modal-slide-title"
        aria-describedby="login-modal-slide-description"
      >
        <Card plain className={classes.modalEmail}>
          <DialogTitle
            id="login-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
          >
            <CardHeader
              plain
              color="primary"
              className={`${classes.textCenter} ${classes.cardLoginHeader}`}
            >
              <Button
                simple
                className={classes.modalCloseButton}
                key="close"
                aria-label="Close"
                onClick={() => setEmailModal(false)}
              >
                {" "}
                <Close className={classes.modalClose} />
              </Button>
              <h5 className={classes.cardTitleWhite}>Email</h5>
            </CardHeader>
          </DialogTitle>
          <DialogContent id="login-modal-slide-description" className={classes.modalEmailBody}>
            <form>
              <CardBody className={classes.cardEmailBody}>
                <CustomInput
                  id="emailModalTo"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    placeholder: "To",
                    value: emailArr
                  }}
                />
                <CustomInput
                  id="emailModalSubject"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    placeholder: "Subject",
                    value: subjectText
                  }}
                />
                <TextField
                  id="emailMultiline"
                  label="Multiline"
                  multiline
                  rows="6"
                  defaultValue={bodyText}
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </CardBody>
            </form>
          </DialogContent>
          <DialogActions className={`${classes.modalFooter} ${classes.justifyContentCenter}`}>
            <Button
              key="emailButton"
              type="button"
              color="success"
              key={"modalEmailButton"}
              value={index}
              className={classes.highButton}
              onClick={event => sendEmail(event, emailArr)}
            >
              Send
            </Button>
          </DialogActions>
        </Card>
      </Dialog>
    </>
  );
};

export default EmailButton;
