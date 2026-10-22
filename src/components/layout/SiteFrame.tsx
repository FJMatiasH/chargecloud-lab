import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function SiteFrame({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: "en" | "es";
}) {
  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <header className="site-header">
          <Link className="site-brand" href="/en">
            chargecloud
          </Link>
          <nav aria-label="Language">
            <ul className="language-nav">
              <li>
                <Link href="/en" hrefLang="en" lang="en">
                  English
                </Link>
              </li>
              <li>
                <Link href="/es" hrefLang="es" lang="es">
                  Español
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main id="main-content">{children}</main>
        <footer className="site-footer">
          <p>chargecloud — charging a brighter future.</p>
        </footer>
      </body>
    </html>
  );
}
