import type { ReactNode } from "react";

type IconProps = {
  className?: string;
};

function HomeIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9.5 21v-6h5v6" />
    </svg>
  );
}

function TrendIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </svg>
  );
}

function ShieldIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3l7 3v6c0 4.4-2.9 7.4-7 9-4.1-1.6-7-4.6-7-9V6l7-3z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function BoltIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M13 2 4.5 13.5H11l-1 8.5L18.5 10.5H12L13 2z" />
    </svg>
  );
}

function ChartIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 21h18" />
      <path d="M6 21V11" />
      <path d="M12 21V4" />
      <path d="M18 21v-7" />
    </svg>
  );
}

function SlidersIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 7h9" />
      <path d="M17 7h3" />
      <path d="M4 17h4" />
      <path d="M12 17h8" />
      <circle cx="15" cy="7" r="2" />
      <circle cx="10" cy="17" r="2" />
    </svg>
  );
}

function DeviceIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2.5" y="4" width="14" height="11" rx="2" />
      <path d="M7 19h5" />
      <path d="M9.5 15v4" />
      <rect x="17" y="10" width="4.5" height="10" rx="1.5" />
    </svg>
  );
}

function CheckIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m5 12.5 4 4L19 6.5" />
    </svg>
  );
}

function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function BrandMark({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="9" fill="currentColor" />
      <path
        d="M21.5 10.5 10.5 21.5"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="12.5" cy="12.5" r="2.6" stroke="white" strokeWidth="2.2" />
      <circle cx="19.5" cy="19.5" r="2.6" stroke="white" strokeWidth="2.2" />
    </svg>
  );
}

function FeatureItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-400">
        <CheckIcon className="size-3" />
      </span>
      <span className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
        {children}
      </span>
    </li>
  );
}

const features = [
  {
    title: "Instant, precise results",
    description:
      "Every figure updates as you type, so you can test an idea in seconds instead of rebuilding a spreadsheet.",
    icon: BoltIcon,
  },
  {
    title: "Full cost breakdown",
    description:
      "Principal, interest and total outlay are shown side by side — never a single opaque number.",
    icon: ChartIcon,
  },
  {
    title: "Compare scenarios",
    description:
      "Change the rate, term or contributions and immediately see how the outcome shifts.",
    icon: SlidersIcon,
  },
  {
    title: "Private by design",
    description:
      "Your inputs stay in your browser. No accounts, no uploads, no data collection.",
    icon: ShieldIcon,
  },
  {
    title: "Works on any device",
    description:
      "A responsive interface that feels just as natural on a phone as it does on a desktop.",
    icon: DeviceIcon,
  },
  {
    title: "Clear amortisation tables",
    description:
      "Follow the balance year by year and understand exactly where your money goes over time.",
    icon: ChartIcon,
  },
];

const faqs = [
  {
    question: "Is FineCalc free to use?",
    answer:
      "Yes. Both calculators are free, with no account, subscription or hidden paywall. Just open a calculator and start exploring your numbers.",
  },
  {
    question: "Do you store the figures I enter?",
    answer:
      "No. Everything is calculated locally in your browser, which means your loan amounts, rates and contributions never leave your device.",
  },
  {
    question: "How accurate are the results?",
    answer:
      "The calculators use standard amortisation and compound interest formulas. Results are estimates for planning purposes and may differ slightly from a lender’s figures due to fees, rounding or product-specific rules.",
  },
  {
    question: "Can I compare different mortgages or savings plans?",
    answer:
      "That’s the idea. Once the calculators launch you’ll be able to adjust rates, terms and contributions to compare scenarios and see the long-term impact of each change.",
  },
  {
    question: "When will the calculators be available?",
    answer:
      "Both tools are in active development. The landing page is live now — the mortgage repayment and compound interest calculators are next.",
  },
  {
    question: "Is this financial advice?",
    answer:
      "No. FineCalc is an educational tool that helps you understand the maths. For decisions about a specific mortgage or investment, speak with a qualified professional.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      {/* -------------------------------- Header -------------------------------- */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-zinc-50/80 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/80">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <BrandMark className="size-8 text-emerald-600 dark:text-emerald-500" />
            <span className="text-[15px] font-semibold tracking-tight">
              FineCalc
            </span>
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex dark:text-zinc-400"
          >
            <a className="transition-colors hover:text-zinc-900 dark:hover:text-white" href="#calculators">
              Calculators
            </a>
            <a className="transition-colors hover:text-zinc-900 dark:hover:text-white" href="#features">
              Features
            </a>
            <a className="transition-colors hover:text-zinc-900 dark:hover:text-white" href="#how-it-works">
              How it works
            </a>
            <a className="transition-colors hover:text-zinc-900 dark:hover:text-white" href="#faq">
              FAQ
            </a>
          </nav>

          <a
            href="#calculators"
            className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Explore
            <ArrowRightIcon className="size-3.5" />
          </a>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* --------------------------------- Hero --------------------------------- */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_55%_at_50%_0%,rgba(16,185,129,0.16),transparent_70%)] dark:bg-[radial-gradient(65%_55%_at_50%_0%,rgba(16,185,129,0.12),transparent_70%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.07)_1px,transparent_0)] bg-[size:26px_26px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_65%)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.07)_1px,transparent_0)]"
          />

          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-6 pt-20 pb-24 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pt-28 lg:pb-32">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-3.5 py-1.5 text-xs font-medium text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                </span>
                Two focused calculators, one clean workspace
              </span>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
                Know your numbers{" "}
                <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-sky-500 bg-clip-text text-transparent dark:from-emerald-400 dark:via-teal-300 dark:to-sky-400">
                  before you commit.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-pretty text-zinc-600 sm:text-lg sm:leading-8 dark:text-zinc-400">
                FineCalc turns the two financial questions that matter most —
                what a mortgage really costs, and how your savings can grow —
                into clear, interactive answers. No spreadsheets, no sign-up,
                no guesswork.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#calculators"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-emerald-600/20 transition-colors hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                  Explore the calculators
                  <ArrowRightIcon className="size-4" />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white/70 px-6 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-zinc-200 dark:hover:border-white/25 dark:hover:bg-white/10"
                >
                  See how it works
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-zinc-500 dark:text-zinc-500">
                <span className="inline-flex items-center gap-1.5">
                  <CheckIcon className="size-3.5 text-emerald-500" />
                  Free forever
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckIcon className="size-3.5 text-emerald-500" />
                  No sign-up required
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckIcon className="size-3.5 text-emerald-500" />
                  Runs in your browser
                </span>
              </div>
            </div>

            {/* Calculator preview */}
            <div className="relative mx-auto w-full max-w-md pb-0 sm:pb-20 lg:max-w-none">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-emerald-400/25 via-teal-300/10 to-sky-400/25 blur-2xl"
                />
                <div className="relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-white/95 shadow-2xl shadow-emerald-950/10 backdrop-blur dark:border-white/10 dark:bg-zinc-900/90">
                  <div className="flex items-center justify-between border-b border-zinc-100 px-5 py-3.5 dark:border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5" aria-hidden="true">
                        <span className="size-2.5 rounded-full bg-zinc-200 dark:bg-zinc-700" />
                        <span className="size-2.5 rounded-full bg-zinc-200 dark:bg-zinc-700" />
                        <span className="size-2.5 rounded-full bg-zinc-200 dark:bg-zinc-700" />
                      </div>
                      <div className="flex rounded-full bg-zinc-100 p-0.5 text-[11px] font-medium dark:bg-white/5">
                        <span className="rounded-full bg-white px-2.5 py-1 text-zinc-900 shadow-sm dark:bg-zinc-700 dark:text-white">
                          Mortgage
                        </span>
                        <span className="px-2.5 py-1 text-zinc-500 dark:text-zinc-400">
                          Compound
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-medium tracking-wider text-zinc-400 uppercase dark:text-zinc-500">
                      Preview
                    </span>
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="grid grid-cols-3 gap-2.5">
                      {[
                        { label: "Loan amount", value: "$320,000" },
                        { label: "Rate", value: "5.4%" },
                        { label: "Term", value: "30 yrs" },
                      ].map((field) => (
                        <div
                          key={field.label}
                          className="rounded-xl border border-zinc-200 bg-white px-3 py-2.5 dark:border-white/10 dark:bg-white/5"
                        >
                          <p className="text-[10px] font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-500">
                            {field.label}
                          </p>
                          <p className="mt-0.5 text-sm font-semibold tracking-tight">
                            {field.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 rounded-2xl border border-zinc-100 bg-zinc-50 p-4 dark:border-white/5 dark:bg-white/[0.03]">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                          Monthly repayment
                        </p>
                        <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                          Principal + interest
                        </span>
                      </div>
                      <div className="mt-1 flex items-baseline gap-1.5">
                        <span className="text-4xl font-semibold tracking-tight">
                          $1,797
                        </span>
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">
                          /month
                        </span>
                      </div>

                      <div className="mt-5 flex h-2.5 gap-0.5 overflow-hidden rounded-full">
                        <div className="w-[49%] rounded-l-full bg-emerald-500" />
                        <div className="flex-1 rounded-r-full bg-amber-400" />
                      </div>
                      <div className="mt-3 flex items-center justify-between text-[11px]">
                        <span className="inline-flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400">
                          <span className="size-2 rounded-full bg-emerald-500" />
                          Principal $320,000
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400">
                          <span className="size-2 rounded-full bg-amber-400" />
                          Interest $326,850
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating compound card */}
              <div className="absolute bottom-0 -left-4 hidden w-56 items-center gap-3 rounded-2xl border border-zinc-200/80 bg-white/95 p-4 shadow-xl shadow-emerald-950/10 backdrop-blur sm:flex lg:-left-10 dark:border-white/10 dark:bg-zinc-900/95">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <TrendIcon className="size-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-500">
                    Compound growth
                  </p>
                  <p className="text-lg font-semibold tracking-tight">
                    $86,545
                  </p>
                  <p className="text-[10px] text-emerald-600 dark:text-emerald-400">
                    +$26.5k from interest
                  </p>
                </div>
              </div>

              <div className="absolute -top-5 -right-3 hidden rounded-xl border border-zinc-200/80 bg-white/95 px-3 py-2 text-[11px] font-medium shadow-lg shadow-emerald-950/5 backdrop-blur md:block dark:border-white/10 dark:bg-zinc-900/95">
                <span className="text-zinc-500 dark:text-zinc-400">Saved vs. 25 yrs</span>{" "}
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  $48,200
                </span>
              </div>
            </div>
          </div>

          {/* Stat strip */}
          <div className="relative border-y border-zinc-200/70 bg-white/50 dark:border-white/10 dark:bg-white/[0.02]">
            <dl className="mx-auto grid w-full max-w-6xl grid-cols-2 divide-zinc-200/70 px-6 sm:grid-cols-4 sm:divide-x dark:divide-white/10">
              {[
                { value: "2", label: "Focused calculators" },
                { value: "0", label: "Accounts required" },
                { value: "100%", label: "Browser-based maths" },
                { value: "$0", label: "Forever price" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="px-2 py-6 text-center sm:px-6 sm:py-8"
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-2xl font-semibold tracking-tight sm:text-3xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ------------------------------ Calculators ----------------------------- */}
        <section
          id="calculators"
          className="mx-auto w-full max-w-6xl scroll-mt-20 px-6 py-24 sm:py-28"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-emerald-600 uppercase dark:text-emerald-400">
              The toolkit
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Two calculators. Every angle covered.
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              One for the biggest loan you’ll ever take on, one for the money
              you want to grow. Both built to show the full picture, not just a
              final total.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* Mortgage card */}
            <article className="group flex flex-col rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl hover:shadow-zinc-950/5 sm:p-9 dark:border-white/10 dark:bg-white/[0.03] dark:hover:shadow-black/40">
              <div className="flex items-start justify-between gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
                  <HomeIcon className="size-6" />
                </div>
                <span className="rounded-full border border-zinc-200 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-zinc-500 uppercase dark:border-white/10 dark:text-zinc-400">
                  Coming soon
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                Mortgage Repayment Calculator
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Understand what a home loan really costs before you sign. See
                your monthly repayment, the interest you’ll pay over the life of
                the loan, and how small changes to the term or rate add up.
              </p>

              <ul className="mt-6 space-y-3">
                <FeatureItem>
                  Monthly repayment including principal and interest
                </FeatureItem>
                <FeatureItem>
                  Total interest and total cost over the full term
                </FeatureItem>
                <FeatureItem>
                  Year-by-year amortisation schedule
                </FeatureItem>
                <FeatureItem>
                  Compare terms, rates and extra repayments
                </FeatureItem>
              </ul>

              <div className="mt-7 grid grid-cols-2 gap-3 border-t border-zinc-100 pt-6 dark:border-white/5">
                <div>
                  <p className="text-[10px] font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-500">
                    Example repayment
                  </p>
                  <p className="mt-1 text-xl font-semibold tracking-tight">
                    $1,797
                    <span className="text-xs font-normal text-zinc-500 dark:text-zinc-400">
                      /mo
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-500">
                    Total interest
                  </p>
                  <p className="mt-1 text-xl font-semibold tracking-tight">
                    $326,850
                  </p>
                </div>
              </div>

              <p className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                <span className="size-1.5 rounded-full bg-amber-400" />
                Based on $320,000 at 5.4% over 30 years
              </p>
            </article>

            {/* Compound interest card */}
            <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-7 text-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-emerald-950/30 sm:p-9">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-16 size-64 rounded-full bg-emerald-500/20 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-[size:22px_22px]"
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-300">
                  <TrendIcon className="size-6" />
                </div>
                <span className="rounded-full border border-white/15 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-zinc-300 uppercase">
                  Coming soon
                </span>
              </div>

              <h3 className="relative mt-6 text-2xl font-semibold tracking-tight">
                Compound Interest Calculator
              </h3>
              <p className="relative mt-3 text-sm leading-6 text-zinc-300">
                Watch small, consistent contributions turn into meaningful
                wealth. Model different rates, timeframes and compounding
                frequencies to see what your savings could become.
              </p>

              <ul className="relative mt-6 space-y-3">
                {[
                  "Future value from a starting balance and regular contributions",
                  "Choose monthly, quarterly or annual compounding",
                  "See contributions vs. interest earned, split clearly",
                  "Compare timeframes side by side to see the cost of waiting",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                      <CheckIcon className="size-3" />
                    </span>
                    <span className="text-sm leading-6 text-zinc-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="relative mt-7 grid grid-cols-2 gap-3 border-t border-white/10 pt-6">
                <div>
                  <p className="text-[10px] font-medium tracking-wide text-zinc-400 uppercase">
                    Example balance
                  </p>
                  <p className="mt-1 text-xl font-semibold tracking-tight">
                    $86,545
                    <span className="text-xs font-normal text-zinc-400">
                      {" "}
                      in 10 yrs
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-medium tracking-wide text-zinc-400 uppercase">
                    Interest earned
                  </p>
                  <p className="mt-1 text-xl font-semibold tracking-tight text-emerald-300">
                    $26,545
                  </p>
                </div>
              </div>

              <p className="relative mt-5 inline-flex items-center gap-2 text-xs font-medium text-zinc-400">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                Based on $500/month at 7% compounded monthly
              </p>
            </article>
          </div>
        </section>

        {/* -------------------------------- Features ------------------------------ */}
        <section
          id="features"
          className="scroll-mt-20 border-y border-zinc-200/70 bg-white/60 dark:border-white/10 dark:bg-white/[0.02]"
        >
          <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-28">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.18em] text-emerald-600 uppercase dark:text-emerald-400">
                Why FineCalc
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Built for clarity, not complexity.
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                Most financial tools drown you in inputs. FineCalc keeps the
                maths honest and the interface out of the way, so you can focus
                on the decision in front of you.
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-3 dark:border-white/10 dark:bg-white/10">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group bg-white p-7 transition-colors hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition-colors group-hover:bg-emerald-500/10 group-hover:text-emerald-600 dark:bg-white/5 dark:text-zinc-300 dark:group-hover:text-emerald-400">
                    <feature.icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------ How it works --------------------------- */}
        <section
          id="how-it-works"
          className="mx-auto w-full max-w-6xl scroll-mt-20 px-6 py-24 sm:py-28"
        >
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
            <div className="lg:sticky lg:top-24">
              <p className="text-xs font-semibold tracking-[0.18em] text-emerald-600 uppercase dark:text-emerald-400">
                How it works
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                From question to clear answer in three steps.
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                No onboarding flow, no tabs to hunt through. Open the
                calculator that fits your question and start typing.
              </p>
              <a
                href="#faq"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-500 dark:text-emerald-400"
              >
                Read the FAQ
                <ArrowRightIcon className="size-4" />
              </a>
            </div>

            <ol className="relative space-y-4">
              {[
                {
                  step: "01",
                  title: "Choose your calculator",
                  body: "Planning a purchase? Start with the mortgage calculator. Growing savings? Use compound interest. Each tool asks only for what it needs.",
                },
                {
                  step: "02",
                  title: "Enter your numbers",
                  body: "Add your loan amount, rate and term — or your starting balance, monthly contribution and expected return. Results update as you go.",
                },
                {
                  step: "03",
                  title: "Read the full breakdown",
                  body: "See the monthly figure, the total cost, and the split between principal and interest, then tweak any input to compare scenarios instantly.",
                },
              ].map((item) => (
                <li
                  key={item.step}
                  className="flex gap-5 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-sm font-bold text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------------------------------- FAQ --------------------------------- */}
        <section
          id="faq"
          className="scroll-mt-20 border-t border-zinc-200/70 dark:border-white/10"
        >
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-24 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-emerald-600 uppercase dark:text-emerald-400">
                FAQ
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Questions, answered.
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                Everything you need to know about the calculators and how
                FineCalc handles your data.
              </p>
            </div>

            <div className="divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-white/10 dark:border-white/10">
              {faqs.map((faq) => (
                <details key={faq.question} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-[15px] font-medium transition-colors hover:text-emerald-600 [&::-webkit-details-marker]:hidden dark:hover:text-emerald-400">
                    {faq.question}
                    <span
                      aria-hidden="true"
                      className="flex size-7 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-lg leading-none text-zinc-500 transition-transform duration-200 group-open:rotate-45 dark:border-white/15 dark:text-zinc-400"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pr-12 pb-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------- CTA band ------------------------------ */}
        <section className="px-6 pb-24 sm:pb-28">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 px-6 py-14 text-center shadow-2xl shadow-emerald-900/20 sm:px-12 sm:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.12)_1px,transparent_0)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 left-1/2 size-80 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-3xl"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                Make the next financial decision a confident one.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-emerald-50/90">
                Two clear, focused calculators for the numbers that shape your
                future. Free, private, and built to be understood.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="#calculators"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-800 transition-colors hover:bg-emerald-50"
                >
                  Explore the calculators
                  <ArrowRightIcon className="size-4" />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  See the features
                </a>
              </div>
              <p className="mt-6 text-xs text-emerald-100/70">
                Launching soon — no account needed.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* -------------------------------- Footer ---------------------------------- */}
      <footer className="border-t border-zinc-200/70 dark:border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-12">
          <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-xs">
              <a href="#top" className="flex items-center gap-2.5">
                <BrandMark className="size-8 text-emerald-600 dark:text-emerald-500" />
                <span className="text-[15px] font-semibold tracking-tight">
                  FineCalc
                </span>
              </a>
              <p className="mt-4 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                Clear financial calculators for mortgages and compound
                interest. Understand the numbers before you commit.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10 text-sm sm:gap-16">
              <div>
                <p className="text-xs font-semibold tracking-wider text-zinc-900 uppercase dark:text-zinc-200">
                  Calculators
                </p>
                <ul className="mt-4 space-y-3 text-zinc-500 dark:text-zinc-400">
                  <li>
                    <a
                      href="#calculators"
                      className="transition-colors hover:text-zinc-900 dark:hover:text-white"
                    >
                      Mortgage repayment
                    </a>
                  </li>
                  <li>
                    <a
                      href="#calculators"
                      className="transition-colors hover:text-zinc-900 dark:hover:text-white"
                    >
                      Compound interest
                    </a>
                  </li>
                  <li>
                    <a
                      href="#features"
                      className="transition-colors hover:text-zinc-900 dark:hover:text-white"
                    >
                      Features
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider text-zinc-900 uppercase dark:text-zinc-200">
                  Learn
                </p>
                <ul className="mt-4 space-y-3 text-zinc-500 dark:text-zinc-400">
                  <li>
                    <a
                      href="#how-it-works"
                      className="transition-colors hover:text-zinc-900 dark:hover:text-white"
                    >
                      How it works
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faq"
                      className="transition-colors hover:text-zinc-900 dark:hover:text-white"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#top"
                      className="transition-colors hover:text-zinc-900 dark:hover:text-white"
                    >
                      Back to top
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-zinc-200/70 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:text-zinc-500">
            <p>© 2026 FineCalc. All rights reserved.</p>
            <p className="max-w-md sm:text-right">
              Estimates only — not financial advice. Always confirm figures
              with your lender or adviser.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
