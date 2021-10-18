import React, { useState, useEffect } from "react";

import { Search, Settings, Plus, BurgerMenu } from "neetoicons";
import { Typography, Input, Button } from "neetoui/v2";
import { MenuBar, Header } from "neetoui/v2/layouts";

import ListNote from "./ListNote";
import DeleteAlert from "./DeleteAlert";
import NewNotePane from "./NewNotePane";
import NoteTable from "./NoteTable";

import EmptyState from "components/Common/EmptyState";

import EmptyNotesListImage from "images/EmptyNotesList";
import { constantNotes } from "../../../data/notes";

const Notes = () => {
  // const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState(constantNotes);
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

  const handleDeleteNote = id => {
    setSelectedNoteId(id);
    setShowDeleteAlert(true);
  };

  const confirmDeleteNote = id => {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
    setSelectedNoteId(null);
    setShowDeleteAlert(false);
  };

  const onClose = () => {
    setShowDeleteAlert(false);
    setSelectedNoteId(null);
  };

  const renderNotesMenubar = () => (
    // <MenuBar showMenu={true} title={<Typography style="h2">Notes</Typography>}>
    <MenuBar showMenu={true} title={"Notes"}>
      <MenuBar.Block label="All" count={200} active />
      <MenuBar.Block label="Users" count={80} />
      <MenuBar.Block label="Leads" count={60} />
      <MenuBar.Block label="Visitors" count={60} />
      <MenuBar.SubTitle
        iconProps={[
          {
            icon: () => <Search size={20} />,
            onClick: () => setIsSearchCollapsed(!isSearchCollapsed)
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
        collapse={isSearchCollapsed}
        onCollapse={() => setIsSearchCollapsed(true)}
      />
      <MenuBar.Block label="Europe" count={80} />
      <MenuBar.Block label="Middle-East" count={60} />
      <MenuBar.Block label="Asia" count={60} />

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

      <MenuBar.Search
        collapse={isSearchCollapsed}
        onCollapse={() => setIsSearchCollapsed(true)}
      />
      <MenuBar.Block label="Sales" count={80} />
      <MenuBar.Block label="Finance" count={60} />
      <MenuBar.Block label="User Experience" count={60} />
    </MenuBar>
  );

  const renderNotesSection = () => (
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
            onClick={() => setShowNewNotePane(true)}
            style="primary"
            label="Add Note"
            iconPosition="right"
            size="large"
            icon={() => <Plus size={18} className="ml-3" />}
          />
        ]}
        menuBarToggle={() => <BurgerMenu />}
        title="All Notes"
      />
      {notes.length !== 0 ? (
        notes.map((note, index) => (
          <ListNote
            key={index}
            id={note.id}
            title={note.title}
            notesStatus={note.status}
            description={note.description}
            created_at={note.created_at}
            tag={note.tag}
            handleDeleteNote={handleDeleteNote}
          />
        ))
      ) : (
        <EmptyState
          image={EmptyNotesListImage}
          title="Looks like you don't have any notes!"
          subtitle="Add your notes to send customized emails to them."
          primaryAction={() => setShowNewNotePane(true)}
          primaryActionLabel="Add Note"
        />
      )}
    </div>
  );

  return (
    <div className="flex w-full">
      {renderNotesMenubar()}
      {renderNotesSection()}
      {showDeleteAlert && (
        <DeleteAlert
          showDeleteAlert={showDeleteAlert}
          onClose={onClose}
          selectedNoteId={selectedNoteId}
          confirmDeleteNote={confirmDeleteNote}
        />
      )}
      {showNewNotePane && <NewNotePane />}
    </div>
  );
};

export default Notes;
