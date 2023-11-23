import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'

import markdoc from '@astrojs/markdoc'

export default defineConfig({
  integrations: [
    starlight({
      title: 'FromeSoftware',
      social: {
        github: 'https://github.com/FromeSoftware/website',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            {
              label: 'Example Guide',
              link: '/guides/example/',
            },
          ],
        },
        {
          label: 'Reference',
          autogenerate: {
            directory: 'reference',
          },
        },
      ],
    }),
    markdoc(),
  ],
})
