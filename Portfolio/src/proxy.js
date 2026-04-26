import { NextResponse } from "next/server";

const locales = ["en", "ua"];
const defaultLocale = "en";

export default function proxy(req) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const hasLocale = locales.some(
    (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`,
  );
  if (hasLocale) return NextResponse.next();

  const cookieLocale = req.cookies.get("NEXT_LOCALE")?.value;
  const locale = locales.includes(cookieLocale) ? cookieLocale : defaultLocale;

  const url = new URL(`/${locale}${pathname === "/" ? "" : pathname}`, req.url);
  return NextResponse.redirect(url);
}
