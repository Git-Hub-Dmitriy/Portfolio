import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function changeLang(
  locale: string,
  pathname: string,
  router: AppRouterInstance,
) {
  if (!pathname) return;
  const expires = new Date();
  expires.setTime(expires.getTime() + 7 * 24 * 60 * 60 * 1000);
  document.cookie = `NEXT_LOCALE=${locale};expires=${expires.toUTCString()};path=/`;
  const segments = pathname.split("/");
  segments[1] = locale;
  const newPath = segments.join("/");
  router.replace(newPath);
}
