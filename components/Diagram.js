import React from "react";
import { useSteps } from "mdx-deck";

export const Diagram = ({ images, alt }) => {
  const index = useSteps(images.length - 1);

  return (
    <object data={images[index]}>
      {alt}{" "}
      {images.length > 1 && (
        <>
          {index + 1} / {images.length}
        </>
      )}
    </object>
  );
};
