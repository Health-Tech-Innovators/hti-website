import '@/styles/tailwind.css'
import { ApplicationLayout } from './application-layout'
import { DynamicBackground } from '@/components/background'
import EmailJSInit from '@/components/email'

export const metadata = {
  title: {
    template: '%s - HTI',
    default: 'HTI',
  },
  description: '',
}

export default async function RootLayout({ children }) {

  return (
    <html
      lang="en"
      className="text-zinc-950 antialiased"
      // className="text-zinc-950 antialiased lg:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:lg:bg-zinc-950"
    >
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body>
        <DynamicBackground>
          <EmailJSInit />
          <ApplicationLayout>{children}</ApplicationLayout>
        </DynamicBackground>
      </body>
    </html>
  )
}
