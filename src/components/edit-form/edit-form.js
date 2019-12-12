import React, { Component } from "react";
import Modal from "@material-ui/core/Modal";
import "./edit-form.css";

export default class EditForm extends Component {
  state = {
    open: false
  };

  render() {
    const { open, handleClose } = this.props;
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div className="paper">
            <h2 id="simple-modal-title">Text in a modal</h2>
            <p id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
          </div>
        </Modal>
      </div>
    );
  }
}
