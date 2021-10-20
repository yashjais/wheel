import React from "react";

import { Input, Select } from "neetoui/v2/formik";

import { ROLE } from "../constants";

const ContactForm = () => (
  <div className="w-full space-y-5">
    <div className="flex space-x-2">
      <Input
        label="First Name"
        name="firstName"
        placeholder="Enter First Name"
        size="small"
      />
      <Input
        label="Last Name"
        name="lastName"
        placeholder="Enter Last Name"
        size="small"
      />
    </div>
    <Input
      label="Email"
      name="email"
      placeholder="Enter your Email Address"
      size="large"
    />
    <Select
      isMulti
      label="Role"
      name="role"
      placeholder="Select Role"
      options={ROLE}
    />
  </div>
);

export default ContactForm;
