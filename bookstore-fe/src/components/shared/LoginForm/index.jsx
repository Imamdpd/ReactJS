import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Cek login sederhana (dummy)
    if (email === "admin@example.com" && password === "123456") {
      alert("Login berhasil!");
      navigate("/"); // 👉 balik ke Home
    } else {
      alert("Email atau password salah");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow" style={{ width: "300px" }}>
        <h2 className="mb-4 text-center">Login</h2>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary w-100" type="submit">Login</button>
      </form>
    </div>
  );
}
