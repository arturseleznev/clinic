import { clinic } from '../data/content'

type BookCallProps = {
  className?: string
  label?: string
  size?: 'default' | 'sm'
  onClick?: () => void
}

export function BookCall({
  className = '',
  label = 'Записаться',
  size = 'default',
  onClick,
}: BookCallProps) {
  return (
    <div
      className={`book-call ${size === 'sm' ? 'book-call--sm' : ''} ${className}`.trim()}
    >
      <span className="book-call__label">{label}</span>
      <span className="book-call__phone book-call__phone--static">
        {clinic.phone}
      </span>
      <a
        href={clinic.phoneHref}
        className="book-call__phone book-call__phone--link"
        onClick={onClick}
      >
        {clinic.phone}
      </a>
    </div>
  )
}
