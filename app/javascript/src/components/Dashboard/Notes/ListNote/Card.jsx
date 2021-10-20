import React from "react";

import { MenuVertical, Clock } from "neetoicons";
import { Avatar, Dropdown, Typography, Tag, Tooltip } from "neetoui/v2";

const Card = ({
  id,
  title,
  description,
  tag,
  notesStatus,
  created_at,
  handleSelectNote
}) => (
  <div className="p-4 my-4 border rounded neeto-ui-border-gray-300 neeto-ui-shadow-xs">
    <div className="flex justify-between">
      <Typography style="h4">{title}</Typography>
      <div>
        <Dropdown
          label=""
          buttonStyle="text"
          position="bottom-end"
          icon={() => <MenuVertical size={18} />}
        >
          <li onClick={() => handleSelectNote(id, "edit")}>Edit</li>
          <li onClick={() => handleSelectNote(id, "delete")}>Delete</li>
        </Dropdown>
      </div>
    </div>
    <Typography style="body2" weight="light">
      {description}
    </Typography>
    <hr className="my-3 neeto-ui-border-gray-300" />
    <div className="flex flex-row items-center justify-between">
      <div>
        <Tag
          label={tag}
          size="large"
          className="neeto-ui-text-gray-500 neeto-ui-bg-gray-100"
        />
      </div>
      <div className="flex flex-row items-center justify-between">
        <Clock size={11} className="mr-1 neeto-ui-text-gray-600" />
        <Tooltip content="Wednesday, 10:30AM" placement="bottom">
          <div>
            <Typography
              className="font-normal neeto-ui-text-gray-600"
              style="body3"
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

export default Card;
