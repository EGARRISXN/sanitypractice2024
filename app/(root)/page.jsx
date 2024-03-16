import dynamic from 'next/dynamic'
import Link from 'next/link'
import {draftMode} from 'next/headers'
import {HomePage} from '@/components/pages/home/HomePage'
import {loadHomePage} from '@/sanity/loader/loadQuery'

const HomePagePreview = dynamic(() => import('@/components/pages/home/HomePagePreview'))

export default async function IndexRoute() {
  const initial = await loadHomePage()

  if (draftMode().isEnabled) {
    return <HomePagePreview initial={initial} />
  }

  if (!initial.data) {
    return (
      <div className='text-center'>
        This is a landing page.
        <br />
        <Link href='/studio' className='underline'>
          Go to the studio!
        </Link>
        <br />
      </div>
    )
  }

  return <HomePage data={initial.data} />
}
