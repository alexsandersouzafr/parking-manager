import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="header">PARKING MANAGER SEVEN</div>
        {children}
      </body>
    </html>
  );
}
