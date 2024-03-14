import { getCollection } from 'astro:content'

const news = await getCollection('news', (p) => {
  return !p.data.draft
})
const partners = await getCollection('partner', (p) => {
  return !p.data.draft
})
const documents = news.map((post) => ({
  url: import.meta.env.BASE_URL + 'news/' + post.slug,
  title: post.data.title,
  description: post.data.description,
  author: post.data.author,
  publishDate: post.data.publishDate,
  categories: post.data.categories,
  tags: post.data.tags
})).concat(partners.map(partner => ({
  url: import.meta.env.BASE_URL + 'partner/' + partner.slug,
  title: partner.data.title,
  description: partner.data.description,
  categories: partner.data.categories,
  partner: partner.data.tags
})))

export async function GET() {
  return new Response(JSON.stringify(documents), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
