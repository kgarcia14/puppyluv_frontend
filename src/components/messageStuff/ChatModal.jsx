import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ChatForm from './ChatForm'

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

export default function ChatModal({allUser, chatOpen, setChatOpen}) {
  const classes = useStyles();
  
  const handleChatClose = () => {
    setChatOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={chatOpen}
        onClose={handleChatClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={chatOpen}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Send a message to {allUser.first_name} {allUser.last_name} </h2>
            <ChatForm allUser={allUser} chatOpen={chatOpen} setChatOpen={setChatOpen}/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
