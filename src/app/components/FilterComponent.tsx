"use client";

import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {Typography } from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { makeStyles } from "@mui/styles";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      // maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 140,
    },
  },
};

const names = [
    'Course Title',
    'Grade',
    'Course Added',
  ];

  
  function getStyles(name: string, personName: readonly string[],) {
    return {
      fontWeight: 500,

    };
  }

const useStyles = makeStyles({
  formControl:{
    width:"auto",
    height:"auto",
    padding:"8px 12px",
    alignItems:"center",
    borderRadius:"8px",
   border: "1px solid rgba(79, 109, 122, 0.20)",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(79, 109, 122, 0.20)",
        border: "0px",
      },
      "&:hover fieldset": {
        borderColor: "rgba(79, 109, 122, 0.20)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgba(79, 109, 122, 0.20)",
      },
    },
    "& .MuiOutlinedInput-input": {
      padding: "0px !important", 
      height: "auto",
    },
  },
  selectStyles:{
    "&.MuiSelect-select": {
      padding: "0px !important",
    },
    "&.Mui-selected": {
      backgroundColor: "#d9e7fe !important", 
      color: "#000",
      justifyContent:"space-between",
    },
    "&.MuiOutlinedInput-input":{
      padding:"0px !important",
    },
  },
  menuItemStyle:{
    padding:"8px 12px",
    "&:hover": { backgroundColor: "#d9e7fe" }
  },
  iconStyles:{
    marginLeft:"12px",
    fontSize:"16px",
    color:"#2F4362",
  },
  testStyles:{
    color:" #2F4362;",
    fontSize:"14px",
    fontWeight:500,
    lineHeight:"normal",
    
  },
});

const FilterComponent = () => {
 const theme = useTheme();
 const classes = useStyles();

  const [personName, setPersonName] = React.useState<string[]>([]);
  const [open, setOpen] = React.useState(false);
  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl className={classes.formControl} sx={{ m: 1, mt: 3,}}>
        <Select
        className={classes.selectStyles}
        sx={{
          padding: '0 !important', // Remove padding
          '& .MuiSelect-select': {
            padding: '0 !important',
          },
        }}
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          IconComponent={() => (open ? <ExpandLessIcon className={classes.iconStyles}/> : <ExpandMoreIcon className={classes.iconStyles}/>)} 
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <Typography>Filter by</Typography>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName)}
              className={classes.menuItemStyle}
              sx={{ backgroundColor: personName.includes(name) ? "#d9e7fe !important" : "white",}}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default FilterComponent
