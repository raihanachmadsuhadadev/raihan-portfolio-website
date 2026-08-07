"use client";

import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const contactFocus = [
  "In Office",
  "Remote",
  "Hybrid",
  "Freelance",
  "Project-Based",
  "Full-Time",
];

const whatsappNumber = "6285171226279";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name || "Visitor"}`,
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-4 pb-16 pt-4 md:pb-20 md:pt-6"
    >
      <div className="rounded-[2.25rem] border border-slate-200 bg-slate-950 p-5 shadow-[0_25px_80px_rgba(15,23,42,0.16)] md:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:p-7">
            <SectionHeading
              label="Contact"
              title="Let’s connect and discuss possible collaboration."
              description="I’m open to discussing web applications, admin dashboards, business systems, project documentation, and technical collaboration."
              theme="dark"
            />

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Open To
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {contactFocus.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                    Connect
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Reach me through these channels.
                  </p>
                </div>

                <div className="grid grid-cols-4 gap-3">
                  <ContactIconButton
                    href={profile.github}
                    label="GitHub"
                    icon={<FaGithub className="h-5 w-5" />}
                  />

                  <ContactIconButton
                    href={profile.linkedin}
                    label="LinkedIn"
                    icon={<FaLinkedin className="h-5 w-5" />}
                  />

                  <ContactIconButton
                    href={`mailto:${profile.email}`}
                    label="Email"
                    icon={<FiMail className="h-5 w-5" />}
                  />

                  <ContactIconButton
                    href={`https://wa.me/${whatsappNumber}`}
                    label="WhatsApp"
                    icon={<FaWhatsapp className="h-5 w-5" />}
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Location
              </p>

              <div className="mt-3 flex items-start gap-3">
                <span className="mt-0.5 rounded-xl border border-white/10 bg-white/[0.05] p-2 text-slate-200">
                  <FiMapPin className="h-4 w-4" />
                </span>

                <div>
                  <p className="text-sm font-semibold text-white">
                    {profile.location}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    Available for remote collaboration and structured project
                    discussion.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Send Message
            </p>

            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Start a conversation.
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
              Fill the form below and it will prepare an email message to
              contact me.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@mail.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or collaboration idea..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                <FiSend className="h-4 w-4" />
                Send Message
              </button>
            </form>

            <p className="mt-4 text-xs leading-6 text-slate-400">
              This form opens your email app with a pre-filled message. You can
              also contact me directly via email or WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactIconButton({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: ReactNode;
}) {
  const isMailLink = href.startsWith("mailto:");

  return (
    <a
      href={href}
      target={isMailLink ? undefined : "_blank"}
      rel={isMailLink ? undefined : "noreferrer"}
      aria-label={label}
      title={label}
      className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-slate-200 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
    >
      {icon}
    </a>
  );
}