import * as React from 'react';

export const NavContext = React.createContext({
  navSelected: '',
  setNavSelected: (value:string) => {
    console.warn(
      'Si estas leyendo esto seguramente has olvidado añadir el provider en el top de la app'
    );
  }
})

export const NavContextProvider: React.FunctionComponent = props => {
  const [navSelected, setNavSelected] = React.useState('/home');
  return(
    <NavContext.Provider value={{navSelected, setNavSelected}}>
      {props.children}
    </NavContext.Provider>
  );
}