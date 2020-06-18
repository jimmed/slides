import React from "react";

export const Glitch = ({ project, codePath, previewSize = 0 }) => (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      position: "absolute",
      top: 0,
      left: 0,
    }}
  >
    <iframe
      src={`https://glitch.com/embed/#!/embed/${project}?path=${codePath}&previewSize=${previewSize}`}
      title={`${project} on Glitch`}
      allow="geolocation; microphone; camera; midi; vr; encrypted-media"
      style={{
        height: "100%",
        width: "100%",
        border: 0,
        backgroundColor: "#fffceb",
      }}
    />
  </div>
);
