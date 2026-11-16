
import React, { useState } from "react";

export default function ShowPassword() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div>
      <h2>Show / Hide Password</h2>

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleToggle}>
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
}
