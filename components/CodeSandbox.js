import React from "react";

export const CodeSandbox = ({ project, codePath, previewSize = 0 }) => (
  <iframe
    src={`https://codesandbox.io/embed/${project}?initialPath=${codePath}&autoresize=1&fontsize=24&hidenavigation=0&theme=dark`}
    style={{
      width: "100%",
      flex: 1,
      border: 0,
      borderRadius: 0,
      overflow: "hidden",
    }}
    title={`${project} on CodeSandbox`}
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>
);

CodeSandbox.displayName = "CodeSandbox";
