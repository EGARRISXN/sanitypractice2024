import {CustomPortableText} from '../../shared/CustomPortableText'

export default function Footer(props) {
  const {data} = props
  const footer = data?.footer
  return (
    <footer className='bottom-0 w-full bg-white py-12 text-center md:py-20'>
      {footer && <CustomPortableText paragraphClasses='text-md md:text-xl' value={footer} />}
    </footer>
  )
}
