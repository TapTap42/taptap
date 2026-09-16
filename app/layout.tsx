import "./globals.css";

export const metadata = {
  title: "TapTap — NFC Experience",
  description: "TapTap NFC MVP",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
