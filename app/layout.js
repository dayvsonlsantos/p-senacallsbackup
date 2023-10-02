import Footer from '@/components/footer'
import './globals.css'
import Navbar from '@/components/navbar'

export const metadata = {
  title: 'Senacalls',
  description: 'Aplicativo para abertura de chamados na Faculdade Senac',
  manifest: '/manifest.json',
  icons: { apple: '/icon.png' },
  themeColor: '#ffffff'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
          {children}    
      </body>
    </html>
  )
}
