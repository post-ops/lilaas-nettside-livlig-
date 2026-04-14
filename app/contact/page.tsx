import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <main className="page-shell">
      <p className="eyebrow">Service and Support</p>
      <h1 className="hero-title">How can we assist your project?</h1>
      <p className="hero-lead">
        Share your vessel profile, control scope and timeline, and we will return with a recommended setup and next technical steps.
        Typical response time is within one business day.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <section className="info-panel">
          <h2 className="text-xl font-semibold">Direct Contact</h2>
          <p className="mt-3 text-sm text-slate-400">Best for urgent project clarification and technical alignment.</p>
          <p className="mt-4 text-slate-300">
            Phone: <a href="tel:+4741633000" className="text-link hover:text-linkHover">+47 416 33 000</a>
          </p>
          <p className="mt-2 text-sm text-slate-400">Phone preferred for urgent inquiries.</p>
          <p className="mt-3 text-slate-300">
            Email: <a href="mailto:lilaas@lilaas.no" className="text-link hover:text-linkHover">lilaas@lilaas.no</a>
          </p>
          <p className="mt-3 text-slate-300">
            Address:{" "}
            <a
              href="https://www.google.com/maps?q=Kongeveien+75,+3188+Horten"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:text-linkHover"
            >
              Kongeveien 75, 3188 Horten, Norway
            </a>
          </p>
          <p className="mt-3 text-sm text-slate-400">Phone hours: Mon-Fri 08:00-16:00 CET</p>
          <div className="mt-5 rounded-lg border border-cyan-800/40 bg-field/70 p-4 text-sm text-slate-300">
            <p className="font-medium text-white">To speed up your request, include:</p>
            <ul className="mt-2 space-y-1">
              <li>- Vessel type and operating profile</li>
              <li>- Required control functions and interfaces</li>
              <li>- Project timeline and delivery expectations</li>
            </ul>
          </div>
        </section>

        <section className="info-panel">
          <h2 className="text-xl font-semibold">Send Technical Request</h2>
          <p className="mt-3 text-sm text-slate-400">Your inquiry is routed to engineering for direct follow-up.</p>
          <div className="mt-4">
            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
}
