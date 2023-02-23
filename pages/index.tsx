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


export default function ComposedTextField() {
  return (
    <Grid>
      <Grid item md={6}>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >

          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple">Name</InputLabel>
            <Input id="component-simple" defaultValue="Composed TextField" />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="component-helper">Occupation</InputLabel>
            <Input
              id="component-helper"
              defaultValue="Composed TextField"
              aria-describedby="component-helper-text"
            />
            <FormHelperText id="component-helper-text">

            </FormHelperText>
          </FormControl>

          <FormControl >
            <InputLabel htmlFor="component-outlined">age</InputLabel>
            <OutlinedInput
              type="number"
              id="component-outlined"
              defaultValue="Composed TextField"
              label="Name"
            />
          </FormControl>
          <FormControl>
            <FormLabel id="component-outlined">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </Box>
      </Grid>
    </Grid>
  );
}