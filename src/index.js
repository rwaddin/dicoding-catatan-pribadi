import React from "react";
import {createRoot} from "react-dom/client";

import "./assets/bootstrap.min.css";
import "./assets/tabler-icons-1.84.0/tabler-icons.min.css";
import "./assets/main.css";

import NoteContainer from "./views/NoteContainer";

const root = createRoot(document.getElementById("root"));

root.render(<NoteContainer/>);