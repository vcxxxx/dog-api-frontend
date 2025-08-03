import React, { useEffect, useState } from "react";
import { fetchDogs, createDog, updateDog, deleteDog } from "../api/dogApi";
import DogItem from "./DogItem";
import AddDogForm from "./AddDogForm";
import SearchBar from "./SearchBar";
import ErrorMessage from "./ErrorMessage";

function parseApiError(error) {
  try {
    const parsed = JSON.parse(error.message);
    if (Array.isArray(parsed)) {
      return parsed.map((err) => err.message).join(" ");
    } else if (parsed.message) {
      return parsed.message;
    }
  } catch {
    // fallback if parsing fails
  }
  return error.message || "An unknown error occurred.";
}

export default function DogList() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchDogs()
      .then(setDogs)
      .catch((e) => setError("Failed to fetch dogs. " + e.message))
      .finally(() => setLoading(false));
  }, []);

const handleAddDog = async (newDog) => {
  setError(null);
  try {
    const createdDog = await createDog(newDog);
    if (!dogs.some((d) => d.id === createdDog.id)) {
      setDogs((prev) => [...prev, createdDog]);
    }
  } catch (e) {
    setError("Failed to add dog. " + parseApiError(e));
  }
};

  const handleDeleteDog = async (id) => {
    setError(null);
    try {
      await deleteDog(id);
      setDogs((prev) => prev.filter((d) => d.id !== id));
    } catch (e) {
      setError("Failed to delete dog. " + e.message);
    }
  };

  const handleSaveEdit = async (id, updatedDog) => {
  setError(null);
  try {
    const updated = await updateDog(id, updatedDog);
    setDogs((prev) => prev.map((d) => (d.id === id ? updated : d)));
    setEditingId(null);
  } catch (e) {
    setError("Failed to update dog. " + parseApiError(e));
  }
};

  const filteredDogs = dogs
    .filter(({ breed, subBreed }) => {
      const search = searchTerm.toLowerCase().trim();
      const combined = (breed + (subBreed ? ` (${subBreed})` : "")).toLowerCase();
      return !search || combined.includes(search);
    })
    .sort((a, b) => {
      const nameA = a.breed + (a.subBreed || "");
      const nameB = b.breed + (b.subBreed || "");
      return nameA.localeCompare(nameB);
    });

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <div className="dog-container" aria-label="Dog List Section">
      <h2 className="dog-title" tabIndex="0">Dogs Web API</h2>
      {error && <ErrorMessage message={error} />}
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <AddDogForm onAdd={handleAddDog} />
      <div className="dog-list-container">
        {filteredDogs.length === 0 ? (
          <p style={{ textAlign: "center", color: "#666" }} role="status">No dogs found.</p>
        ) : (
          filteredDogs.map((dog) => (
            <DogItem
              key={dog.id}
              dog={dog}
              editing={editingId === dog.id}
              onEdit={() => setEditingId(dog.id)}
              onCancelEdit={() => setEditingId(null)}
              onSaveEdit={handleSaveEdit}
              onDelete={() => handleDeleteDog(dog.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}