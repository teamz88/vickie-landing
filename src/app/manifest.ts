import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vickie Voice AI Agent',
    short_name: 'Vickie AI',
    description: 'AI phone assistant that transforms missed calls into booked appointments',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#19331B',
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}