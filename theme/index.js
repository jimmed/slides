import { code as theme, book as bookTheme } from "mdx-deck/themes";
import okaidia from "react-syntax-highlighter/styles/prism/okaidia";
import json from "react-syntax-highlighter/languages/prism/json";
import graphql from "react-syntax-highlighter/languages/prism/graphql";
import http from "react-syntax-highlighter/languages/prism/http";
import haskell from "react-syntax-highlighter/languages/prism/haskell";

const highlighting = {
  prism: {
    style: okaidia,
    languages: {
      json,
      graphql,
      http,
      haskell,
    },
  },
};

export default {
  ...theme,
  ...highlighting,
};

export const book = {
  ...bookTheme,
  ...highlighting,
};
