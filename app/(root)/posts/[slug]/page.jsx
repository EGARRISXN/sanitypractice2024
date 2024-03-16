import dynamic from 'next/dynamic'
import {draftMode} from 'next/headers'
import {notFound} from 'next/navigation'
import {toPlainText} from 'next-sanity'
import {urlForOpenGraphImage} from '@/sanity/lib/image'
import {generateStaticSlugs} from '@/sanity/loader/generateStaticSlugs'
import {PostPage} from '@/components/pages/posts/PostPage'
import {loadPost} from '@/sanity/loader/loadQuery'

const PostPreview = dynamic(() => import('@/components/pages/posts/PostPreview'))

export async function generateMetadata({params}, parent) {
  const {data: post} = await loadPost(params.slug)
  const ogImage = urlForOpenGraphImage(post?.coverImage)

  return {
    title: post?.title,
    description: post?.overview ? toPlainText(post.overview) : (await parent).description,
    openGraph: ogImage
      ? {
          images: [ogImage, ...((await parent).openGraph?.images || [])],
        }
      : {},
  }
}

export function generateStaticParams() {
  return generateStaticSlugs('post')
}

export default async function PostSlugRoute({params}) {
  const initial = await loadPost(params.slug)

  if (draftMode().isEnabled) {
    return <PostPreview params={params} initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <PostPage data={initial.data} />
}
