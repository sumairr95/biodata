import * as React from 'react';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid'; // Grid version 1
import Stack from '@mui/material/Stack';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';

const ComposedTextField: React.FC = () => {
  return (
    <Box sx={{ marginTop: '20px', margin: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Stack spacing={6}>
            <TextField
              required
              id="outlined-required"
              label="Name"
              defaultValue="Name"
            />
            <TextField
              required
              id="outlined-required"
              label="Occupation"
              defaultValue="occupation"
            />
            <TextField
              id="outlined-number"
              label="Age"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <FormControl>
              <FormLabel id="component-outlined">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" disabled />
              </RadioGroup>
            </FormControl>
            <Fab variant="extended" color="primary" aria-label="add">
              <SaveAltOutlinedIcon sx={{ mr: 1 }} />
              Save
              <Grid item>

              </Grid>
            </Fab>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ComposedTextField;
