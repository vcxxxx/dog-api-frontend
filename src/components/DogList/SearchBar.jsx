import React from "react";
import styles from "./styles";

export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search breeds or sub-breeds..."
      aria-label="Search dog breeds and sub-breeds"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={styles.searchInput}
      autoComplete="off"
    />
  );
}