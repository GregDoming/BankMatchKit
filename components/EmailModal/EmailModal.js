import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import Assignment from "@material-ui/icons/Assignment";
import Mail from "@material-ui/icons/Mail";
import Face from "@material-ui/icons/Face";
// core components
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import style from "assets/jss/nextjs-material-kit-pro/components/emailModalStyle.js";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(style);

const EmailModal = props => {
  const [emailModal, setEmailModal] = React.useState(false);
  const classes = useStyles();
  return (
    <div>
      <Button
        type="button"
        color="success"
        className={classes.highButton}
        style={{ minHeight: "60px", fontSize: "20px" }}
        round
        onClick={() => setEmailModal(true)}
      >
        Compose Email <Assignment />
      </Button>
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
                    placeholder: "To"
                  }}
                />
                <CustomInput
                  id="emailModalSubject"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    placeholder: "Subject"
                  }}
                />
                <TextField
                  id="emailMultiline"
                  label="Multiline"
                  multiline
                  rows="6"
                  defaultValue="Default Value"
                  variant="outlined"
                />
              </CardBody>
            </form>
          </DialogContent>
          <DialogActions className={`${classes.modalFooter} ${classes.justifyContentCenter}`}>
            <Button color="primary" simple size="lg">
              Send
            </Button>
          </DialogActions>
        </Card>
      </Dialog>
    </div>
  );
};

export default EmailModal;
