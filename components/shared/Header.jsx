import {CustomPortableText} from './CustomPortableText'

export function Header(props) {
  const { title, description, centered = false } = props
  if (!description && !title) {
    return null
  }
  return (
    <div className={`${centered ? 'text-center' : 'w-5/6 lg:w-3/5'}`}>
      {/* Title */}
      {title && (
        <div className="text-3xl font-extrabold tracking-tight md:text-5xl">
          {title}
        </div>
      )}
      {/* Description */}
      {description && (
        <div className="mt-4 font-serif text-xl text-gray-600 md:text-2xl">
          <CustomPortableText value={description} />
        </div>
      )}
    </div>
  )
}