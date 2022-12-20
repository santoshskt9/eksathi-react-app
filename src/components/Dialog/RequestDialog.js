import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Divider, FormControl, MenuItem, Select, TextField, InputLabel } from '@mui/material';

export default function RequestDialog(props) {
  const [requirementType, setRequirementType] = React.useState('');

  const handleClose = () => {
    props.status(false);
  };

  const handleChange = (event) => {
    setRequirementType(event.target.value);
  };

  console.log(props);
  console.log(props.showDialog);
  console.log(props.status);
  // setOpen(props.showDialog);


  return (
    <Dialog
      open={props.showDialog}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{padding: '15px'}}
    >
      
      <DialogTitle id="alert-dialog-title" sx={{color: 'black'}}>
        <h4>Post Request</h4>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" sx={{width: '500px'}}>
          Post your request
        </DialogContentText>

        <FormControl fullWidth className='container'>
          <TextField placeholder='Title' label="Title"  className='mt-3'/>
          <TextField placeholder='Description' label="Description" multiline rows={3} className='mt-3'/>
        
          {/* <InputLabel id="requirement-type-label">Select Type</InputLabel> */}
          <hr/>
          <h4>Requirement Type</h4>
            <Select
              labelId="requirement-type-label"
              id="requirement-type-select"
              value={requirementType}
              label="Select Type"
              onChange={handleChange}
              
              required className='mt-3'
            >
              <MenuItem value='Easy' selected>Easy</MenuItem>
              <MenuItem value='Medium'>Medium</MenuItem>
              <MenuItem value='Hard'>Hard</MenuItem>
            </Select>

          <h6 className='mt-3'>Add Expertise</h6>
            <Select
              labelId="add-expertise-label"
              id="add-expertise-select"
              value={requirementType}
              label="Add Expertise"
              onChange={handleChange}
              
              required className='mt-2'
            >
              <MenuItem value='Select categories' selected>Select categories</MenuItem>
              <MenuItem value='Others'>Others</MenuItem>
            </Select>
        </FormControl>

      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}