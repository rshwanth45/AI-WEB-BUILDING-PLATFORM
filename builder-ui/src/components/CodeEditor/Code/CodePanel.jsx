import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledPanel } from "react-codemirror2";
import { useState } from "react";
import { Launch, TransitEnterexit } from "@material-ui/icons";

function CodePanel({ language, title, value, onChange }) {
  const [open, setOpen] = useState(true);

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <>
      <div className={`panel-container ${open ? "" : "collapsed"}`}>
        <div className="panel-title">
          {title}
          <button
            onClick={() => {
              setOpen(!open);
            }}
            className="expand-collapse-button"
          >
            {open ? <TransitEnterexit /> : <Launch />}
          </button>
        </div>
        <ControlledPanel
          onBeforeChange={handleChange}
          className="code-mirror-wrapper"
          value={value}
          options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            theme: "material",
            lineNumbers: true,
          }}
        />
      </div>
    </>
  );
}

export default CodePanel;
