import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth";

const locales = ["en", "ua"];
const defaultLocale = "en";

interface ExtendedSession {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: string;
  };
}

export default async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const isAdminPage = locales.some(
    (l) => pathname.startsWith(`/${l}/admin`) || pathname === `/${l}/admin`,
  );

  if (isAdminPage) {
    const session = (await auth()) as ExtendedSession | null;
    const userRole = session?.user?.role;

    if (userRole !== "ADMIN") {
      const currentLocale =
        locales.find((l) => pathname.startsWith(`/${l}/`)) || defaultLocale;
      return NextResponse.redirect(new URL(`/${currentLocale}`, req.url));
    }
  }

  const hasLocale = locales.some(
    (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`,
  );
  if (hasLocale) return NextResponse.next();

  const cookieLocale = req.cookies.get("NEXT_LOCALE")?.value;
  const locale =
    cookieLocale && locales.includes(cookieLocale)
      ? cookieLocale
      : defaultLocale;

  const url = new URL(`/${locale}${pathname === "/" ? "" : pathname}`, req.url);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
