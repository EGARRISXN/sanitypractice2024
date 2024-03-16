import Image from 'next/image'
import Link from 'next/link'

function Box({circleTitle, element}) {
  return (
    <li className='mt-2 grid grid-flow-col grid-rows-1 place-content-start gap-3'>
      <div className='row-span-3 select-none'>
        <div className='relative flex h-5 w-5 select-none items-center justify-center rounded-full bg-gray-200 p-3 text-center'>
          {circleTitle}
        </div>
      </div>
      {element}
    </li>
  )
}

function BlueLink({href, text}) {
  return (
    <a
      href={href}
      className='text-blue-500 underline hover:text-blue-800'
      target='_blank'
      rel='noreferrer'
    >
      {text}
    </a>
  )
}

function RemoveBlock({url}) {
  return (
    <a className='hover:text-blue-800' href={url} target='_blank' rel='noreferrer'>
      How to remove this block?
    </a>
  )
}

export default function Intro() {
  return (
    <div className='flex justify-center border-t border-gray-100 bg-gray-50/50'>
      <div className='mb-4 mt-20 grid max-w-screen-2xl grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32 '>
        <div className='self-center'>
          <Image
            alt='An illustration of a browser window, a terminal window, the Sanity.io logo and the NextJS logo'
            src='/cover.png'
            width={500}
            height={500}
            priority
          />
          <div className='mt-10 hidden px-14 text-xs text-gray-700 md:block'>
            <RemoveBlock url='https://www.google.com/' />
          </div>
        </div>

        <div className='mx-6 md:mx-0 md:mr-24'>
          <h2 className='mb-5 text-xl font-bold tracking-tight md:text-5xl'>Next steps</h2>

          <ol>
            <Box
              circleTitle='1'
              element={
                <div>
                  <div className='col-span-2 mb-2 mt-1 font-semibold'>
                    Create content with Sanity Studio
                  </div>
                  <div className='text-xs text-gray-700'>
                    Your Sanity Studio is deployed at
                    <Link className='mx-1 underline hover:text-blue-800' href='./studio'>
                      Here
                    </Link>
                  </div>

                  <div className='mt-3'>
                    <Link
                      className='inline-flex rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-800'
                      href='./studio'
                    >
                      Go to Sanity Studio
                    </Link>
                  </div>
                </div>
              }
            />

            <Box
              circleTitle='2'
              element={
                <div>
                  <div className='col-span-2 mb-3 mt-1 font-semibold'>Learn more and get help</div>
                  <ul>
                    <li className='mb-2'>
                      <BlueLink href='https://www.sanity.io/docs' text='Documentation for Sanity' />
                    </li>
                    <li className='mb-2'>
                      <BlueLink href='https://nextjs.org/docs' text='Documentation for Next.js' />
                    </li>
                    <li className='mb-2'>
                      <BlueLink href='https://slack.sanity.io/' text='Join the Sanity Community' />
                    </li>
                  </ul>
                </div>
              }
            />
          </ol>
          <div className='text-center text-xs text-gray-700 md:invisible'>
            <RemoveBlock url='https://www.google.com/' />
          </div>
        </div>
      </div>
    </div>
  )
}
