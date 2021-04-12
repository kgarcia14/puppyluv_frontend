import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Styled from 'styled-components';

const Button = Styled.button`
  background-color: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  border-radius: 5px;
  padding: 5px 50px;
`;

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    color: '#333',
    border: '2px solid #fff',
    borderRadius: '10px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function FilterTransitionsModal({fUser, open, setOpen}) {
  const classes = useStyles();
  const { user } = useAuth0();
  
  const handleClose = () => {
    setOpen(false);
  };


   //favorites
   const _handleSubmitFavorites = async (e) => {
    e.preventDefault();
    const apiUrl = 'http://127.0.0.1:3333/ft/add';
    const submitResponse = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: user.sub, other_nicknames: fUser.user_nickname })
    }).then((response) => response);
    console.log("FAVORITES 123 IS ADDING WOOHOO: ", submitResponse)

    if (submitResponse.status === 200) {
        console.log("submit response is 200")
        setOpen(false)
    }
  }
  //

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Would you like to add {fUser.first_name} {fUser.last_name} to your favorites?</h2>
            <form onSubmit={_handleSubmitFavorites}>
                <Button
                    type="submit">Yes</Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
