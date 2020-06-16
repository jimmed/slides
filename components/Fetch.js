import React, { useState, useCallback, useMemo, useReducer } from "react";
import { Highlight } from "./Highlight";

const useLazyFetch = (url) => {
  const [state, dispatch] = useReducer((state, { type, error, result }) => {
    switch (type) {
      case "start":
        return { error: null, result: null, loading: true };
      case "response":
        return { error: null, result, loading: false };
      case "error":
        return { error, result: null, loading: false };
      default:
        return state;
    }
  }, {});

  const run = useCallback(() => {
    if (state.loading) return;
    dispatch({ type: "start" });
    return fetch(url)
      .then((res) => res.text())
      .then((text) => {
        try {
          return JSON.parse(text);
        } catch (error) {
          return text;
        }
      })
      .then(
        (result) => dispatch({ type: "response", result }),
        (error) => dispatch({ type: "error", error })
      );
  }, [url, state]);

  return useMemo(() => ({ ...state, run }), [state, run]);
};

export const Fetch = ({ initialUrl }) => {
  const [url, setUrl] = useState(initialUrl);
  const { result, loading, error, run } = useLazyFetch(url);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      run();
    },
    [run]
  );

  const handleUrlChange = useCallback((event) => setUrl(event.target.value), [
    setUrl,
  ]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "stretch",
          alignItems: "stretch",
          width: "100%",
          padding: "0 auto 1vw",
        }}
      >
        <input
          style={{ flex: 1, fontSize: "2vw" }}
          type="url"
          value={url}
          onChange={handleUrlChange}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            fontSize: "2vw",
          }}
        >
          Fetch!
        </button>
      </form>
      <div>
        {loading && <p>⏳ Fetching...</p>}
        {error && (
          <p>
            ⚠️ <pre>{error.toString()}</pre>
          </p>
        )}
        {result && (
          <Highlight
            style={{
              textAlign: "left",
              maxWidth: "100vw",
              overflowX: "auto",
              marginBottom: 0,
            }}
            lang="json"
          >
            {JSON.stringify(result, null, 2)}
          </Highlight>
        )}
      </div>
    </>
  );
};
