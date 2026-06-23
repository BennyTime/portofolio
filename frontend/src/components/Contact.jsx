import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowRight, Github, Mail } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { profile } from "../data/portfolioData";

// Formspree form ID — set REACT_APP_FORMSPREE_ID in /app/frontend/.env (e.g. "xpzgkqwa")
// Get yours free at https://formspree.io → New Form → copy the ID from the endpoint URL
const FORMSPREE_ID = process.env.REACT_APP_FORMSPREE_ID || "";
const FORMSPREE_URL = FORMSPREE_ID
  ? `https://formspree.io/f/${FORMSPREE_ID}`
  : "";

const initialForm = { name: "", email: "", subject: "", message: "" };

export const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;

    if (!FORMSPREE_URL) {
      toast.error("Contact form not configured yet.");
      return;
    }

    setSending(true);
    try {
      await axios.post(
        FORMSPREE_URL,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          _replyto: form.email,
        },
        { headers: { Accept: "application/json" } }
      );
      toast.success("Message received. I will be in touch.");
      setSent(true);
      setForm(initialForm);
    } catch (err) {
      console.error(err);
      toast.error("Could not send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 md:py-32 px-6 md:px-10 border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="06"
          label="Contact"
          title="Let's build something."
          subtitle="Open to discussing roles, collaborations, and engineering work. I read every message."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="space-y-10">
              <div>
                <div className="text-label mb-3">Direct</div>
                <a
                  href={`mailto:${profile.email}`}
                  data-testid="contact-email-link"
                  className="font-serif text-2xl md:text-3xl text-white hover:text-neutral-300 border-b border-neutral-800 hover:border-white pb-1 transition-all inline-block"
                >
                  {profile.email}
                </a>
              </div>

              <div>
                <div className="text-label mb-3">Elsewhere</div>
                <div className="flex flex-col gap-3">
                  <a
                    href={profile.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="contact-github-link"
                    className="group inline-flex items-center gap-3 font-mono text-sm text-neutral-300 hover:text-white"
                  >
                    <Github size={16} strokeWidth={1.5} />
                    GitHub
                    <ArrowRight size={14} strokeWidth={1.5} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-900">
                <Mail size={20} strokeWidth={1.25} className="text-neutral-500 mb-3" />
                <p className="font-sans text-sm text-neutral-500 max-w-xs leading-relaxed">
                  Prefer a quick note? The form on the right is the fastest way to reach me.
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            data-testid="contact-form"
            className="lg:col-span-7 space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Field
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                testid="contact-input-name"
              />
              <Field
                label="Email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                testid="contact-input-email"
              />
            </div>

            <Field
              label="Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              testid="contact-input-subject"
            />

            <div>
              <label className="text-label block mb-3">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                data-testid="contact-input-message"
                className="w-full bg-transparent border-0 border-b border-neutral-800 text-white font-sans text-base py-3 focus:outline-none focus:border-white transition-colors resize-none placeholder:text-neutral-700"
                placeholder="Tell me about what you have in mind."
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-6 pt-4">
              <p className="font-mono text-xs text-neutral-600">
                {sent ? "Last message sent successfully." : "Sent directly to my inbox."}
              </p>
              <button
                type="submit"
                disabled={sending}
                data-testid="contact-submit-button"
                className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-xs font-mono uppercase tracking-[0.2em] hover:bg-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {sending ? "Sending..." : "Send Message"}
                <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, testid, ...props }) => (
  <div>
    <label className="text-label block mb-3">{label}</label>
    <input
      {...props}
      data-testid={testid}
      className="w-full bg-transparent border-0 border-b border-neutral-800 text-white font-sans text-base py-3 focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700"
    />
  </div>
);
