import { getCollection } from 'astro:content'
import lunr from 'lunr'

const posts = await getCollection('news', (p) => {
  return !p.data.draft
})
const partners = await getCollection('partner', (p) => {
  return !p.data.draft
})
const documents = posts
  .map((post) => ({
    url: import.meta.env.BASE_URL + 'news/' + post.slug,
    title: post.data.title,
    description: post.data.description,
    author: post.data.author,
    categories: post.data.categories && post.data.categories.join(' '),
    tags: post.data.tags && post.data.tags.join(' '),
    content: post.body
  }))
  .concat(
    partners.map((partner) => ({
      url: import.meta.env.BASE_URL + 'partner/' + partner.slug,
      title: partner.data.title,
      description: partner.data.description,
      categories: partner.data.categories,
      partner: partner.data.tags
    }))
  )

const idx = lunr(function () {
  this.ref('url')
  this.field('title')
  this.field('description')
  this.field('author')
  this.field('categories')
  this.field('tags')
  this.field('content')

  documents.forEach(function (doc) {
    this.add(doc)
  }, this)
})

export async function GET() {
  return new Response(JSON.stringify(idx), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
