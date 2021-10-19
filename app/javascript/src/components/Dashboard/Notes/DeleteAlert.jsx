import React, { useState } from "react";

import { Modal, Typography, Button, Toastr } from "neetoui/v2";

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
      confirmDeleteNote(selectedNoteId);
    } catch (error) {
      console.log(error);
    } finally {
      setDeleting(false);
      Toastr.success("Note has been successfully deleted.");
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
