import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AuthRoutes = ["/login", "/register"];
const commonPrivateRoutes = ["/dashboard", "/dashboard/change-password"];
const roleBasedPrivateRoutes = {
  PATIENT: [/^\/dashboard\/patient/],
  DOCTOR: [/^\/dashboard\/doctor/],
  ADMIN: [/^\/dashboard\/admin/],
  SUPER_ADMIN: [/^\/dashboard\/super-admin/],
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = cookies().get("accessToken")?.value;

  if (!accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (accessToken && commonPrivateRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  let decodedData = null;

  if (accessToken) {
    decodedData = jwtDecode(accessToken) as any;
  }

  const role = decodedData?.role;

  //   if (role === "ADMIN" && pathname.startsWith("/dashboard/admin")) {
  //     return NextResponse.next();
  //   }

  //   if (role === "DOCTOR" && pathname.startsWith("/dashboard/doctor")) {
  //     return NextResponse.next();
  //   }

  // code start here
  if (role) {
    console.log(role);
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: "/dashboard/:page*",
};
