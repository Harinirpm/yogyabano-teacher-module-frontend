"use client";
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import theme from '../theme';
import { makeStyles } from '@mui/styles';


interface SearchbarProps {
  onSearch: (searchTerm: string) => void; 
}

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.common.white,
    },
    border:"1px solid rgba(79, 109, 122, 0.20)",
    borderRadius:"8px",
    alignItems:"center",
    display:"flex",
    

  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      height:"auto",
      padding:"8px 39px",
      fontStyle:"normal",
      fontSize:"14px",
      [theme.breakpoints.up('md')]: {
        width: '356px',
      },
    },
  }));

  const useStyles = makeStyles({
    iconsStyle:{
      height:"16px",
      width:"16px",

    }
  })

  const Searchbar: React.FC<SearchbarProps> = ({ onSearch }) => {
  const classes = useStyles();
  const [input, setInput] = React.useState("");
const handleChange = (e:any) =>{
  setInput(e.target.value);
  onSearch(e.target.value);
}
  return (
    
          <Search>
            <SearchIconWrapper>
              <SearchIcon className={classes.iconsStyle} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search course title"
              value={input}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          
  )
};

export default Searchbar
