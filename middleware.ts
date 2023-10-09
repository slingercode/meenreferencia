import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

import { jwtVerify, SignJWT } from "jose";
import { nanoid } from "nanoid";

export const config = {
  matcher: ["/", "/context"],
};

export const middleware = async (request: NextRequest) => {
  try {
    const authCookie = request.cookies.get("session");
    const SECRET = process.env.JWT_SECRET;

    if (SECRET === undefined) {
      throw new Error();
    }

    if (authCookie) {
      await jwtVerify(authCookie.value, new TextEncoder().encode(SECRET));

      return NextResponse.next();
    }

    const token = request.nextUrl.searchParams.get("token");

    if (token && token === SECRET) {
      const response = NextResponse.redirect(
        new URL(request.nextUrl.pathname, request.url),
      );

      const jwt = await new SignJWT({})
        .setProtectedHeader({ alg: "HS256" })
        .setJti(nanoid())
        .setIssuedAt()
        .setExpirationTime("1h")
        .sign(new TextEncoder().encode(SECRET));

      response.cookies.set({
        name: "session",
        value: jwt,
        sameSite: "lax",
      });

      return response;
    }

    return NextResponse.redirect(new URL("/unauthorized", request.url));
  } catch (error) {
    const response = NextResponse.redirect(
      new URL("/unauthorized", request.url),
    );

    response.cookies.delete("session");

    return response;
  }
};
