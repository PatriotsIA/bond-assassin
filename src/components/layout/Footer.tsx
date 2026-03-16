import { NavLink } from 'react-router-dom'
import { BrandMark } from '../brand/Brand'
import { cn } from '../../lib/cn'

const disclaimer =
  'Political advertising paid for by Patriots for Action PAC • Dan Rogers, Treasurer • 1000 S. Jefferson St., Amarillo, TX 79101 • 806-622-1334'

export function Footer() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'text-sm font-semibold text-patriot-white/80 transition hover:text-patriot-white',
      isActive && 'text-patriot-white',
    )

  return (
    <footer className="relative bg-patriot-navy text-patriot-white">
      <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-patriot-red via-patriot-blue to-patriot-white" />
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.9fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <BrandMark className="h-10 w-10" />
              <div>
                <div className="font-display text-lg tracking-wide">Bond Assassins</div>
                <div className="text-sm text-patriot-white/70">
                  They float the bonds. We stop them.
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-patriot-white/75">
              A Texas-based voter contact and civic organizing program of Patriots for Action
              PAC—built to identify bond elections early and help taxpayers show up informed.
            </p>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-white/70">
              Pages
            </div>
            <div className="mt-3 grid gap-2">
              <NavLink to="/" className={linkClass} end>
                Home
              </NavLink>
              <NavLink to="/bond-watch" className={linkClass}>
                Bond Watch Texas
              </NavLink>
              <NavLink to="/how-to-fight" className={linkClass}>
                How to Fight a Bond
              </NavLink>
              <NavLink to="/request-help" className={linkClass}>
                Request Help
              </NavLink>
              <NavLink to="/about" className={linkClass}>
                About & Support
              </NavLink>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-white/70">
              Contact
            </div>
            <div className="mt-3 grid gap-2 text-sm text-patriot-white/80">
              <a className="hover:text-patriot-white" href="mailto:dan@patriotsinaction.com">
                dan@patriotsinaction.com
              </a>
              <a className="hover:text-patriot-white" href="tel:+18066221334">
                806-622-1334
              </a>
              <a
                className="hover:text-patriot-white"
                href="https://patriotsinaction.com/"
                target="_blank"
                rel="noreferrer"
              >
                PatriotsInAction.com
              </a>
              <a
                className="hover:text-patriot-white"
                href="https://patriotsforaction.org/"
                target="_blank"
                rel="noreferrer"
              >
                PatriotsforAction.org
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-white/15 bg-white/10 p-4">
          <div className="text-xs leading-relaxed text-patriot-white/80">{disclaimer}</div>
        </div>

        <div className="mt-6 flex flex-col gap-2 text-xs text-patriot-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Bond Assassins</div>
          <div className="font-medium tracking-wide">Texas goes first.</div>
        </div>
      </div>
    </footer>
  )
}

