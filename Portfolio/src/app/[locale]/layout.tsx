import type { Metadata } from "next";
import { SYNE } from "@fonts/fonts";
import "@styles/global.css";
import { Dictionary } from "@interfaces/dictionary.types";
import { getDictionary } from "@utils/getDictionary";
import { TranslationProvider } from "@providers/translation-provider";
import PageContainer from "@layout/PageContainer/PageContainer.server";
import { ScrollProvider } from "@providers/scrollProvider";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ua" }];
}

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My Portfolio. I am junior frontend developer",
};

const scrollOptions: IntersectionObserverInit = {
  threshold: 0.1,
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const dict: Dictionary = await getDictionary(locale ? locale : "en");

  return (
    <html lang={locale} className={`${SYNE.variable}`}>
      <body>
        <TranslationProvider dictionary={dict}>
          <ScrollProvider options={scrollOptions}>
            <PageContainer>{children}</PageContainer>
          </ScrollProvider>
        </TranslationProvider>
      </body>
    </html>
  );
}
