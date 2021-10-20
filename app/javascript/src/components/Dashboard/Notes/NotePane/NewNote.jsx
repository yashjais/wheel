import React from "react";

import { Input, Select } from "neetoui/v2/formik";

import { CONTACTS, TAGS } from "../constants";

const NewNote = ({ selectedNote }) => (
  <div className="w-full space-y-5">
    <Input
      label="Title"
      name="title"
      placeholder="Enter note title"
      value={selectedNote && selectedNote.title}
    />
    <Input
      label="Description"
      name="description"
      placeholder="Enter note description"
      size="large"
      value={selectedNote && selectedNote.description}
    />
    <Select
      label="Assigned Contact"
      name="contact"
      placeholder="Select Role"
      options={CONTACTS}
    />
    <Select
      isMulti
      label="Tags"
      name="tags"
      placeholder="Select Role"
      options={TAGS}
    />
  </div>
);

export default NewNote;
