import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { store } from '../App';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


const SelectTheme = () => {
  const classes = useStyles();
  const {  theme, setTheme } =useContext(store)

  const handleChangeTheme = (event) => {
    setTheme(event.target.value);
  };

  return (
    <>
           <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Theme</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={theme}
                      onChange={handleChangeTheme}
                    >
                      <MenuItem value='material' >material</MenuItem>
                      <MenuItem value='3024-day' >3024-day</MenuItem>
                      <MenuItem value='3024-night' >3024-night</MenuItem>
                      <MenuItem value='abcdef' >abcdef</MenuItem>
                      <MenuItem value='ambiance-mobile' >ambiance-mobile</MenuItem>
                      <MenuItem value='ambiance' >ambiance</MenuItem>
                      <MenuItem value='ayu-dark' >ayu-dark</MenuItem>
                      <MenuItem value='ayu-mirage' >ayu-mirage</MenuItem>
                      <MenuItem value='base16-dark' >base16-dark</MenuItem>
                      <MenuItem value='base16-light' >base16-light</MenuItem>
                      <MenuItem value='bespin' >bespin</MenuItem>
                      <MenuItem value='blackboard' >blackboard</MenuItem>
                      <MenuItem value='cobalt' >cobalt</MenuItem>
                      <MenuItem value='colorforth' >colorforth</MenuItem>
                      <MenuItem value='dracula'  >Dracula</MenuItem>
                      <MenuItem value='darcula'  >darcula</MenuItem>
                      <MenuItem value='eclipse' >eclipse</MenuItem>
                      <MenuItem value='elegant' >elegant</MenuItem>
                      <MenuItem value='hopscotch' >hopscotch</MenuItem>
                      <MenuItem value='icecoder' >icecoder</MenuItem>
                      <MenuItem value='idea' >idea</MenuItem>
                      <MenuItem value='lesser-dark' >lesser-dark</MenuItem>
                      <MenuItem value='liquibyte' >liquibyte</MenuItem>
                      <MenuItem value='mbo' >mbo</MenuItem>
                      <MenuItem value='material-ocean' >material-ocean</MenuItem>
                      <MenuItem value='neat' >neat</MenuItem>
                      <MenuItem value='neo' >neo</MenuItem>
                      <MenuItem value='night' >night</MenuItem>
                      <MenuItem value='oceanic-next' >oceanic-next</MenuItem>
                      <MenuItem value='paraiso-dark' >paraiso-dark</MenuItem>
                      <MenuItem value='railscasts' >railscasts</MenuItem>
                      <MenuItem value='rubyblue' >rubyblue</MenuItem>
                      <MenuItem value='seti' >seti</MenuItem>
                      <MenuItem value='shadowfox' >shadowfox</MenuItem>
                      <MenuItem value='ssms' >ssms</MenuItem>
                      <MenuItem value='the-matrix' >the-matrix</MenuItem>
                      <MenuItem value='twilight' >twilight</MenuItem>
                      <MenuItem value='vibrant-ink' >vibrant-ink</MenuItem>
                      <MenuItem value='xq-dark' >xq-dark</MenuItem>
                      <MenuItem value='xq-light' >xq-light</MenuItem>
                      <MenuItem value='yeti' >yeti</MenuItem>
                      <MenuItem value='yonce' >yonce</MenuItem>
                      <MenuItem value='zenburn' >zenburn</MenuItem>
                    </Select>
                </FormControl>
    </>
  )
}

export default SelectTheme