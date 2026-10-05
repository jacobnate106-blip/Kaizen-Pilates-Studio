import React, { useState } from 'react';
import { BookingButton } from '../components/common/BookingButton';
import { SectionDivider } from '../components/common/SectionDivider';
import { HeroBackground } from '../components/common/HeroBackground';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 2. OPENING SECTION — Immersive Hero with Dynamic Light/Dark Background Images */}
      <section className="relative w-full min-h-[55vh] md:min-h-[65vh] flex flex-col justify-end bg-stone dark:bg-ink text-ink dark:text-frost overflow-hidden transition-colors duration-500">
        <HeroBackground
          lightSrc="/images/1000088190-150kb.jpg"
          darkSrc="/images/1000088192-150kb.jpg"
          alt="Contact KAIZEN Pilates Studio in Lorton, VA"
          priority={true}
        />

        <div className="relative z-10 w-full max-w-[90rem] mx-auto px-[1.5rem] md:px-[3rem] py-[4rem] md:py-[5.5rem] flex flex-col items-start gap-[1.25rem]">
          <span className="font-sans text-[0.75rem] md:text-[0.8125rem] tracking-[0.25em] uppercase text-charcoal/90 dark:text-stone font-semibold">
            CONTACT
          </span>

          <h1 className="font-serif text-[3rem] sm:text-[4.25rem] md:text-[5rem] leading-[1.05] font-normal text-ink dark:text-frost">
            Let's connect.
          </h1>

          <p className="font-sans text-[1.0625rem] md:text-[1.1875rem] leading-[1.65] text-charcoal/95 dark:text-stone/95 max-w-[36rem]">
            Have a question about Pilates, private sessions, or whether KAIZEN is right for you? I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Consistent Section Divider below hero */}
      <SectionDivider />

      {/* 3. CONTACT FORM & DETAILS */}
      <section className="w-full bg-sand/30 dark:bg-charcoal/20 py-[4.5rem] md:py-[6rem] px-[1.5rem] md:px-[3rem] transition-colors">
        <div className="w-full max-w-[80rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[3.5rem] lg:gap-[5rem] items-start">
          {/* Left Column — Form (stacks vertically on mobile) */}
          <div className="lg:col-span-7 bg-frost dark:bg-charcoal p-[2rem] sm:p-[3rem] border border-stone/60 dark:border-slate/60 shadow-xs">
            <h2 className="font-serif text-[1.75rem] sm:text-[2.25rem] font-normal text-ink dark:text-frost mb-[1.75rem]">
              Send me a message.
            </h2>

            {submitted ? (
              <div className="p-[2rem] bg-sand/40 dark:bg-charcoal/40 border border-stone dark:border-slate text-center flex flex-col items-center gap-[1rem]">
                <p className="font-serif text-[1.375rem] text-ink dark:text-frost">
                  Thank you for reaching out. I'll be in touch soon.
                </p>
                <p className="font-sans text-[0.8125rem] text-slate dark:text-silver">
                  Form submissions should be delivered to luwam@kaizenpilatesstudio.com.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setPhone('');
                    setMessage('');
                  }}
                  className="mt-[1rem] text-[0.75rem] uppercase font-mono tracking-wider underline text-slate hover:text-ink dark:text-silver dark:hover:text-frost"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-[1.5rem]">
                {/* 1. Name */}
                <div className="flex flex-col gap-[0.5rem]">
                  <label htmlFor="name" className="font-sans text-[0.8125rem] uppercase tracking-wider text-slate dark:text-silver font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-[1rem] py-[0.75rem] bg-frost dark:bg-ink border border-stone/80 dark:border-slate/70 text-ink dark:text-frost font-sans text-[0.9375rem] focus:outline-none focus:border-ink dark:focus:border-frost"
                  />
                </div>

                {/* 2. Email */}
                <div className="flex flex-col gap-[0.5rem]">
                  <label htmlFor="email" className="font-sans text-[0.8125rem] uppercase tracking-wider text-slate dark:text-silver font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-[1rem] py-[0.75rem] bg-frost dark:bg-ink border border-stone/80 dark:border-slate/70 text-ink dark:text-frost font-sans text-[0.9375rem] focus:outline-none focus:border-ink dark:focus:border-frost"
                  />
                </div>

                {/* 3. Phone number — optional */}
                <div className="flex flex-col gap-[0.5rem]">
                  <label htmlFor="phone" className="font-sans text-[0.8125rem] uppercase tracking-wider text-slate dark:text-silver font-medium">
                    Phone number — optional
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-[1rem] py-[0.75rem] bg-frost dark:bg-ink border border-stone/80 dark:border-slate/70 text-ink dark:text-frost font-sans text-[0.9375rem] focus:outline-none focus:border-ink dark:focus:border-frost"
                  />
                </div>

                {/* 4. Your message */}
                <div className="flex flex-col gap-[0.5rem]">
                  <label htmlFor="message" className="font-sans text-[0.8125rem] uppercase tracking-wider text-slate dark:text-silver font-medium">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me what you'd like to know or what brings you to Pilates."
                    className="w-full px-[1rem] py-[0.75rem] bg-frost dark:bg-ink border border-stone/80 dark:border-slate/70 text-ink dark:text-frost font-sans text-[0.9375rem] placeholder:text-slate/50 dark:placeholder:text-silver/50 focus:outline-none focus:border-ink dark:focus:border-frost"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-[0.5rem] self-start px-[2.5rem] py-[0.9375rem] bg-ink text-frost hover:bg-charcoal active:scale-[0.98] dark:bg-frost dark:text-ink dark:hover:bg-stone text-[0.8125rem] font-medium tracking-[0.14em] uppercase transition-all duration-300 shadow-sm"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right Column — Contact Details (stacks vertically on mobile) */}
          <div className="lg:col-span-5 flex flex-col gap-[2.5rem]">
            <div className="flex flex-col gap-[1.5rem] p-[2rem] sm:p-[2.5rem] bg-frost dark:bg-charcoal border border-stone/60 dark:border-slate/60">
              <div className="flex flex-col gap-[0.5rem]">
                <h3 className="font-sans text-[0.8125rem] uppercase tracking-[0.2em] text-slate dark:text-silver font-semibold">
                  Email
                </h3>
                <a
                  href="mailto:luwam@kaizenpilatesstudio.com"
                  className="font-serif text-[1.25rem] md:text-[1.375rem] text-ink dark:text-frost hover:opacity-80 transition-opacity underline underline-offset-4 decoration-stone/50 hover:decoration-frost"
                >
                  luwam@kaizenpilatesstudio.com
                </a>
              </div>

              <div className="pt-[1rem] border-t border-stone/40 dark:border-slate/40 flex flex-col gap-[0.5rem]">
                <h3 className="font-sans text-[0.8125rem] uppercase tracking-[0.2em] text-slate dark:text-silver font-semibold">
                  Phone
                </h3>
                <span className="font-serif text-[1.25rem] md:text-[1.375rem] text-ink dark:text-frost">
                  TBD
                </span>
              </div>

              <div className="pt-[1rem] border-t border-stone/40 dark:border-slate/40 flex flex-col gap-[0.25rem] text-[0.875rem] font-sans text-slate dark:text-silver">
                <p className="font-medium text-ink dark:text-frost">KAIZEN Pilates Studio</p>
                <p>Private Classical Pilates</p>
                <p>Lorton, Virginia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 4. BOOKING INVITATION */}
      <section className="w-full bg-sand/40 dark:bg-charcoal/30 py-[5rem] md:py-[6.5rem] px-[1.5rem] md:px-[3rem] transition-colors border-t border-stone/50 dark:border-slate/50 text-center">
        <div className="w-full max-w-[40rem] mx-auto flex flex-col items-center gap-[1.5rem]">
          <h2 className="font-serif text-[2.5rem] sm:text-[3.25rem] md:text-[3.75rem] leading-[1.12] font-normal text-ink dark:text-frost">
            Ready for your first session?
          </h2>

          <p className="font-sans text-[1.0625rem] md:text-[1.125rem] leading-[1.7] text-slate dark:text-silver max-w-[32rem]">
            If you're ready to begin, you can book your introductory private session directly.
          </p>

          <div className="pt-[1rem]">
            <BookingButton />
          </div>
        </div>
      </section>
    </div>
  );
};
