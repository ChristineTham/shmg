// 1. Import your utilities and schemas
import { z, defineCollection, reference } from 'astro:content'

const partner = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      cuisine: z.string().optional(),
      image: image().optional(),
      categories: z.array(reference('category')).optional(),
      tags: z.array(z.string()).optional(),
      halal: z.boolean().default(true),
      discount_pct: z.number().optional(),
      discount_text: z.string().optional(),
      comment: z.string().optional()
    })
})

// 2. Define your collections
const news = defineCollection({
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().optional(),
      title: z.string(),
      description: z.string(),
      author: reference('author').optional(),
      publishDate: z.date(),
      coverSVG: image().optional(),
      coverImage: image().optional(),
      socialImage: image().optional(),
      images: z.array(image()).optional(),
      gallery: z.string().optional(),
      categories: z.array(reference('category')).optional(),
      tags: z.array(z.string()).optional(),
      extra: z.array(z.enum(['math', 'markmap', 'mermaid', 'gallery'])).optional(),
      minutesRead: z.string().optional()
    })
})

const category = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      coverSVG: image(),
      socialImage: image()
    })
})

const author = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      contact: z.string()
    })
})

const social = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    link: z.string(),
    icon: z.string()
  })
})

// 3. Export multiple collections to register them
export const collections = {
  news,
  partner,
  category,
  author,
  social
}
