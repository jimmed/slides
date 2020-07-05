import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Glitch } from "./Glitch";
import { CodeSandbox } from "./CodeSandbox";

const Editors = { Glitch, CodeSandbox };

export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(defaultValue);
  useEffect(() => {
    const currentValue = localStorage[key];
    if (currentValue != null) {
      setState(currentValue);
    }
  }, [key]);
  useEffect(() => {
    if (state != null && key != null) {
      localStorage[key] = state;
    } else {
      delete localStorage[key];
    }
  }, [state, key]);
  return [state, setState];
};

export const Editor = ({ projectNames, ...props }) => {
  const [editor, setEditor] = useLocalStorage("editor", "Glitch");
  const Editor = Editors[editor];
  const otherEditor = useMemo(() => {
    const editors = Object.keys(Editors);
    return editors[(editors.indexOf(editor) + 1) % editors.length];
  }, [editor]);
  const switchEditor = useCallback(() => setEditor(otherEditor), [
    otherEditor,
    setEditor,
  ]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "stretch",
        alignItems: "stretch",
        top: 0,
        left: 0,
      }}
    >
      <Editor project={projectNames[editor]} {...props} />
      <div
        style={{
          flex: 0,
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
        }}
      >
        <button
          onClick={switchEditor}
          style={{
            fontSize: "1vw",
            backgroundColor: editor === "Glitch" ? "transparent" : "black",
            color: editor === "Glitch" ? "black" : "white",
            lineHeight: 1.2,
            margin: 8,
            padding: 8,
          }}
        >
          Switch to {otherEditor}
        </button>
        <button
          onClick={() => document.body.focus()}
          style={{
            fontSize: "1vw",
            backgroundColor: editor === "Glitch" ? "transparent" : "black",
            color: editor === "Glitch" ? "black" : "white",
            lineHeight: 1.2,
            margin: 8,
            padding: 8,
          }}
        >
          Recapture focus
        </button>
      </div>
    </div>
  );
};
