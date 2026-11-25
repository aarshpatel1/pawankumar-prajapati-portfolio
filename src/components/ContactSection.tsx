import React, { useState } from 'react';
import { DESIGNER_PROFILE } from '../data/works';
import { useInView } from '../hooks/useInView';
import { EditorialParens, FooterSignOffSquiggle } from './Squiggles';

const SCOPES = [
  'Brand Identity',
  'Packaging Design',
  'Editorial / Print',
  'Poster & Campaign',
  'Full-Time / Studio Role',
];

export const ContactSection: React.FC = () => {
  const { ref: sectionRef, isVisible } = useInView<HTMLElement>({ threshold: 0.08 });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedScope, setSelectedScope] = useState('Brand Identity');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`relative mx-auto max-w-[1180px] px-6 pt-12 pb-20 sm:px-10 md:pt-16 md:pb-24 scroll-reveal ${
        isVisible ? 'scroll-reveal-visible' : ''
      }`}
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-6 sm:gap-12">
          <span className="font-editorial pt-3 text-[18px] text-charcoal">
            04
          </span>

          <h2 className="font-editorial text-[40px] leading-[1.04] text-black sm:text-[56px]">
            Have a <em>story</em> that needs
            <span className="mt-1 block sm:pl-[18%]">
              a <em>visual voice?</em>
            </span>
          </h2>
        </div>

        <div className="lg:pr-6">
          <EditorialParens>
            <p className="m-0">{DESIGNER_PROFILE.availability}</p>
            <p className="m-0">Replies within 24 hours</p>
          </EditorialParens>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
        <div className="space-y-5 lg:col-span-5">
          <p className="font-ui text-[14px] leading-[1.55] text-charcoal">
            Whether you need a complete visual identity, packaging dielines, or a
            print-ready publication, reach out directly:
          </p>

          <div className="space-y-2.5 font-ui">
            <a
              href={`mailto:${DESIGNER_PROFILE.email}`}
              className="coral-inline-link block text-[15px]"
            >
              {DESIGNER_PROFILE.email}
            </a>

            <div className="flex flex-wrap gap-5 pt-1 text-[14px]">
              {DESIGNER_PROFILE.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="coral-inline-link"
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>

          <FooterSignOffSquiggle className="mt-4 w-[160px]" />
        </div>

        <div className="lg:col-span-7">
          <div className="sketch-card p-7 sm:p-[48px]">
            {submitted ? (
              <div className="space-y-5 py-4">
                <p className="font-ui text-[13px] text-charcoal">
                  (Draft ready on warm paper ✓)
                </p>
                <h3 className="font-editorial text-[30px] leading-[1.2] text-black sm:text-[36px]">
                  Thank you, <em>{name}</em> — let’s bring this idea to print &amp; screen.
                </h3>
                <p className="font-ui text-[14px] leading-[1.55] text-charcoal">
                  Your inquiry about <strong>{selectedScope}</strong> is ready to send to{' '}
                  {DESIGNER_PROFILE.fullName}. Launch it in your email client below:
                </p>

                <div className="flex flex-wrap items-center gap-5 pt-2">
                  <a
                    href={`mailto:${DESIGNER_PROFILE.email}?subject=${encodeURIComponent(
                      `Design Inquiry (${selectedScope}) — ${name}`
                    )}&body=${encodeURIComponent(
                      `Hi Pawankumar,\n\n${message}\n\n— ${name} (${email})`
                    )}`}
                    className="pill-cta px-8 py-4 text-[13px] no-underline"
                  >
                    OPEN IN EMAIL APP
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="coral-inline-link bg-transparent p-0 font-ui text-[14px]"
                  >
                    write another note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <span className="mb-2 block font-ui text-[13px] text-charcoal">
                    Project Focus
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {SCOPES.map((scope) => (
                      <button
                        key={scope}
                        type="button"
                        onClick={() => setSelectedScope(scope)}
                        className={`pill-chip ${
                          selectedScope === scope ? 'pill-chip-active' : ''
                        }`}
                      >
                        {scope}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="inquiry-name" className="sr-only">
                      Your name
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="sketch-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiry-email" className="sr-only">
                      Your email
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="sketch-input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiry-message" className="sr-only">
                    Tell Pawankumar about your project
                  </label>
                  <textarea
                    id="inquiry-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell Pawankumar about your brand, deliverables, or timeline..."
                    className="sketch-input resize-y"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="pill-cta w-full px-10 py-6 sm:py-8"
                  >
                    SEND INQUIRY
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
