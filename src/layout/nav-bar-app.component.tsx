import * as React from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

interface Props {
  className ?:string;
  tabValue :string;
  onTabChange : (event, newValue:string)=>void;
}


export const NavBarApp:React.FunctionComponent<Props> = (props) => {
  const {className, tabValue, onTabChange} = props;
  
  return (
    <>
    
    <Tabs value={tabValue} onChange={onTabChange}  className={className}>
      <Tab label="Home" value={'/home'} />
      <Tab label="Mi equipo" value={'/mi-equipo'}/>
      <Tab label="Liga" value={'/primera-division'}/>
      <Tab label="Europa" />
      <Tab label="Copa" />
      <Tab label="Mercado" />
      <Tab label="Hemeroteca" />
      <Tab label="Normas" />
      <Tab label="Mi perfil" />
    </Tabs>        
    </>
  );
};
