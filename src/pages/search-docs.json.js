import { getCollection } from 'astro:content'
import { SiteMetadata } from '../config'

const posts = await getCollection('news', (p) => {
  return !p.data.draft
})
const documents = posts.map((post) => ({
  url: import.meta.env.BASE_URL + 'blog/' + post.slug,
  title: post.data.title,
  description: post.data.description,
  author: post.data.author,
  publishDate: post.data.publishDate,
  categories: post.data.categories,
  tags: post.data.tags
}))

export async function GET() {
  return new Response(JSON.stringify(documents), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
