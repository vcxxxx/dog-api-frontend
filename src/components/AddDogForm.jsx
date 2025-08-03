import React, { useState } from "react";

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
    <form onSubmit={handleSubmit} className="dog-add-form">
      {error && <p className="dog-error">{error}</p>}
      <input
        type="text"
        id="breed"
        aria-label="Breed"
        placeholder="Breed"
        value={newBreed}
        onChange={(e) => setNewBreed(e.target.value)}
        className="dog-input"
      />
      <input
        type="text"
        id="subBreed"
        aria-label="Sub-breed (optional)"
        placeholder="Sub-breed (optional)"
        value={newSubBreed}
        onChange={(e) => setNewSubBreed(e.target.value)}
        className="dog-input"
      />
      <button
        type="submit"
        disabled={!newBreed.trim()}
        className={"dog-button"}
      >
        Add
      </button>
    </form>
  );
}