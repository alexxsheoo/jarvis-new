"use client";

import type { LucideIcon } from "lucide-react";
import {
  Bell,
  Building2,
  CalendarCheck,
  ChevronDown,
  ChevronsRight,
  DollarSign,
  GitBranch,
  Handshake,
  HelpCircle,
  LayoutDashboard,
  Megaphone,
  Moon,
  Send,
  Settings,
  Sparkles,
  Sun,
  Tag,
  Timer,
  TrendingDown,
  TrendingUp,
  User,
  Users,
} from "lucide-react";
import React, { useState } from "react";

/**
 * Collapsible-sidebar dashboard.
 *
 * THREE LOCAL CHANGES from the source, each required to run here:
 *
 * 1. Props are typed. The original destructures untyped parameters, which are
 *    implicit `any` under this project's `strict: true` and fail `tsc`.
 * 2. The prices in the right-hand list were `Math.random()` during render. In the
 *    App Router that runs once on the server and again on the client, so the
 *    numbers disagree and React reports a hydration mismatch. They are now
 *    fixed data.
 * 3. The dark toggle scopes to this component's own wrapper instead of the
 *    document root. Two problems in one: Tailwind v4 maps `dark:` to
 *    prefers-color-scheme unless a custom variant is registered and this
 *    project registered none, so the toggle was inert; and writing the class
 *    onto <html> lets a mockup restyle the page hosting it. See the
 *    `@custom-variant dark` rule added to globals.css.
 */

type ExampleProps = {
  /** Fill the parent instead of the viewport, for use inside a product frame. */
  embedded?: boolean;
  /** Initial theme. Deterministic, so server and client first render agree. */
  defaultDark?: boolean;
};

export const Example = ({ embedded = false, defaultDark = false }: ExampleProps = {}) => {
  const [isDark, setIsDark] = useState(defaultDark);

  // LOCAL CHANGE — theming is scoped to this subtree. The original also wrote
  // the `dark` class onto document.documentElement, which is wrong anywhere
  // this is embedded: a mockup inside a page must not restyle the page around
  // it. The wrapper below already carries the class, and the `@custom-variant`
  // in globals.css resolves `dark:` against it, so the effect was redundant as
  // well as invasive.
  return (
    <div
      className={`flex w-full ${embedded ? "h-full" : "min-h-screen"} ${isDark ? "dark" : ""}`}
    >
      <div className="flex w-full bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <Sidebar embedded={embedded} />
        <ExampleContent isDark={isDark} setIsDark={setIsDark} />
      </div>
    </div>
  );
};

const Sidebar = ({ embedded = false }: { embedded?: boolean }) => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <nav
      className={`${
        embedded ? "relative h-full" : "sticky top-0 h-screen"
      } shrink-0 border-r transition-all duration-300 ease-in-out ${
        open ? "w-64" : "w-16"
      } border-gray-200 bg-white p-2 shadow-sm dark:border-gray-800 dark:bg-gray-900`}
    >
      <TitleSection open={open} />

      <div className="mb-8 space-y-1">
        <Option Icon={LayoutDashboard} title="Dashboard" selected={selected} setSelected={setSelected} open={open} />
        <Option Icon={Building2} title="Listings" selected={selected} setSelected={setSelected} open={open} />
        <Option Icon={Users} title="Leads" selected={selected} setSelected={setSelected} open={open} notifs={12} />
        <Option Icon={CalendarCheck} title="Viewings" selected={selected} setSelected={setSelected} open={open} notifs={3} />
        <Option Icon={GitBranch} title="Pipeline" selected={selected} setSelected={setSelected} open={open} />
        <Option Icon={Sparkles} title="AI Agents" selected={selected} setSelected={setSelected} open={open} />
        <Option Icon={Megaphone} title="Marketing" selected={selected} setSelected={setSelected} open={open} />
      </div>

      {open && (
        <div className="space-y-1 border-t border-gray-200 pt-4 dark:border-gray-800">
          <div className="px-3 py-2 text-xs font-medium tracking-wide text-gray-500 uppercase dark:text-gray-400">
            Account
          </div>
          <Option Icon={Settings} title="Settings" selected={selected} setSelected={setSelected} open={open} />
          <Option Icon={HelpCircle} title="Help & Support" selected={selected} setSelected={setSelected} open={open} />
        </div>
      )}

      <ToggleClose open={open} setOpen={setOpen} />
    </nav>
  );
};

type OptionProps = {
  Icon: LucideIcon;
  title: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  open: boolean;
  notifs?: number;
};

const Option = ({ Icon, title, selected, setSelected, open, notifs }: OptionProps) => {
  const isSelected = selected === title;

  return (
    <button
      onClick={() => setSelected(title)}
      className={`relative flex h-11 w-full items-center rounded-md transition-all duration-200 ${
        isSelected
          ? "border-l-2 border-blue-500 bg-blue-50 text-blue-700 shadow-sm dark:bg-blue-900/50 dark:text-blue-300"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
      }`}
    >
      <div className="grid h-full w-12 place-content-center">
        <Icon className="h-4 w-4" />
      </div>

      {open && <span className="text-sm font-medium transition-opacity duration-200">{title}</span>}

      {notifs !== undefined && open && (
        <span className="absolute right-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs font-medium text-white dark:bg-blue-600">
          {notifs}
        </span>
      )}
    </button>
  );
};

const TitleSection = ({ open }: { open: boolean }) => {
  return (
    <div className="mb-6 border-b border-gray-200 pb-4 dark:border-gray-800">
      <div className="flex cursor-pointer items-center justify-between rounded-md p-2 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
        <div className="flex items-center gap-3">
          <Logo />
          {open && (
            <div className="transition-opacity duration-200">
              <div className="flex items-center gap-2">
                <div>
                  <span className="block text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Verity Homes
                  </span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">Jarvis CRM</span>
                </div>
              </div>
            </div>
          )}
        </div>
        {open && <ChevronDown className="h-4 w-4 text-gray-400 dark:text-gray-500" />}
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="grid size-10 shrink-0 place-content-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-sm">
      <svg
        width="20"
        height="16"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-white"
      >
        <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" />
        <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" />
      </svg>
    </div>
  );
};

const ToggleClose = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="absolute right-0 bottom-0 left-0 border-t border-gray-200 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800"
    >
      <div className="flex items-center p-3">
        <div className="grid size-10 place-content-center">
          <ChevronsRight
            className={`h-4 w-4 text-gray-500 transition-transform duration-300 dark:text-gray-400 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
        {open && (
          <span className="text-sm font-medium text-gray-600 transition-opacity duration-200 dark:text-gray-300">
            Hide
          </span>
        )}
      </div>
    </button>
  );
};

/**
 * Illustrative figures for a residential sales desk, deliberately using the
 * same vocabulary as `dashboard-panel.tsx` and `content/agents.ts` — pipeline
 * value, viewings booked, first response — so the mockup reads as the same
 * product as the rest of the site rather than a second, parallel one.
 *
 * These are example numbers inside a product frame, not measured results.
 */
const stats = [
  { Icon: DollarSign, label: "Pipeline value", value: "$1.42M", delta: "+12.4% vs last month", tint: "bg-blue-50 dark:bg-blue-900/20", fg: "text-blue-600 dark:text-blue-400" },
  { Icon: Building2, label: "Active listings", value: "48", delta: "+6 new this week", tint: "bg-green-50 dark:bg-green-900/20", fg: "text-green-600 dark:text-green-400" },
  { Icon: CalendarCheck, label: "Viewings booked", value: "38", delta: "+6 vs last week", tint: "bg-purple-50 dark:bg-purple-900/20", fg: "text-purple-600 dark:text-purple-400" },
  // Falling is the good direction here, so the trend arrow points down while
  // staying green — an up arrow would read as a regression.
  { Icon: Timer, label: "Avg. first response", value: "42s", delta: "−18s vs last week", tint: "bg-orange-50 dark:bg-orange-900/20", fg: "text-orange-600 dark:text-orange-400", down: true },
];

const activities = [
  { icon: CalendarCheck, title: "Viewing booked", desc: "14 Vine Street — Thu 10:30", time: "2 min ago", tint: "bg-green-50 dark:bg-green-900/20", fg: "text-green-600 dark:text-green-400" },
  { icon: Users, title: "New lead captured", desc: "Portal enquiry — 3-bed, Elmhurst", time: "5 min ago", tint: "bg-blue-50 dark:bg-blue-900/20", fg: "text-blue-600 dark:text-blue-400" },
  { icon: Handshake, title: "Offer received", desc: "$415,000 on 8 Ridgeway Close", time: "18 min ago", tint: "bg-purple-50 dark:bg-purple-900/20", fg: "text-purple-600 dark:text-purple-400" },
  { icon: Tag, title: "Price adjusted", desc: "22 Barrow Lane — down $10,000", time: "1 hour ago", tint: "bg-orange-50 dark:bg-orange-900/20", fg: "text-orange-600 dark:text-orange-400" },
  { icon: Send, title: "Follow-up sequence sent", desc: "24 dormant leads re-engaged", time: "2 hours ago", tint: "bg-red-50 dark:bg-red-900/20", fg: "text-red-600 dark:text-red-400" },
];

const quickStats = [
  { label: "Lead → viewing", value: "34%", width: "34%", bar: "bg-blue-500" },
  { label: "Viewing → offer", value: "21%", width: "21%", bar: "bg-orange-500" },
  { label: "Listings under offer", value: "62%", width: "62%", bar: "bg-green-500" },
];

/** Fixed, not Math.random() — random values here desynchronise SSR markup
 *  from the first client render and trip a hydration mismatch. */
const topListings = [
  { name: "3 Elmhurst Gardens", price: "$712,000" },
  { name: "14 Vine Street", price: "$649,000" },
  { name: "22 Barrow Lane", price: "$529,000" },
  { name: "8 Ridgeway Close", price: "$415,000" },
];

const ExampleContent = ({
  isDark,
  setIsDark,
}: {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex-1 overflow-auto bg-gray-50 p-6 dark:bg-gray-950">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Dashboard</h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">Everything that moved on your pipeline today</p>
        </div>
        <div className="flex items-center gap-4">
          <button
            aria-label="Notifications"
            className="relative rounded-lg border border-gray-200 bg-white p-2 text-gray-600 transition-colors hover:text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500"></span>
          </button>
          <button
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            onClick={() => setIsDark(!isDark)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            aria-label="Account"
            className="rounded-lg border border-gray-200 bg-white p-2 text-gray-600 transition-colors hover:text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className={`rounded-lg p-2 ${stat.tint}`}>
                <stat.Icon className={`h-5 w-5 ${stat.fg}`} />
              </div>
              {stat.down ? (
                <TrendingDown className="h-4 w-4 text-green-500" />
              ) : (
                <TrendingUp className="h-4 w-4 text-green-500" />
              )}
            </div>
            <h3 className="mb-1 font-medium text-gray-600 dark:text-gray-400">{stat.label}</h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</p>
            <p className="mt-1 text-sm text-green-600 dark:text-green-400">{stat.delta}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Recent Activity</h3>
              <button className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                View all
              </button>
            </div>
            <div className="space-y-4">
              {activities.map((activity) => (
                <div
                  key={activity.title}
                  className="flex cursor-pointer items-center space-x-4 rounded-lg p-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <div className={`rounded-lg p-2 ${activity.tint}`}>
                    <activity.icon className={`h-4 w-4 ${activity.fg}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-gray-100">
                      {activity.title}
                    </p>
                    <p className="truncate text-xs text-gray-500 dark:text-gray-400">{activity.desc}</p>
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">{activity.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">Quick Stats</h3>
            <div className="space-y-4">
              {quickStats.map((stat) => (
                <React.Fragment key={stat.label}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{stat.value}</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className={`h-2 rounded-full ${stat.bar}`} style={{ width: stat.width }}></div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">Top listings</h3>
            <div className="space-y-3">
              {topListings.map((product) => (
                <div key={product.name} className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{product.name}</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{product.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;
