import React from "react";
import Highlighter, { defaultProps } from "prism-react-renderer";

export const Highlight = ({ children, lang, style: rootStyle }) => (
  <Highlighter {...defaultProps} code={children} language={lang}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre
        className={className}
        style={{ ...rootStyle, ...style, padding: ".5vw" }}
      >
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span key={key} {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlighter>
);
