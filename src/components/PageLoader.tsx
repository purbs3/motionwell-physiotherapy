"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function PageLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const show = () => {
      setVisible(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setVisible(false), 520);
    };

    // Show immediately when navigating between internal pages.
    const onDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.search === window.location.search) return;
      show();
    };

    document.addEventListener("click", onDocumentClick, true);
    // Initial page loading experience; pathname effect also covers client navigation.
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setVisible(false), 850);

    return () => {
      document.removeEventListener("click", onDocumentClick, true);
      if (timer.current) clearTimeout(timer.current);
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="page-loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          aria-label="Loading page"
          role="status"
          aria-live="polite"
        >
          <div className="loader-brand">
            <img
              src="/logo.png"
              alt="MotionWell logo"
              className="loader-logo"
            />

            <span className="leading-tight">
              <strong>MotionWell</strong>
              <small>HOME PHYSIOTHERAPY · DELHI NCR</small>
            </span>
          </div>
          <div className="loader-ring" aria-hidden="true" />
          <p>Preparing your experience…</p>
          <div className="loader-track"><span /></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
