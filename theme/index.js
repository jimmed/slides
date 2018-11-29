import { code as theme } from "mdx-deck/themes";
import okaidia from "react-syntax-highlighter/styles/prism/okaidia";
import json from "react-syntax-highlighter/languages/prism/json";
import graphql from "react-syntax-highlighter/languages/prism/graphql";
import http from "react-syntax-highlighter/languages/prism/http";

const highlighting = {
  prism: {
    style: okaidia,
    languages: {
      json,
      graphql,
      http
    }
  }
};

export default {
  ...theme,
  ...highlighting
};
