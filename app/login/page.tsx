"use client";

import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

function LoginPage() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex w-full h-full ">
        <div className="flex-col w-full h-full justify-content content-center text-white">
          <h1 className="text-white">{session.user?.name}</h1>Signed in as{" "}
          {session.user?.email} <br />
          <button type="submit" onClick={() => signOut()}>
            Sign out
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="flex w-full h-full ">
      <div className="flex-col w-full h-full justify-content content-center text-white">
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-600 bg-opacity-75 md:bg-opacity-25 px-6 py-4 br-full rounded-lg w-full max-w-md space-y-8">
            <div className="flex-col justify-content content-center">
              <div className="flex ml-12 justify-content content-center">
                <Image
                  className="flex justify-content content-center"
                  src="/logo.png"
                  alt="Logo with the app"
                  width={150}
                  height={150}
                />
              </div>
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
                Sign in with google
              </h2>
            </div>
            <div>
              <button
                type="submit"
                onClick={() => signIn()}
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
