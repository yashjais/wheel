import React, { useState } from "react";

import EmptyContactsListImage from "images/EmptyList";
import { Search, Settings, Plus, BurgerMenu } from "neetoicons";
import { Typography, Input, Button } from "neetoui/v2";
import { MenuBar, Header } from "neetoui/v2/layouts";

import EmptyState from "components/Common/EmptyState";

import { CONTACTS } from "./constants";
import ContactsTable from "./ContactsTable";
import CreateContact from "./CreateContact";
import DeleteAlert from "./DeleteAlert";

const Contacts = () => {
  const [state, setState] = useState({
    contacts: CONTACTS,
    isMenuOpen: true,
    isSearchCollapsed: true,
    showNewContactPane: false,
    selectedContactId: null,
    showDeleteAlert: false
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

  const handleSelectContactId = contactId => {
    setState(state => ({
      ...state,
      selectedContactId: contactId,
      showDeleteAlert: true
    }));
  };

  const confirmDeleteContact = id => {
    setState(state => ({
      ...state,
      contacts: state.contacts.filter(contact => contact.id !== id),
      showDeleteAlert: false,
      selectedContactId: null
    }));
  };

  const renderContactsMenubar = () => (
    <MenuBar showMenu={state.isMenuOpen} title={"Contacts"}>
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
    <div className="w-full px-6">
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
        menuBarToggle={() => (
          <BurgerMenu
            onClick={setState(state => ({
              ...state,
              isMenuOpen: !state.isMenuOpen
            }))}
          />
        )}
        title="All Contacts"
      />
      {state.contacts.length !== 0 ? (
        <ContactsTable
          contacts={state.contacts}
          handleSelectContactId={handleSelectContactId}
        />
      ) : (
        <EmptyState
          image={EmptyContactsListImage}
          title="Looks like you don't have any contacts!"
          subtitle="Add your contacts to send customized emails to them."
          primaryAction={() =>
            setState(state => ({
              ...state,
              showNewContactPane: true
            }))
          }
          primaryActionLabel="Add Contact"
        />
      )}
    </div>
  );

  return (
    <div className="flex w-full">
      {renderContactsMenubar()}
      {renderContactsSection()}
      {state.showNewContactPane && (
        <CreateContact
          showPane={state.showNewContactPane}
          onClose={onClose}
          handleAddNewContact={handleAddNewContact}
        />
      )}
      {state.showDeleteAlert && (
        <DeleteAlert
          showDeleteAlert={state.showDeleteAlert}
          onClose={onClose}
          selectedContactId={state.selectedContactId}
          confirmDeleteContact={confirmDeleteContact}
        />
      )}
    </div>
  );
};

export default Contacts;
