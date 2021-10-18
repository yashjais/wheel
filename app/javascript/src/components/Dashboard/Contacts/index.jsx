import React, { useState } from "react";

import { Typography, Input, Button } from "neetoui/v2";
import { MenuBar, Header } from "neetoui/v2/layouts";
import { Search, Settings, Plus, BurgerMenu } from "neetoicons";

import { constantContacts } from "data/contacts";

const Contacts = () => {
  // const [loading, setLoading] = useState(true);
  const [state, setState] = useState({
    contacts: constantContacts,
    isSearchCollapsed: true
  });

  const renderContactsMenubar = () => (
    <MenuBar showMenu={true} title={"Contacts"}>
      <MenuBar.Block label="All" count={0} active />
      <MenuBar.Block label="Archive" count={0} />
      <MenuBar.Block label="Completed" count={0} />
      <MenuBar.Block label="Phase 2" count={0} />
      <MenuBar.SubTitle
        iconProps={[
          {
            icon: () => <Search size={20} />,
            onClick: () =>
              setState(state => ({
                ...state,
                isSearchCollapsed: !state.isSearchCollapsed
              }))
          }
        ]}
      >
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          Segments
        </Typography>
      </MenuBar.SubTitle>

      <MenuBar.Search
        collapse={state.isSearchCollapsed}
        onCollapse={() =>
          setState(state => ({ ...state, isSearchCollapsed: true }))
        }
      />
      <MenuBar.SubTitle
        iconProps={[
          {
            icon: () => <Search size={20} />
          },

          {
            icon: () => <Plus size={20} />
          },
          {
            icon: () => <Settings size={20} />
          }
        ]}
      >
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          Tags
        </Typography>
      </MenuBar.SubTitle>
    </MenuBar>
  );

  return <div className="flex w-full">{renderContactsMenubar()}</div>;
};

export default Contacts;
