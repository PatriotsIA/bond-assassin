import { ArrowRight } from 'lucide-react'
import { Reveal } from '../components/motion/Reveal'
import { Card, CardGlow } from '../components/ui/Card'
import { LinkButton } from '../components/ui/LinkButton'
import { PageHeader } from '../components/ui/PageHeader'

export function NotFoundPage() {
  return (
    <div>
      <Reveal>
        <PageHeader
          eyebrow="404"
          title="Page not found"
          subtitle="If you landed here from a shared link, start from Bond Watch Texas or the Home page."
          actions={
            <>
              <LinkButton to="/" variant="primary">
                Go home <ArrowRight className="h-4 w-4" />
              </LinkButton>
              <LinkButton to="/bond-watch" variant="outline">
                Bond Watch Texas
              </LinkButton>
            </>
          }
        />
      </Reveal>

      <Reveal delay={0.08}>
        <Card className="mt-10 p-6">
          <CardGlow />
          <div className="relative text-sm leading-relaxed text-patriot-text">
            Tip: use the top navigation to access all five pages from the website copy document.
          </div>
        </Card>
      </Reveal>
    </div>
  )
}

