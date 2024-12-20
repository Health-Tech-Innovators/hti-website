import Header from '../components/header'
import Footer from '../components/footer'

export function ApplicationLayout({ children }) {

  return (
    <>
      <Header />
      <main className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {children}
      </main>
      <Footer />
    </>
  )
}
