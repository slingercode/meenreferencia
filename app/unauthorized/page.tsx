"use client";

import Image from "next/image";

export default function Comments() {
  return (
    <main className="fixed top-0 z-20  w-screen bg-background">
      <div className="flex h-[100dvh] items-center justify-center">
        <Image
          priority
          className="h-auto w-auto rounded"
          src="/images/quien-chota-sos.jpeg"
          alt="Quien chota sos?"
          width={500}
          height={500}
        />
      </div>
    </main>
  );
}
