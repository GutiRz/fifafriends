import * as React from "react";
import { AppLayout, AppLayoutContainer } from "layout";
import { NavBarWithRouter } from "common";
export const SuperCopaLigaScene = () => {
  return (
    <AppLayoutContainer subMenuTabs={['primera division', 'segunda division', 'supercopa liga']}>
      <h2>Hello from Supercopa Liga Scene!</h2>
    </AppLayoutContainer>
  );
};
