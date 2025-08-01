import React from "react";
import styles from "./styles";

export default function ErrorMessage({ message }) {
  return (
    <p role="alert" style={styles.error}>
      Error: {message}
    </p>
  );
}