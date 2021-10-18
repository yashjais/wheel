import React from "react";

import { Input, Textarea, Select } from "neetoui/v2";
import { Formik, Form } from "formik";
// import { Input, Textarea } from "neetoui/formik";
import * as yup from "yup";

import notesApi from "apis/notes";

export default function NewNoteForm({ onClose, refetch }) {
  const handleSubmit = async values => {
    console.log("in the handle submit", values);
    // try {
    //   await notesApi.create(values);
    //   refetch();
    //   onClose();
    // } catch (err) {
    //   // logger.error(err);
    //   console.log(err);
    // }
  };
  return (
    <div className="w-full">
      <Formik
        initialValues={{
          title: "",
          description: "",
          contact: {},
          tags: []
        }}
        onSubmit={values => {
          console.log("value", values);
        }}
        validationSchema={yup.object({
          title: yup.string().required("Title is required"),
          description: yup.string().required("Description is required"),
          // contact: yup
          //   .object({
          //     label: yup.string(),
          //     value: yup.string()
          //   })
          //   .required("Assigned Contact is required"),
          tags: yup.array().min(1).required("Atleast one Tag is required")
        })}
      >
        <Form>
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
        </Form>
      </Formik>
    </div>
  );
}
