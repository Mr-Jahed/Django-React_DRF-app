import React, { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: "", description: "" });

  useEffect(() => {
    fetch("/api/items/")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/items/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const newItem = await res.json();
    setItems([...items, newItem]);
    setForm({ name: "", description: "" });
  };

  return (
    <div style={{ padding: 24 }}>
      <h1>Django + React Demo</h1>

      <ul>
        {items.map((it) => (
          <li key={it.id}>
            <strong>{it.name}</strong> - {it.description}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default App;
