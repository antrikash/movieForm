// vendor
import React from "react";

import "./FormHeader.css";

class FormHeader extends React.Component {
  render() {
    return (
      <div className="col-12 form-title">
        <header>
          <h2>{this.props.formTitle}</h2>
        </header>
      </div>
    );
  }
}

export default FormHeader;
