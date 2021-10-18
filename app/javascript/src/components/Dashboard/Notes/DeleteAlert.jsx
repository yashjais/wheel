import React, { useState } from "react";

import { Modal, Typography, Button } from "@bigbinary/neetoui/v2";

const DeleteAlert = ({
  showDeleteAlert,
  onClose,
  selectedNoteId,
  confirmDeleteNote
}) => {
  const [deleting, setDeleting] = useState(false);
  const handleDelete = async () => {
    try {
      setDeleting(true);
      // await notesApi.destroy({ ids: selectedNoteIds });
      // to simulate the wait time if an api is called -- comment out line 22 and 28
      // setTimeout(() => {
      //   confirmDeleteNote(selectedNoteId);
      //   setDeleting(false);
      // }, 2000);
      confirmDeleteNote(selectedNoteId);
      // onClose();
    } catch (error) {
      // logger.error(error);
      console.log(error);
    } finally {
      setDeleting(false);
    }
  };
  return (
    <Modal
      size="lg"
      isOpen={showDeleteAlert}
      onClose={onClose}
      loading={deleting}
      closeButton={false}
    >
      <Modal.Header>
        <Typography style="h2">Delete Note</Typography>
      </Modal.Header>
      <Modal.Body>
        <Typography style="body2" lineHeight="normal">
          Are you sure you want to delete the Note? This action cannot be
          undone.
        </Typography>
      </Modal.Body>
      <Modal.Footer className="space-x-2">
        <Button
          style="primary"
          label="Continue"
          onClick={handleDelete}
          size="large"
        />
        <Button style="text" label="Cancel" onClick={onClose} size="large" />
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteAlert;
