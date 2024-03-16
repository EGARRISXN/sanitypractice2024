'use client'
import {postBySlugQuery} from '@/sanity/lib/queries'
import {useQuery} from '@/sanity/loader/useQuery'
import PostPage from './PostPage'

export default function PostPreview(props) {
  const { params, initial } = props
  const { data, encodeDataAttribute } = useQuery(
    postBySlugQuery,
    params,
    { initial },
  )

  return <PostPage data={data} encodeDataAttribute={encodeDataAttribute} />
}