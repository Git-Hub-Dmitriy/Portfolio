import "@styles/global.css";
import { RUBIK } from "@fonts/rubik";
import { ScrollWrapper } from "@providers/Scroll/ScrollWrapper";
import PageContainer from "@layout/PageContainer/PageContainer";
import { TranslationProvider } from "@providers/Translation/translation-provider";
import { Dictionary } from "@interfaces/dictionary.types";
import { getDictionary } from "@utils/getDictionary";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ua" }];
}

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
    <html lang="en" className={RUBIK.variable}>
      <body>
        <TranslationProvider dictionary={dict}>
          <ScrollWrapper options={scrollOptions}>
            <PageContainer>
              <Header dictionary={dict} />
              {children}
              <Footer dictionary={dict} />
            </PageContainer>
          </ScrollWrapper>
        </TranslationProvider>
      </body>
    </html>
  );
}
