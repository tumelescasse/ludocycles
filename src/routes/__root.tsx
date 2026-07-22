import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Ludo Cycles — Réparation, entretien et électrification de vélos',
      },
      {
        name: 'description',
        content:
          "Ludo Cycles répare, entretient et électrifie votre vélo à domicile. Installateur partenaire des kits Virvolt pour transformer votre vélo en vélo à assistance électrique.",
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
