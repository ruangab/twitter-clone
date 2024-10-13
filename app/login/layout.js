export const metadata = {
  title: 'Login',
  description: 'Login da Página',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
