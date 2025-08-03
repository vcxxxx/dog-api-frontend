import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search breeds or sub-breeds..."
      aria-label="Search dog breeds and sub-breeds"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="dog-search-input"
      autoComplete="off"
    />
  );
}