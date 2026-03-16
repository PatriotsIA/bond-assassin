import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      className={cn('h-9 w-9', className)}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Bond Assassins"
    >
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#c1121f" />
          <stop offset="0.52" stopColor="#f8fafc" stopOpacity="0.95" />
          <stop offset="1" stopColor="#1b3a8a" />
        </linearGradient>
      </defs>
      <path
        d="M32 4c10 6 18 7 24 8v21c0 14-9 22-24 27C17 55 8 47 8 33V12c6-1 14-2 24-8Z"
        fill="rgba(10,18,38,0.65)"
        stroke="url(#g)"
        strokeWidth="2"
      />
      <path
        d="M18 22h15c7 0 12 4 12 10 0 7-6 10-13 10H18V22Zm8 7v7h7c2.5 0 4-1.3 4-3.5S35.5 29 33 29h-7Z"
        fill="#f8fafc"
        opacity="0.95"
      />
      <path
        d="M40.5 21.5 47 28l-8 8"
        fill="none"
        stroke="#1b3a8a"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  )
}

export function BrandLockup({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn('group inline-flex items-center gap-3', className)}>
      <BrandMark className="shrink-0 transition-transform duration-300 group-hover:scale-[1.03]" />
      <div className="leading-tight">
        <div className="font-display text-lg tracking-wide text-patriot-navy">
          Bond Assassins
        </div>
        <div className="text-xs font-medium text-patriot-muted">
          They float the bonds. We stop them.
        </div>
      </div>
    </Link>
  )
}

