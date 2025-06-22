import Sidebar from '../app/components/Sidebar'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  )
}