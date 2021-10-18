import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Checkbox, Dropdown, Pagination, Avatar, Typography } from "neetoui/v2";

const ContactsTable = ({ contacts }) => {
  const renderNameAndrole = contact => (
    <div className="flex items-center space-x-2">
      <Avatar
        size="medium"
        user={{
          name: "neeto UI",
          imageUrl: contact.url
        }}
      />
      <div>
        <Typography style="h5" weight="semi-bold">
          {contact.name}
        </Typography>
        <Typography style="h6" weight="light">
          {contact.role}
        </Typography>
      </div>
    </div>
  );

  return (
    <>
      <table
        className={`neeto-ui-table neeto-ui-table--checkbox neeto-ui-table--actions`}
      >
        <thead>
          <tr>
            <th>
              <Checkbox name="header" />
            </th>
            <th>Name & Role</th>
            <th>Email</th>
            <th>Created At</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <React.Fragment key={contact.id}>
              <tr>
                <td>
                  <Checkbox name="1" />
                </td>
                <td>{renderNameAndrole(contact)}</td>
                <td>{contact.mail}</td>
                <td>{contact.created_at}</td>
                <td>
                  <div className="flex flex-row items-center justify-end space-x-3">
                    <Dropdown
                      icon={MenuHorizontal}
                      buttonStyle="icon"
                      autoWidth
                    >
                      <li>Edit</li>
                      <li>Delete</li>
                    </Dropdown>
                  </div>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <div className="flex flex-row items-center justify-end w-full mt-6 mb-8">
        <Pagination count={300} pageNo={1} pageSize={25} navigate={() => {}} />
      </div>
    </>
  );
};

export default ContactsTable;
