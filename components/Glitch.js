import React from "react";

export const Glitch = ({ project, codePath, previewSize = 0 }) => (
  <iframe
    src={`https://glitch.com/embed/#!/embed/${project}?path=${codePath}&previewSize=${previewSize}`}
    title={`${project} on Glitch`}
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style={{
      width: "100%",
      border: 0,
      backgroundColor: "transparent",
      flex: 1,
    }}
  />
);

Glitch.displayName = "Glitch";
