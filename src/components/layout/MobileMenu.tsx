"use client";
// Client state is limited to navigation disclosure, modal focus, and current-route indication.
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AccessibleIcon } from "../primitives/AccessibleIcon";
const items = [
  { href: "/projects", label: "Projects" },
  { href: "/focus/ai-applications", label: "AI Lab" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
export function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const el = dialog.current;
    const returnFocus = trigger.current;
    if (!el) return;
    el.showModal();
    closeButton.current?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const query = window.matchMedia("(min-width: 1024px)");
    const onResize = () => {
      if (query.matches) setOpen(false);
    };
    query.addEventListener("change", onResize);
    return () => {
      query.removeEventListener("change", onResize);
      document.body.style.overflow = previous;
      el.close();
      returnFocus?.focus();
    };
  }, [open]);
  const current = (href: string) =>
    pathname === href ||
    (href === "/projects" && pathname.startsWith("/projects/"));
  return (
    <>
      <nav
        aria-label="Primary navigation"
        className="hidden items-center gap-6 lg:flex"
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={current(item.href) ? "page" : undefined}
            className={`feedback inline-flex min-h-11 min-w-11 items-center justify-center border-b-2 text-sm ${current(item.href) ? "border-accent text-accent" : "border-transparent text-secondary hover:border-border-strong hover:text-primary"}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <button
        ref={trigger}
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-button px-2 lg:hidden"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(true)}
      >
        <AccessibleIcon name="menu" />
        <span className="text-sm">Menu</span>
      </button>
      <dialog
        ref={dialog}
        id="mobile-navigation"
        aria-labelledby="menu-title"
        aria-modal="true"
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const targets = event.currentTarget.querySelectorAll<HTMLElement>(
            "a[href], button:not([disabled])",
          );
          const first = targets[0],
            last = targets[targets.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onCancel={() => setOpen(false)}
        onClose={() => setOpen(false)}
        className="m-auto max-h-[90dvh] w-[calc(100%_-_2rem)] max-w-lg overflow-y-auto rounded-media border border-border-strong bg-surface p-6 text-primary shadow-frame backdrop:bg-background/80"
      >
        <div className="flex items-center justify-between gap-4">
          <h2 id="menu-title" className="text-xl">
            Navigation
          </h2>
          <button
            ref={closeButton}
            type="button"
            aria-label="Close navigation"
            className="inline-flex min-h-11 min-w-11 items-center justify-center"
            onClick={() => setOpen(false)}
          >
            <AccessibleIcon name="close" />
          </button>
        </div>
        <nav
          aria-label="Mobile navigation"
          className="mt-6 flex flex-col gap-2"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={current(item.href) ? "page" : undefined}
              className="min-h-11 border-b border-border py-3 text-lg hover:text-accent"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/Hitesh-Rawat-Resume.pdf"
            className="mt-4 min-h-11 py-3 text-accent"
            onClick={() => setOpen(false)}
          >
            Open résumé PDF
          </Link>
        </nav>
      </dialog>
    </>
  );
}
