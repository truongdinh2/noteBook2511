


import { Button, FormControl, FormGroup, InputLabel, MenuItem, Modal, Select, TextareaAutosize, TextField } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
// import DateFnsUtils from '@date-io/date-fns';

function AddFile(props) {
  const [isOpenForm, setIsOpenForm] = useState(false)

  return (
    <>
      <Button variant="contained" color="secondary"
        onClick={() => setIsOpenForm(!isOpenForm)}>Add files</Button>
      <form >
        <Modal
          open={isOpenForm}
          onClose={setIsOpenForm(!isOpenForm)}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <Button variant="contained" color="secondary"
          onClick={() => setIsOpenForm(!isOpenForm)}>X</Button>
          <TextField
            label="Author"
            variant="outlined"
            id="mui-theme-provider-outlined-input"
          />
          <TextField
            label="Work"
            variant="outlined"
            id="mui-theme-provider-outlined-input"
          />
          <FormGroup>
            <label >Date</label>
            <input type="date" />
          </FormGroup>
          <FormControl >
            <InputLabel id="demo-simple-select-helper-label" >category</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
            // onChange={handleChange}
            >
              <MenuItem value="action and adventure">action and adventure</MenuItem>
              <MenuItem value="classic">classic</MenuItem>
              <MenuItem value="comic book">comic book</MenuItem>
              <MenuItem value="khac">khac</MenuItem>
              {/* <MenuItem value="">Ten</MenuItem> */}
            </Select>
          </FormControl>
          <TextareaAutosize
            rows={8}
            cols={8}
            label="content"
            aria-label="maximum height"
            placeholder="contents"
          />
        </Modal>


        <Button variant="contained" color="secondary"
          onClick={() => setIsOpenForm(!isOpenForm)}>Add files</Button>
        {/* {isOpenForm ? <FormControl>
          
          <FormGroup>

          </FormGroup>
        </FormControl> : ''} */}
      </form>
    </>
  );
}

export default AddFile;