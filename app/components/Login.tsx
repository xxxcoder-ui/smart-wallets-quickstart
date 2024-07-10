"use client";

// src/Login.tsx
import { useAuthModal, useUser } from "@account-kit/react";

export default function Login() {
  const { openAuthModal } = useAuthModal();
  const user = useUser();

  if (user) {
    return <div>Hello: {user.userId}</div>;
  } else {
    return (
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openAuthModal}
      >
        Login
      </button>
    );
  }
}
