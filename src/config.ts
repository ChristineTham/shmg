import type { CollectionEntry } from 'astro:content'

export type Frontmatter = CollectionEntry<'news'>['data']

export interface TagType {
  tag: string
  count: number
  pages: CollectionEntry<'news'>[]
}

export const SiteMetadata = {
  title: 'Sydney Hills Makan Group',
  description: 'Indulge in the world of flavors with SHMG – where culinary delights meet community spirit! 🍲 "Makan" meaning "Eat" in Malaysian & Singaporean Malay and Indonesian language.',
  author: {
    name: 'Chris Tham',
    twitter: '@chris1tham',
    url: 'https://christham.net',
    email: 'chris@christham.net',
    summary: 'Outrageous actualiser.'
  },
  org: {
    name: 'Hello Tham',
    twitter: '@hellothamcom',
    url: 'https://hellotham.com',
    email: 'info@hellotham.com',
    summary:
      'Hello Tham is a boutique management consulting firm. We specialise in Business and IT strategies, operating models, strategic roadmaps, enterprise architecture, analytics and business process design.'
  },
  location: 'Sydney, NSW, Australia',
  latlng: [-33.86785, 151.20732] as [number, number],
  repository: 'https://github.com/ChristineTham/shmg',
  buildTime: new Date()
}

export { default as Logo } from './assets/images/logo.jpg'
export { default as DefaultImage } from './assets/images/banner.jpg'

export const NavigationLinks = [
  { name: 'Home', href: '' },
  { name: 'About', href: 'about' },
  { name: 'Contact', href: 'contact' },
  { name: 'News', href: 'news' },
  { name: 'Partners', href: 'partners' }
]

export const PAGE_SIZE = 6

export const GITHUB_EDIT_URL = `https://github.com/ChristineTham/shmg`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

export type Sidebar = Record<string, { text: string; link: string }[]>

export const SIDEBAR: Sidebar = {
  'Section Header': [
    { text: 'Introduction', link: 'doc/introduction' },
    { text: 'Page 2', link: 'doc/page-2' },
    { text: 'Page 3', link: 'doc/page-3' }
  ],
  'Another Section': [{ text: 'Page 4', link: 'doc/page-4' }]
}
