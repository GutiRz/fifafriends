import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";

import { teams } from "./app-layout.mock";
import {NavBarApp} from './nav-bar-app.component';
import { NavBarWithRouter, SearchBox } from "common";
import { makeStyles, fade, Theme } from "@material-ui/core/styles";
import { RouteComponentProps, withRouter } from "react-router";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: "2%",
    display: "flex",
    alignItems: "center",
  },
  containerColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  containerRow: {
    display: 'flex',
    alignItems: 'center',

  },
  logo: {
    width: "10%",
    height: "150px"
  },
  logoTeam: {
    width: "1.60%",
    height: "1,6%",
    margin: "1.6%"
  },
  navBar: {
    backgroundColor: "#37003C",
    color: "white"
  },
  search: {
    borderRadius: theme.shape.borderRadius,
    marginLeft: '0.5em',
    backgroundColor: fade("#37003C", 0.15),
    "&:hover": {
      backgroundColor: fade("#37003C", 0.25)
    }
  },
}));

interface Props extends RouteComponentProps{
  subTabs?: string[];
  tabActive: string;
  onTabChange: (newValue:string) => void;
}

const AppLayoutInner: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles({});
  
  const {children, tabActive, onTabChange, history, subTabs} = props;

  const handleTabchange = (e, newValue) => {
    onTabChange(newValue);
    history.push(newValue);
  }

  return (
    <>
    <header className={classes.root}>
      <Avatar
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrU20oCTbIGmLH8Kla6qK3IxKYdTUHWllNwgfrKRwRjqZU_dhf"
        className={classes.logo}
      />
      <div className={classes.containerColumn}>
        <div className={classes.root}>
          {teams.map(team => (
            <img key={team.name} src={team.img} alt={team.name} className={classes.logoTeam} />
          ))}
          <div className={classes.containerRow}>
            <Typography variant="subtitle2">EN DIRECTO</Typography>
            <SearchBox className={classes.search} />
          </div>
        </div>
        <NavBarApp className={classes.navBar} tabValue={tabActive} onTabChange={handleTabchange}/> 
        {subTabs && <NavBarWithRouter tabs={subTabs}/> }
        
      </div>      
    </header>
    {children}  
    </>  
  );
};

export const AppLayout = withRouter(AppLayoutInner);