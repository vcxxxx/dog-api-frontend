import React, { useState, useEffect } from "react";
import styles from "./styles";

export default function DogItem({ dog, editing, onEdit, onCancelEdit, onSaveEdit, onDelete }) {
  const [editBreed, setEditBreed] = useState(dog.breed);
  const [editSubBreed, setEditSubBreed] = useState(dog.subBreed || "");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (editing) {
      setEditBreed(dog.breed);
      setEditSubBreed(dog.subBreed || "");
    }
  }, [editing, dog.breed, dog.subBreed]);

  const handleSave = () => {
    setError(null);
    if (!editBreed.trim()) {
      setError("Breed is required.");
      return;
    }
    onSaveEdit(dog.id, { breed: editBreed.trim(), subBreed: editSubBreed.trim() || null });
  };

  const handleCancel = () => {
    setEditBreed(dog.breed);
    setEditSubBreed(dog.subBreed || "");
    onCancelEdit();
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${dog.breed}"?`)) {
      onDelete();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      handleCancel();
    }
  };

  return (
    <div
      style={{
        ...styles.dogItem,
        backgroundColor: editing ? "#f1f9ff" : "transparent",
      }}
    >
      {editing ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
          style={{ display: "flex", flexDirection: "column", gap: "8px" }}
        >
          <input
            type="text"
            placeholder="Breed"
            aria-label="Edit breed"
            value={editBreed}
            onChange={(e) => setEditBreed(e.target.value)}
            onKeyDown={handleKeyDown}
            style={styles.editInput}
            autoFocus
          />
          <input
            type="text"
            placeholder="Sub-breed (Optional)"
            aria-label="Edit sub-breed"
            value={editSubBreed}
            onChange={(e) => setEditSubBreed(e.target.value)}
            onKeyDown={handleKeyDown}
            style={styles.editInput}
          />
          <div style={styles.buttonGroup}>
            <button type="submit" style={styles.button}>
              Save
            </button>
            <button
              type="button"
              onClick={handleCancel}
              style={{ ...styles.button, ...styles.buttonSecondary }}
            >
              Cancel
            </button>
          </div>
          {error && (
            <p style={styles.error} role="alert">
              {error}
            </p>
          )}
        </form>
      ) : (
        <>
          <span style={styles.dogText}>
            {dog.breed} {dog.subBreed && `(${dog.subBreed})`}
          </span>
          <div style={styles.buttonGroup}>
            <button onClick={onEdit} style={styles.button}>
              Edit
            </button>
            <button onClick={handleDelete} style={{ ...styles.button, ...styles.buttonSecondary }}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}