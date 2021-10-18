import React from "react";

import { Button, Pane, Typography, Toastr } from "neetoui/v2";
import { Check } from "neetoicons";
import { Formik, Form } from "formik";

import NewNoteForm from "./NewNoteForm";
import { INITIAL_VALUES, VALIDATION_SCHEMA } from "./constants";

export default function NewNotePane({ showPane, onClose, handleAddNewNote }) {
  const handleSubmit = async values => {
    try {
      handleAddNewNote(values);
      onClose();
      Toastr.success("Note has been successfully saved.");
    } catch (err) {
      // logger.error(err);
      console.log("err", err);
    }
  };
  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Note
        </Typography>
      </Pane.Header>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={VALIDATION_SCHEMA}
      >
        <Form>
          <Pane.Body>
            <NewNoteForm />
          </Pane.Body>
          <Pane.Footer className="flex space-x-2">
            <Button label="Save Changes" icon={Check} type="submit" />
            <Button label="Cancel" style="text" onClick={onClose} />
          </Pane.Footer>
        </Form>
      </Formik>
    </Pane>
  );
}
