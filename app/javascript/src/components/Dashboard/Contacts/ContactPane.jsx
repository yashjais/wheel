import React from "react";

import { Button, Pane, Typography, Toastr } from "neetoui/v2";
import { Check } from "neetoicons";
import { Formik, Form } from "formik";

import ContactForm from "./ContactForm";
import { INITIAL_VALUES, VALIDATION_SCHEMA } from "./constants";

const ContactPane = ({ showPane, onClose, handleAddNewContact }) => {
  const handleSubmit = async values => {
    try {
      handleAddNewContact(values);
      onClose();
      Toastr.success("Contact has been successfully saved.");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Contact
        </Typography>
      </Pane.Header>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={VALIDATION_SCHEMA}
      >
        <Form>
          <Pane.Body>
            <ContactForm />
          </Pane.Body>
          <Pane.Footer className="flex space-x-2">
            <Button label="Save Changes" icon={Check} type="submit" />
            <Button label="Cancel" style="text" onClick={onClose} />
          </Pane.Footer>
        </Form>
      </Formik>
    </Pane>
  );
};

export default ContactPane;
