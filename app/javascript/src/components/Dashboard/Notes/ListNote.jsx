import React from "react";

import CardNote from "./CardNote";

const ListNote = ({ notes, handleDeleteNote }) =>
  notes.map(note => (
    <CardNote
      key={note.id}
      id={note.id}
      title={note.title}
      description={note.description}
      tag={note.tag}
      notesStatus={note.status}
      created_at={note.created_at}
      handleDeleteNote={handleDeleteNote}
    />
  ));

export default ListNote;
