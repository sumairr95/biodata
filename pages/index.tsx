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

const ComposedTextField: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    occupation: '',
    age: 0,
    gender: 'female',
  });

  const [bioArray, setBioArray] = React.useState<Object[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({ ...prevData, gender: event.target.value }));
  };

  const handleSave = () => {
    // Perform save operation on formData
    bioArray.push(formData);
    setFormData({
      name: '',
      occupation: '',
      age: 0,
      gender: 'female',
    });
    console.log(bioArray);
  };

  const handleEdit = (index: number) => {
    // Retrieve the formData object from the bioArray using the index
    const formDataToEdit = bioArray[index] as FormData;

    // Update the formData state with the values from the selected card
    setFormData(formDataToEdit);

    // Remove the selected card from the bioArray
    const updatedBioArray = [...bioArray];
    updatedBioArray.splice(index, 1);
    setBioArray(updatedBioArray);
  };

  const handleRemove = (index: number) => {
    // Remove the selected card from the bioArray
    const updatedBioArray = [...bioArray];
    updatedBioArray.splice(index, 1);
    setBioArray(updatedBioArray);
  };


  const GetCards = () => {
    return (
      <div>
        {bioArray.map((item) => (
          <Card sx={{ minWidth: 275 }} key={bioArray.indexOf(item)}>
            <CardContent >
              <Typography variant='h6' gutterBottom>
                {(item as FormData).name}
              </Typography>
              <Typography variant='h6' gutterBottom>
                {(item as FormData).occupation}
              </Typography>
              <Typography variant='h6' gutterBottom>
                {(item as FormData).age}
              </Typography>
              <Typography variant='h6' gutterBottom>
                {(item as FormData).gender}
              </Typography>
            </CardContent>
            <CardActions>
              <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled elevation buttons"
              >
                <Button onClick={() => handleEdit(bioArray.indexOf(item))}>Edit</Button>
                <Button onClick={() => handleRemove(bioArray.indexOf(item))}>Remove</Button>
              </ButtonGroup>
            </CardActions>
          </Card>
        ))
        }
      </div >
    );

  }


  return (
    <Box sx={{ marginTop: '20px', margin: '20px' }}>
      <Grid container spacing={12}>
        <Grid item xs={4}>
          <Stack spacing={6}>
            <TextField
              required
              id="outlined-required"
              label="Name"
              defaultValue="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <TextField
              required
              id="outlined-required"
              label="Occupation"
              defaultValue="occupation"
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
                defaultValue="female"
                name="gender"
                value={formData.gender}
                onChange={handleGenderChange}

              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" disabled />
              </RadioGroup>
            </FormControl>
            <Button variant="contained" endIcon={<SaveAltOutlinedIcon />} onClick={handleSave}>
              Save
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <GetCards />
        </Grid>
      </Grid>
    </Box >
  );
};

export default ComposedTextField;
