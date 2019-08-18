import * as React from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link, RouteComponentProps, withRouter } from "react-router-dom";

interface Props extends RouteComponentProps {
  className ?:string;
  tabs: string[];
}

const NavBarWithRouterInner:React.FunctionComponent<Props> = (props) => {
  const {className, location, tabs, children} = props;
  return (
    <>
    <Tabs value={location.pathname} className={className} centered>
      {tabs.map(tab => 
        <Tab key={tab} label={tab} value={`/${tab.replace(' ','-').toLowerCase()}`} component={Link} to={`/${tab.replace(' ','-').toLowerCase()}`}/>
        )}      
    </Tabs>
    {children}
    </>
  );
};

export const NavBarWithRouter = withRouter(NavBarWithRouterInner)