import { Component } from "react";

class SettingsRightPanel extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Setări generale
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">...</div>
      </div>
    );
  }
}

export default SettingsRightPanel;
