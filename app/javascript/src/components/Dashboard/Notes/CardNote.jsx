import React from "react";

import { MenuVertical, Clock } from "neetoicons";
import { Avatar, Dropdown, Typography, Tag, Tooltip } from "neetoui/v2";

const CardNote = ({
  id,
  title,
  description,
  tag,
  notesStatus,
  created_at,
  handleDeleteNote
}) => (
  <div className="p-4 my-4 rounded-sm neeto-ui-border-gray-300 neeto-ui-shadow-s">
    <div className="flex justify-between">
      <Typography style="h4">{title}</Typography>
      <div>
        <Dropdown
          label=""
          buttonStyle="text"
          position="bottom-end"
          icon={() => <MenuVertical size={18} />}
        >
          <li>Edit</li>
          <li onClick={() => handleDeleteNote(id)}>Delete</li>
        </Dropdown>
      </div>
    </div>
    <Typography style="body2" weight="light">
      {description}
    </Typography>
    <hr className="my-3 neeto-ui-border-gray-300" />
    <div className="flex items-center justify-between">
      <div>
        <Tag
          label={tag}
          size="large"
          className="neeto-ui-text-gray-500 neeto-ui-bg-gray-100"
        />
      </div>
      <div className="flex items-center justify-between">
        <Clock size={12} className="mr-2" />
        <Tooltip content="Wednesday, 10:30AM" placement="bottom">
          <div>
            <Typography
              className="neeto-ui-text-gray-600"
              style="body2"
              weight="light"
            >{`${notesStatus} ${created_at}`}</Typography>
          </div>
        </Tooltip>
        <Avatar
          user={{
            name: "neeto UI"
          }}
          className="ml-2"
          size="small"
        />
      </div>
    </div>
  </div>
);

export default CardNote;
