"use server";

import { cookies } from "next/headers";

export async function setAuthCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set("authToken", token, {
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    sameSite: "lax",
  });
}

export async function removeAuthCookies() {
  const cookieStore = await cookies();
  cookieStore.delete("authToken");
}