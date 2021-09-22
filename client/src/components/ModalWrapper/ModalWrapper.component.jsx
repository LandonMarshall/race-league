import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText,
  DialogTitle  } from '@mui/material';

const ModalWrapper = (props) => {
  const { children, title, submitFunction, buttonText } = props;
  const [open, setOpen] = useState(false);
  const handleSubmit = () => {
    setOpen(false);
    submitFunction();
  }
  return (
    <>
    <Button variant="contained" color="primary" onClick = {() => {setOpen(true)}}>{buttonText}</Button>
    <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
        <DialogContent dividers>
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          >
           {children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ModalWrapper;
