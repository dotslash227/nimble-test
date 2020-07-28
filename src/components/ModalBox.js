import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  export default function ModalBox(props){
      const classes = useStyles();    
      const {candidate, application} = props;
    
      return(
        <div>            
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={true}
                onClose={props.toggle}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={true}>
                <div className={classes.paper}>
                    <h2 id="transition-modal-title">Candidate Id: {candidate.id}</h2>
                    <p id="transition-modal-description">Name : {candidate.name} | Email: {candidate.email} | Phone: {candidate.profile.phone_work}</p>
                    <h2>Application Details</h2>
                    <p>
                        Application Id: {application.id} <br />
                        Role: {application.role.title} <br />
                        Status: {application.new_status.label}
                    </p>
                </div>
                </Fade>
            </Modal>
            </div>
      )
  }