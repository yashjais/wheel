import React from "react";

import { Input, Select } from "neetoui/v2/formik";

import { CONTACTS, TAGS } from "../constants";

const NewNote = () => (
  <div className="w-full space-y-5">
    <Input label="Title" name="title" placeholder="Enter note title" required />
    <Input
      label="Description"
      name="description"
      placeholder="Enter note description"
      size="large"
      required
    />
    <Select
      label="Assigned Contact"
      name="contact"
      placeholder="Select Role"
      required
      options={CONTACTS}
    />
    <Select
      isMulti
      label="Tags"
      name="tags"
      placeholder="Select Role"
      required
      options={TAGS}
    />
  </div>
);

export default NewNote;
