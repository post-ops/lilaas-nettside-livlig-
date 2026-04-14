"use client";

import { FormEvent, useState } from "react";
import { event } from "@/lib/analytics";

export function ContactForm() {
  const [started, setStarted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleFocus = () => {
    if (started) return;
    setStarted(true);
    event("form_start", { form: "contact" });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    event("form_submit", { form: "contact" });

    const subject = encodeURIComponent(`Engineering inquiry from ${company || name || "website"}`);
    const body = encodeURIComponent(
      [
        `Name: ${name || "-"}`,
        `Email: ${email || "-"}`,
        `Company: ${company || "-"}`,
        "",
        "Project message:",
        message || "-"
      ].join("\n")
    );

    window.location.href = `mailto:lilaas@lilaas.no?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <form className="space-y-4" onFocus={handleFocus} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full rounded-md border border-slate-500/35 bg-field/90 px-4 py-3 text-sm outline-none transition focus:border-accent"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full rounded-md border border-slate-500/35 bg-field/90 px-4 py-3 text-sm outline-none transition focus:border-accent"
      />
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="w-full rounded-md border border-slate-500/35 bg-field/90 px-4 py-3 text-sm outline-none transition focus:border-accent"
      />
      <textarea
        placeholder="Message"
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="w-full rounded-md border border-slate-500/35 bg-field/90 px-4 py-3 text-sm outline-none transition focus:border-accent"
      />
      <button
        type="submit"
        className="cta-primary w-full md:w-auto"
        onClick={() =>
          event("cta_click", {
            location: "final",
            label: "Contact Lilaas"
          })
        }
      >
        Contact Lilaas
      </button>
      {submitted ? <p className="text-xs text-slate-400">Your mail app should now open with your draft inquiry.</p> : null}
      <div className="flex flex-wrap gap-3 pt-2">
        <a
          href="mailto:lilaas@lilaas.no"
          className="text-sm font-medium text-link hover:text-linkHover"
          onClick={() => event("email_click", { location: "contact" })}
        >
          lilaas@lilaas.no
        </a>
        <a
          href="tel:+4741633000"
          className="text-sm font-medium text-link hover:text-linkHover"
          onClick={() => event("phone_click", { location: "contact" })}
        >
          +47 416 33 000
        </a>
      </div>
    </form>
  );
}
