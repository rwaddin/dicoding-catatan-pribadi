import React from "react";

import NoteHeader from "./NoteHeader";
import NoteCreateWrapper from "./create/NoteCreateWrapper";
import NoteContainerRight from "./NoteContainerRight";

function NoteContainer() {
    return (
      <div className="container">
          <NoteHeader/>
          <div className="row">
            <div className="col-sm-4 create-wrapper">
              <NoteCreateWrapper/>
            </div>
              <NoteContainerRight/>
          </div>
      </div>
    )
}

export default NoteContainer;