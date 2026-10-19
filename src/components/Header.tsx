"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  CalendarCheck,
  Check,
  ChevronRight,
  ChevronDown,
  CircleHelp,
  Home,
  MapPin,
  Menu,
  Phone,
  Stethoscope,
  X,
  IndianRupee,
  HeartHandshake,
  ClipboardCheck,
} from "lucide-react";
import { site } from "@/lib/site";

const navigation = [
  {
    href: "/",
    label: "Home",
    desktopLabel: "Home",
    icon: Home,
    description: "Back to the home page",
  },
  {
    href: "/services",
    label: "Home Visit Services",
    desktopLabel: "Services",
    icon: Stethoscope,
    description: "Explore physiotherapy at home",
  },
  {
    href: "/areas",
    label: "Areas We Serve",
    desktopLabel: "Areas",
    icon: MapPin,
    description: "Check home-visit coverage",
  },
  {
    href: "/pricing",
    label: "Transparent Pricing",
    desktopLabel: "Pricing",
    icon: IndianRupee,
    description: "Understand fees and visit costs",
  },
  {
    href: "/blog",
    label: "Blog & Guides",
    desktopLabel: "Guides",
    icon: BookOpen,
    description: "Helpful physiotherapy articles",
  },
  {
    href: "/how-home-visits-work",
    label: "How Home Visits Work",
    icon: ClipboardCheck,
    description: "Understand the home-visit process",
  },
  {
    href: "/about",
    label: "About MotionWell",
    icon: HeartHandshake,
    description: "Get to know our service",
  },
  {
    href: "/faqs",
    label: "FAQs",
    icon: CircleHelp,
    description: "Answers before you enquire",
  },
];

const primaryNavigation = navigation.filter((item) =>
  ["/", "/services", "/areas", "/pricing", "/blog"].includes(item.href)
);

const moreNavigation = navigation.filter((item) =>
  ["/how-home-visits-work", "/about", "/faqs"].includes(item.href)
);

function routeIsActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const reduceMotion = useReducedMotion();
  const motionDuration = reduceMotion ? 0.01 : 0.25;

  const primaryPhone = site.contactNumbers?.[0] ?? {
    label: "Main contact",
    display: "+91 76448 65116",
    href: "tel:+917644865116",
  };

  const alternatePhone = site.contactNumbers?.[1] ?? {
    label: "Alternate contact",
    display: "+91 77070 26215",
    href: "tel:+917707026215",
  };

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        setIsMoreOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMoreOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMoreOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMoreOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsMoreOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="site-header">
        <div className="container-wide header-inner">
          <Link
            href="/"
            className="brand shrink-0"
            aria-label="MotionWell home"
            onClick={() => {
              closeMenu();
              setIsMoreOpen(false);
            }}
          >
            <div className="header-brand-lockup">
              <Image
                src="/logo.png"
                alt="MotionWell logo"
                width={52}
                height={52}
                priority
                className="header-brand-icon"
              />

              <span className="header-brand-text">
                <strong>MotionWell</strong>
                <small>HOME PHYSIOTHERAPY · DELHI NCR</small>
              </span>
            </div>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {primaryNavigation.map((item) => {
              const active = routeIsActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link${active ? " is-active" : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.desktopLabel}
                </Link>
              );
            })}

            <div className="header-more">
              <button
                type="button"
                className={`nav-link header-more-trigger${moreNavigation.some((item) =>
                  routeIsActive(pathname, item.href)
                )
                  ? " is-active"
                  : ""
                  }`}
                aria-expanded={isMoreOpen}
                aria-haspopup="true"
                onClick={() => setIsMoreOpen((open) => !open)}
              >
                More
                <ChevronDown
                  size={14}
                  className={
                    isMoreOpen
                      ? "header-more-chevron is-open"
                      : "header-more-chevron"
                  }
                />
              </button>

              <AnimatePresence>
                {isMoreOpen && (
                  <motion.div
                    className="header-more-menu"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: motionDuration }}
                  >
                    {moreNavigation.map((item) => {
                      const active = routeIsActive(pathname, item.href);
                      const Icon = item.icon;

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`header-more-link${active ? " is-active" : ""
                            }`}
                          aria-current={active ? "page" : undefined}
                          onClick={() => setIsMoreOpen(false)}
                        >
                          <span className="header-more-icon">
                            <Icon size={18} />
                          </span>

                          <span className="header-more-copy">
                            <strong>{item.label}</strong>
                            <small>{item.description}</small>
                          </span>

                          <ChevronRight size={16} />
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <Link
            href="/contact"
            className="btn-primary header-booking"
          >
            <span>Book a Home Visit</span>
            <ArrowUpRight size={17} />
          </Link>

          <button
            type="button"
            className={`mobile-menu-toggle${isMenuOpen ? " is-open" : ""
              }`}
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-controls="motionwell-mobile-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -80, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 80, opacity: 0, scale: 0.6 }}
                  transition={{ duration: motionDuration }}
                >
                  <X size={22} strokeWidth={2.1} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 80, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -80, opacity: 0, scale: 0.6 }}
                  transition={{ duration: motionDuration }}
                >
                  <Menu size={22} strokeWidth={2.1} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu-layer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: motionDuration }}
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                closeMenu();
              }
            }}
          >
            <motion.aside
              id="motionwell-mobile-navigation"
              className="mobile-menu-panel"
              role="dialog"
              aria-modal="true"
              aria-label="MotionWell navigation"
              initial={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, x: 48, scale: 0.96 }
              }
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, x: 32, scale: 0.98 }
              }
              transition={{
                duration: motionDuration,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mobile-menu-topline">
                <Link
                  href="/"
                  aria-label="MotionWell home"
                  onClick={closeMenu}
                >
                  <Image
                    src="/logo.png"
                    alt="MotionWell Home Physiotherapy"
                    width={245}
                    height={54}
                    className="mobile-menu-logo"
                  />
                </Link>

                <button
                  type="button"
                  className="mobile-menu-close"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mobile-menu-intro">
                <span className="mobile-menu-kicker">
                  <span />
                  MOVE BETTER, AT HOME
                </span>

                <h2>Where would you like to go?</h2>

                <p>
                  Everything you need from MotionWell, one tap away.
                </p>
              </div>

              <nav
                className="mobile-menu-scroll"
                aria-label="Mobile navigation links"
              >
                {navigation.map((item, index) => {
                  const Icon = item.icon;
                  const active = routeIsActive(pathname, item.href);

                  return (
                    <motion.div
                      key={item.href}
                      initial={
                        reduceMotion ? false : { opacity: 0, y: 12 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: motionDuration,
                        delay: reduceMotion ? 0 : index * 0.035,
                      }}
                    >
                      <Link
                        href={item.href}
                        className={`mobile-menu-link${active ? " is-active" : ""
                          }`}
                        aria-current={active ? "page" : undefined}
                        onClick={closeMenu}
                      >
                        <span className="mobile-menu-icon">
                          <Icon size={19} strokeWidth={1.9} />
                        </span>

                        <span className="mobile-menu-link-copy">
                          <strong>{item.label}</strong>
                          <small>{item.description}</small>
                        </span>

                        {active ? (
                          <Check
                            className="mobile-menu-link-end active-check"
                            size={18}
                          />
                        ) : (
                          <ChevronRight
                            className="mobile-menu-link-end"
                            size={18}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mobile-menu-bottom">
                <Link
                  href="/contact"
                  className="mobile-menu-cta"
                  onClick={closeMenu}
                >
                  <span className="mobile-menu-cta-icon">
                    <CalendarCheck size={20} />
                  </span>

                  <span>
                    <strong>Request a home visit</strong>
                    <small>
                      Share your area and preferred time
                    </small>
                  </span>

                  <ArrowUpRight size={20} />
                </Link>

                <div className="mobile-menu-phone-row">
                  <Phone size={14} />

                  <a
                    href={primaryPhone.href}
                    onClick={closeMenu}
                  >
                    {primaryPhone.display}
                  </a>

                  <span className="mobile-menu-phone-dot" />

                  <a
                    href={alternatePhone.href}
                    onClick={closeMenu}
                  >
                    {alternatePhone.display}
                  </a>
                </div>

                <p className="mobile-menu-footnote">
                  Home visits only · Delhi NCR · Coverage confirmed by locality
                </p>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}