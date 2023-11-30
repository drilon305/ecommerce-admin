import './globals.css'
import AppProvider from './providers/AuthProvider';



export const metadata = {
  title: 'Admin Ecommerce',
  description: 'Dashboard for Ecommerce',
}

export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <AppProvider>
        {children}
        </AppProvider>
  
        </body>
  
    </html>
  )
}
