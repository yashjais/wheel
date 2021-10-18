import React from "react";

import { Pane, Typography, Button, Input, Textarea, Select } from "neetoui/v2";
import { Check } from "neetoicons";
import { Formik, Form } from "formik";
import * as yup from "yup";

import NewNoteForm from "./NewNoteForm";

export default function NewNotePane({ showPane, setShowPane }) {
  console.log("in pane", showPane, setShowPane);
  const onClose = () => setShowPane(false);
  const handleSubmit = async values => {
    try {
      console.log("values", values);
    } catch (err) {
      // logger.error(err);
      console.log(err);
    }
  };
  return (
    <Pane isOpen={showPane} onClose={() => setShowPane(false)}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Note
        </Typography>
      </Pane.Header>

      {/* <Pane.Body>
        <NewNoteForm handleSubmit={handleSubmit} onClose={onClose} />
      </Pane.Body> */}

      <Formik
        initialValues={{
          title: "",
          description: "",
          contact: {},
          tags: []
        }}
        onSubmit={values => {
          console.log("inside values", values);
        }}
        validationSchema={yup.object({
          title: yup.string().required("Title is required"),
          description: yup.string().required("Description is required"),
          contact: yup
            .object({
              label: yup.string(),
              value: yup.string()
            })
            .required("Assigned Contact is required"),
          tags: yup.array().min(1).required("Atleast one Tag is required")
        })}
      >
        <Form>
          <Pane.Body>
            <div className="w-full space-y-6">
              <Input
                label="Title"
                name="title"
                placeholder="Enter note title"
                required={true}
                // className="mb-6"
                // error={errors.title && touched.title ? errors.title : ""}
              />
              <Textarea
                label="Description"
                name="description"
                placeholder="Enter note description"
                required={true}
                rows={3}
                // className="mb-6"
                // error={
                //   errors.description && touched.description
                //     ? errors.description
                //     : ""
                // }
              />
              <Select
                label="Assigned Contact"
                name="contact"
                placeholder="Select Role"
                required={true}
                // className="mb-6"
                // error={
                //   errors.contact && touched.contact ? errors.contact : ""
                // }
                options={[
                  {
                    label: "Oliver Smith",
                    value: "oliver-smith"
                  },
                  {
                    label: "Anna Smith",
                    value: "anna-smith"
                  },
                  {
                    label: "Eve Smith",
                    value: "eve-smith"
                  }
                ]}
              />
              <Select
                isMulti
                label="Tags"
                name="tags"
                placeholder="Select Role"
                required={true}
                // error={errors.tags && touched.tags ? errors.tags : ""}
                options={[
                  {
                    label: "Getting Started",
                    value: "getting-started"
                  },
                  {
                    label: "Onboarding",
                    value: "onboarding"
                  },
                  {
                    label: "User Flow",
                    value: "user-flow"
                  },
                  {
                    label: "UX",
                    value: "ux"
                  },
                  {
                    label: "Bugs",
                    value: "bugs"
                  },
                  {
                    label: "V2",
                    value: "v2"
                  }
                ]}
              />
            </div>
          </Pane.Body>
          <Pane.Footer className="flex items-center space-x-2">
            <Button
              label="Save Changes"
              type="submit"
              // onClick={() => handleSubmit()}
              icon={Check}
            />
            {/* <button type="submit">Submit</button> */}
            <Button label="Cancel" style="text" onClick={onClose} />
          </Pane.Footer>
        </Form>
      </Formik>
    </Pane>
  );
}
