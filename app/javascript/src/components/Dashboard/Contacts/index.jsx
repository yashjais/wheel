import React, { useState } from "react";

import { Search, Settings, Plus, BurgerMenu } from "neetoicons";
import { Typography, Input, Button } from "neetoui/v2";
import { MenuBar, Header } from "neetoui/v2/layouts";

import ContactsTable from "./ContactsTable";
import ContactPane from "./ContactPane";
import { CONTACTS } from "./constants";

const Contacts = () => {
  const [state, setState] = useState({
    contacts: CONTACTS,
    isSearchCollapsed: true,
    showNewContactPane: false
  });

  const handleAddNewContact = contact => {
    const newContact = {
      id: state.contacts.length + 1,
      name: `${contact.firstName.trim()} ${contact.lastName.trim()}`,
      role: contact.role[0].label,
      mail: contact.email,
      created_at: "Feb, 5, 2021",
      url: "https://randomuser.me/api/portraits/women/90.jpg"
    };
    setState(state => ({
      ...state,
      contacts: [...state.contacts, newContact],
      showNewContactPane: false
    }));
  };

  const onClose = () => {
    setState(state => ({ ...state, showNewContactPane: false }));
  };

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

  const renderContactsSection = () => (
    <div className="w-full px-5">
      <Header
        actionBlock={[
          <Input
            key="input_header"
            prefix={<Search size={16} />}
            contentSize="35"
            placeholder="Search Name, Email, Phone Number, Etc."
          />,
          <Button
            key="button_header"
            className="ml-3"
            onClick={() =>
              setState(state => ({ ...state, showNewContactPane: true }))
            }
            style="primary"
            label="Add Contact"
            iconPosition="right"
            size="large"
            icon={() => <Plus size={18} className="ml-3" />}
          />
        ]}
        menuBarToggle={() => <BurgerMenu />}
        title="All Contacts"
      />
      <ContactsTable contacts={state.contacts} />
    </div>
  );

  return (
    <div className="flex w-full">
      {renderContactsMenubar()}
      {renderContactsSection()}
      {state.showNewContactPane && (
        <ContactPane
          showPane={state.showNewContactPane}
          onClose={onClose}
          handleAddNewContact={handleAddNewContact}
        />
      )}
    </div>
  );
};

export default Contacts;
