import { DM_SANS, BRICOLAGE_GROTESQUE } from "@fonts/fonts";
import "@styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${DM_SANS.variable} ${BRICOLAGE_GROTESQUE.variable}`}>
        {children}
      </body>
    </html>
  );
}
