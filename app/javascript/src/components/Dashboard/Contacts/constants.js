import * as yup from "yup";

export const CONTACTS = [
  {
    id: 1,
    name: "Ronald Richards",
    role: "Owner",
    mail: "ronald@gmail.com",
    created_at: "Feb, 5, 2021",
    url: "https://randomuser.me/api/portraits/women/90.jpg"
  },
  {
    id: 2,
    name: "Jacob Jones",
    role: "Admin",
    mail: "jacob@gmail.com",
    created_at: "Feb, 5, 2021",
    url: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
  },
  {
    id: 3,
    name: "Ronald Richards",
    role: "Owner",
    mail: "ronaldronaldronaldronaldronaldronaldronaldronaldronaldronaldronaldronaldronald@gmail.com",
    created_at: "Feb, 5, 2021",
    url: "https://randomuser.me/api/portraits/women/90.jpg"
  },
  {
    id: 4,
    name: "Jacob Jones",
    role: "Admin",
    mail: "jacob@gmail.com",
    created_at: "Feb, 5, 2021",
    url: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
  },
  {
    id: 5,
    name: "Ronald Richards",
    role: "Owner",
    mail: "ronald@gmail.com",
    created_at: "Feb, 5, 2021",
    url: "https://randomuser.me/api/portraits/women/90.jpg"
  },
  {
    id: 6,
    name: "Jacob Jones",
    role: "Admin",
    mail: "jacob@gmail.com",
    created_at: "Feb, 5, 2021",
    url: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
  },
  {
    id: 7,
    name: "Ronald Richards",
    role: "Owner",
    mail: "ronald@gmail.com",
    created_at: "Feb, 5, 2021",
    url: "https://randomuser.me/api/portraits/women/90.jpg"
  },
  {
    id: 8,
    name: "Ronald Richards",
    role: "Owner",
    mail: "ronald@gmail.com",
    created_at: "Feb, 5, 2021",
    url: "https://randomuser.me/api/portraits/women/90.jpg"
  },
  {
    id: 9,
    name: "Ronald Richards",
    role: "Owner",
    mail: "ronald@gmail.com",
    created_at: "Feb, 5, 2021",
    url: "https://randomuser.me/api/portraits/women/90.jpg"
  }
];

export const ROLE = [
  {
    label: "Owner",
    value: "owner"
  },
  {
    label: "Admin",
    value: "admin"
  },
  {
    label: "Super Admin",
    value: "super-admin"
  }
];

export const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: []
};

export const VALIDATION_SCHEMA = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().required("Email is required"),
  role: yup.array().min(1).required("Role is required")
});
