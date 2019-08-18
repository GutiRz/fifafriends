import * as React from 'react';
import { AppLayout} from './app.layout';
import { NavContext } from 'core';

interface Props {
  subMenuTabs ?: string[];
}

export const AppLayoutContainer: React.FunctionComponent<Props> = (props) => {
  const navContext = React.useContext(NavContext);
  const {children, subMenuTabs} = props;
  return(
    <AppLayout tabActive={navContext.navSelected} onTabChange={navContext.setNavSelected} subTabs={subMenuTabs}>
      {children}
    </AppLayout>
  );
}