import React, { useState, useEffect } from "react";

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
  <div className={`dog-item ${editing ? 'dog-item-editing' : ''}`}>
    {editing ? (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
        className="dog-edit-form"
      >
        <input
          type="text"
          placeholder="Breed"
          aria-label="Edit breed"
          value={editBreed}
          onChange={(e) => setEditBreed(e.target.value)}
          onKeyDown={handleKeyDown}
          className="dog-edit-input"
          autoFocus
        />
        <input
          type="text"
          placeholder="Sub-breed (Optional)"
          aria-label="Edit sub-breed"
          value={editSubBreed}
          onChange={(e) => setEditSubBreed(e.target.value)}
          onKeyDown={handleKeyDown}
          className="dog-edit-input"
        />
        <div className="dog-button-group">
          <button type="submit" className="dog-button">
            Save
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="dog-button dog-button-secondary"
          >
            Cancel
          </button>
        </div>
        {error && (
          <p className="dog-error" role="alert">
            {error}
          </p>
        )}
      </form>
    ) : (
      <>
        <span className="dog-text">
          {dog.breed} {dog.subBreed && `(${dog.subBreed})`}
        </span>
        <div className="dog-button-group">
          <button onClick={onEdit} className="dog-button">
            Edit
          </button>
          <button onClick={handleDelete} className="dog-button dog-button-secondary">
            Delete
          </button>
        </div>
      </>
    )}
  </div>
);
}