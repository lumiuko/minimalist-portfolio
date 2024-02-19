import { Link } from 'react-router-dom'

export default function LinkButton({ to, text, isNative = false }) {
  const classNames =
    'inline-block border-[1px] border-grayish-blue py-4 pl-8 pr-9 text-xs leading-4 tracking-[2px] uppercase hover:bg-grayish-blue hover:text-white transition-colors'

  return isNative ? (
    <a href={to} className={classNames}>
      {text}
    </a>
  ) : (
    <Link to={to} className={classNames}>
      {text}
    </Link>
  )
}
