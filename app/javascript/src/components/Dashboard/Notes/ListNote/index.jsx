import React from "react";

import Card from "./Card";

const ListNote = ({ notes, handleSelectNote }) =>
  notes.map(note => (
    <Card
      key={note.id}
      id={note.id}
      title={note.title}
      description={note.description}
      tag={note.tag}
      notesStatus={note.status}
      created_at={note.created_at}
      handleSelectNote={handleSelectNote}
    />
  ));

export default ListNote;
