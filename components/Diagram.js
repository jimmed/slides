import React from "react";
import { useSteps } from "mdx-deck";

export const Diagram = ({ images, alt }) => {
  const index = useSteps(images.length - 1);

  return <img src={images[index]} alt={alt} />;
};
