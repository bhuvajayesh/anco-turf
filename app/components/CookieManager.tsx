"use client";

import { useEffect } from "react";
import { setAuthCookie } from "../actions/authActions";

export default function CookieManager({ token }: { token: string }) {
    useEffect(() => {
        if (token) {
            setAuthCookie(token);
        }
    }, [token]);

    return null;
}
