import * as yup from "yup";

export const CONTACTS = [
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
];

export const TAGS = [
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
];

export const INITIAL_VALUES = {
  title: "",
  description: "",
  contact: {
    label: "",
    value: ""
  },
  tags: []
};

export const VALIDATION_SCHEMA = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  contact: yup
    .object({
      label: yup.string(),
      value: yup.string()
    })
    .required("Contact is required"),
  tags: yup.array().min(1).required("Tag is required")
});
