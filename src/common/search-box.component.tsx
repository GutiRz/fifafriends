import * as React from 'react';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

interface Props {
  className ?: string;
}

export const SearchBox = (props: Props) => {
  const {className} = props;
  return(
    <div className={className}>
      <SearchIcon/>
      <InputBase 
        placeholder="Buscar..."  
      />
    </div>
  );
}