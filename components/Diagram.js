import React from "react";
import { useSteps } from "mdx-deck";

export const Diagram = ({ images, alt }) => {
  const selected = useSteps(images.length - 1);

  return (
    <>
      {images.map((image, index) => (
        <object
          data={image}
          key={index}
          style={{
            display: index === selected ? "block" : "none",
          }}
        >
          {alt}{" "}
          {images.length > 1 && (
            <>
              {index + 1} / {images.length}
            </>
          )}
        </object>
      ))}
    </>
  );
};
