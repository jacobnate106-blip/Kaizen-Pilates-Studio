import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-[1.5rem] bg-stone/20 dark:bg-charcoal/60 p-[2rem] sm:p-[2.5rem] border border-silver/30 dark:border-slate/60 shadow-sm">
      <div className="flex flex-col gap-[0.5rem]">
        <span className="font-sans text-[0.75rem] tracking-[0.2em] uppercase text-slate dark:text-silver font-medium">
          Direct Inquiry
        </span>
        <h3 className="font-serif text-[1.75rem] sm:text-[2rem] font-normal text-ink dark:text-frost">
          Send a Message
        </h3>
        <p className="font-sans text-[0.875rem] text-slate dark:text-stone/90 leading-[1.6]">
          Fill in the details below. We typically respond within one business day.
        </p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-[1.25rem]">
          {/* Name Field */}
          <div className="flex flex-col gap-[0.375rem]">
            <label
              htmlFor="contact-name"
              className="font-sans text-[0.75rem] tracking-[0.1em] uppercase text-slate dark:text-silver"
            >
              Full Name *
            </label>
            <input
              id="contact-name"
              required
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your full name"
              className="w-full px-[1rem] py-[0.75rem] bg-frost dark:bg-ink border border-silver/40 dark:border-slate/60 text-ink dark:text-frost text-[0.875rem] focus:outline-none focus:border-ink dark:focus:border-frost transition-colors"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-[0.375rem]">
            <label
              htmlFor="contact-email"
              className="font-sans text-[0.75rem] tracking-[0.1em] uppercase text-slate dark:text-silver"
            >
              Email Address *
            </label>
            <input
              id="contact-email"
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="you@domain.com"
              className="w-full px-[1rem] py-[0.75rem] bg-frost dark:bg-ink border border-silver/40 dark:border-slate/60 text-ink dark:text-frost text-[0.875rem] focus:outline-none focus:border-ink dark:focus:border-frost transition-colors"
            />
          </div>

          {/* Phone Field */}
          <div className="flex flex-col gap-[0.375rem]">
            <label
              htmlFor="contact-phone"
              className="font-sans text-[0.75rem] tracking-[0.1em] uppercase text-slate dark:text-silver"
            >
              Phone Number
            </label>
            <input
              id="contact-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 (703) 000-0000"
              className="w-full px-[1rem] py-[0.75rem] bg-frost dark:bg-ink border border-silver/40 dark:border-slate/60 text-ink dark:text-frost text-[0.875rem] focus:outline-none focus:border-ink dark:focus:border-frost transition-colors"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-[0.375rem]">
            <label
              htmlFor="contact-message"
              className="font-sans text-[0.75rem] tracking-[0.1em] uppercase text-slate dark:text-silver"
            >
              Message *
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="How can we assist your practice?"
              className="w-full px-[1rem] py-[0.75rem] bg-frost dark:bg-ink border border-silver/40 dark:border-slate/60 text-ink dark:text-frost text-[0.875rem] focus:outline-none focus:border-ink dark:focus:border-frost transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-[0.875rem] bg-ink text-frost hover:bg-charcoal dark:bg-frost dark:text-ink dark:hover:bg-stone text-[0.8125rem] font-medium tracking-[0.15em] uppercase transition-colors"
          >
            Send Message
          </button>
        </form>
      ) : (
        <div className="flex flex-col items-center text-center gap-[1.25rem] py-[2rem]">
          <div className="w-[3rem] h-[3rem] flex items-center justify-center rounded-full bg-stone/40 dark:bg-ink text-ink dark:text-frost text-[1.25rem]">
            ✓
          </div>
          <h4 className="font-serif text-[1.75rem] font-normal text-ink dark:text-frost">
            Message Sent Successfully
          </h4>
          <p className="font-sans text-[0.875rem] text-slate dark:text-stone leading-[1.6]">
            Thank you, {formData.name || 'there'}. We have received your inquiry and our studio coordinator
            will reply to <strong>{formData.email}</strong> shortly.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', email: '', phone: '', message: '' });
            }}
            className="mt-[0.5rem] px-[1.5rem] py-[0.5rem] text-[0.75rem] font-sans tracking-[0.1em] uppercase text-slate dark:text-silver hover:text-ink dark:hover:text-frost border-b border-silver/50"
          >
            Send Another Note
          </button>
        </div>
      )}
    </div>
  );
};
