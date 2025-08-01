import React, { useState } from "react";
import styles from "./styles";

export default function AddDogForm({ onAdd }) {
  const [newBreed, setNewBreed] = useState("");
  const [newSubBreed, setNewSubBreed] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const breed = newBreed.trim();
    const subBreed = newSubBreed.trim();
    setError(null);

    if (!breed) {
      setError("Breed is required.");
      return;
    }

    onAdd({ breed, subBreed: subBreed || null });
    setNewBreed("");
    setNewSubBreed("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.addForm}>
      {error && <p style={styles.error}>{error}</p>}
      <input
        type="text"
        id="breed"
        aria-label="Breed"
        placeholder="Breed"
        value={newBreed}
        onChange={(e) => setNewBreed(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        id="subBreed"
        aria-label="Sub-breed (optional)"
        placeholder="Sub-breed (optional)"
        value={newSubBreed}
        onChange={(e) => setNewSubBreed(e.target.value)}
        style={styles.input}
      />
      <button
        type="submit"
        disabled={!newBreed.trim()}
        style={{
          ...styles.button,
          opacity: !newBreed.trim() ? 0.6 : 1,
          cursor: !newBreed.trim() ? "not-allowed" : "pointer",
        }}
      >
        Add
      </button>
    </form>
  );
}