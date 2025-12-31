export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>Navbar</header>

        {children}

        <footer>Footer</footer>
      </body>
    </html>
  );
}


//{children} untuk semua halaman