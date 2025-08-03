import React from "react";

export default function ErrorMessage({ message }) {
  return (
    <p role="alert" className="dog-error">
      Error: {message}
    </p>
  );
}