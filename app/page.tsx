"use client";
import { useAuthModal, useSignerStatus, useUser } from "@account-kit/react";

export default function Home() {
  const user = useUser();
  const { openAuthModal } = useAuthModal();
  const signerStatus = useSignerStatus();

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4 justify-center text-center">
      {signerStatus.isInitializing ? (
        <>Loading...</>
      ) : user ? (
        <div>
          <p className="text-xl font-bold">Hello authenticated user!</p>
          <p className="text-s">User id: {user.userId}</p>
        </div>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={openAuthModal}
        >
          Login
        </button>
      )}
    </main>
  );
}
