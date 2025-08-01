const BASE_URL = "http://localhost:8080/api/dogbreeds";

export async function fetchDogs() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch dog breeds.");
  return res.json();
}

export async function createDog(dog) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dog),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Create failed.");
  }
  return res.json();
}

export async function updateDog(id, dog) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dog),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Update failed.");
  }
  return res.json();
}

export async function deleteDog(id) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Failed to delete.");
  }
}