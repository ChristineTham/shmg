import type { CollectionEntry } from 'astro:content'

interface Props {
  partners: CollectionEntry<'partner'>[]
}

export default function Partners({ partners }: Props) {
  return (
    <main className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl'>
        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {partners.map((partner) => (
            <div className='group relative'>
              <div className='w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75'>
                <img
                  src={partner.data.image!.src}
                  alt={partner.data.title}
                  className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                />
              </div>
              <div className='mt-4 flex justify-between'>
                <div>
                  <h3 className='text-xl text-gray-700'>
                    <a href={'/partner/' + partner.slug}>
                      <span aria-hidden='true' className='absolute inset-0' />
                      {partner.data.title}
                    </a>
                  </h3>
                  <p className='mt-1 text-sm text-gray-500'>{partner.data.cuisine}</p>
                </div>
                <p className='text-xl font-medium text-gray-700'>{partner.data.discount_pct}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
