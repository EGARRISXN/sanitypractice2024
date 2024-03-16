"use client";
import {useEffect} from "react";

export default function Error({error, reset}) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <main className="mx-auto mt-16 flex h-screen flex-col items-center">
      <p className="py-2 text-center text-lg font-semibold">Oh no! Something went wrong.</p>
      <button onClick={reset}>Refresh</button>
    </main>
  );
}
