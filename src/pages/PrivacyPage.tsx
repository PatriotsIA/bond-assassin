import { Reveal } from '../components/motion/Reveal'
import { Card, CardGlow } from '../components/ui/Card'
import { PageHeader } from '../components/ui/PageHeader'
import { Section } from '../components/ui/Section'
import { CONTACT_EMAIL } from '../config/contact'

const org = 'Bond Assassins'
const committee = 'Patriots for Action PAC'

export function PrivacyPage() {
  return (
    <div>
      <Reveal>
        <PageHeader
          eyebrow="Legal"
          title="Privacy policy"
          subtitle={`Privacy Policy for ${org} — a program of ${committee} — aligned with common website requirements for political texting registration and vetting.`}
        />
      </Reveal>

      <Section title="Privacy Policy" kicker="Website">
        <Reveal>
          <Card>
            <CardGlow />
            <div className="relative space-y-8 text-sm leading-relaxed text-patriot-text sm:text-base">
              <p>
                {org}, operated as part of {committee} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), is committed to protecting the privacy of
                visitors and users (&quot;you&quot; or &quot;your&quot;) of this website. This Privacy Policy outlines our practices
                regarding collection, use, and disclosure of personal information through our website. By using our website,
                you consent to this Privacy Policy.
              </p>

              <div className="space-y-3">
                <h2 className="font-display text-xl font-bold tracking-wide text-patriot-navy">1. Information we collect</h2>
                <p className="font-semibold text-patriot-navy">a) Personal information</p>
                <p>
                  We may collect name, email address, phone number, county, bond election details, and other information you
                  submit through our forms.
                </p>
                <p className="font-semibold text-patriot-navy">b) Text messaging opt-in data</p>
                <p>
                  If you opt in to text alerts or similar programs, we may collect your phone number and related data
                  required for messaging services.
                </p>
                <p className="font-semibold text-patriot-navy">c) Automatically collected information</p>
                <p>
                  We may automatically collect device, browser, and usage information (for example IP address, cookies) when
                  such technologies are enabled.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-xl font-bold tracking-wide text-patriot-navy">2. Use of information</h2>
                <p className="font-semibold text-patriot-navy">a) General uses</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>To respond to help requests and bond election reports;</li>
                  <li>To send alerts, updates, and committee-related messages you have opted into;</li>
                  <li>To operate and improve the website;</li>
                  <li>To comply with law and political committee reporting requirements.</li>
                </ul>
                <p className="font-semibold text-patriot-navy">b) Text messaging opt-in data</p>
                <p>
                  Phone numbers collected for texting will be used to send program-related messages you consented to
                  receive.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-xl font-bold tracking-wide text-patriot-navy">3. Sharing of information</h2>
                <p className="font-semibold text-patriot-navy">a) General</p>
                <p>
                  <strong className="text-patriot-navy">
                    We will not share, sell, rent, or disclose your personal information to any third parties,
                  </strong>{' '}
                  except as described in this Privacy Policy or when required by law. We may use service providers (hosting,
                  forms, email, SMS) solely to perform services on our behalf under agreements consistent with this Policy.
                </p>
                <p className="font-semibold text-patriot-navy">b) Text messaging opt-in data</p>
                <p>
                  <strong className="text-patriot-navy">
                    We will not share or sell your text messaging opt-in data, consent, or related personal information with
                    any third parties,
                  </strong>{' '}
                  unless required by law.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-xl font-bold tracking-wide text-patriot-navy">4. Data security</h2>
                <p>We use reasonable safeguards; no method of transmission is 100% secure.</p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-xl font-bold tracking-wide text-patriot-navy">5. Third-party services</h2>
                <p>
                  Our site may link to third parties. We are not responsible for their privacy practices.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-xl font-bold tracking-wide text-patriot-navy">6. Children&apos;s privacy</h2>
                <p>This site is not intended for users under 13.</p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-xl font-bold tracking-wide text-patriot-navy">7. Updates</h2>
                <p>We may update this Privacy Policy; changes are effective when posted.</p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-xl font-bold tracking-wide text-patriot-navy">8. Contact us</h2>
                <p>
                  <a className="font-semibold text-patriot-blue underline" href={`mailto:${CONTACT_EMAIL}`}>
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </div>
            </div>
          </Card>
        </Reveal>
      </Section>
    </div>
  )
}
