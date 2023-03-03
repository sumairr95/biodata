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
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';

type FormData = {
  name: string;
  occupation: string;
  age: number;
  gender: string;
};

export default function ComposedTextField() {
  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    occupation: '',
    age: 0,
    gender: 'female',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({ ...prevData, gender: event.target.value }));
  };

  const handleSave = () => {
    // Perform save operation on formData
    console.log('Save button clicked');
  };

  const handleEdit = () => {
    // Perform edit operation on formData
    console.log('Edit button clicked');
  };

  const handleRemove = () => {
    // Perform remove operation on formData
    console.log('Remove button clicked');
  };

  return (
    <Box sx={{ marginTop: '20px', margin: '20px' }}>
      <Grid container spacing={12}>
        <Grid item xs={6}>
          <Stack spacing={6}>
            <TextField
              required
              id="outlined-required"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <TextField
              required
              id="outlined-required"
              label="Occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleInputChange}
            />
            <TextField
              id="outlined-number"
              label="Age"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />

            <FormControl>
              <FormLabel id="component-outlined">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={formData.gender}
                onChange={handleRadioChange}
                name="gender">
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" disabled />
              </RadioGroup>
              <Button variant="contained" size="large">
                Save
              </Button>
            </FormControl>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

