"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const staticBasePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
const EXPERIENCE_HASH = "#experience";
const HOME_SECTION_IDS = ["hero", "academic-works", "experience"] as const;

/** Strip the configured basePath and any trailing slash so routes compare cleanly. */
export function normalizePathname(pathname: string | null) {
  let path = pathname ?? "/";

  if (staticBasePath && (path === staticBasePath || path.startsWith(`${staticBasePath}/`))) {
    path = path.slice(staticBasePath.length);
  }

  path = path.replace(/\/+$/, "");
  return path === "" ? "/" : path;
}

/**
 * Returns the `href` of the navigation item that should be highlighted.
 * - `/about` and `/life` match their routes.
 * - On `/`, tracks `#hero`, `#academic-works`, and `#experience` so scrolling
 *   down into Experience (and Footer) activates `/#experience`, and scrolling
 *   back up into Academic Works or Hero reliably returns to `/`.
 */
export function useActiveNav() {
  const path = normalizePathname(usePathname());
  const isHome = path === "/";
  const [homeActiveHref, setHomeActiveHref] = useState<string>("/");

  useEffect(() => {
    if (!isHome) {
      setHomeActiveHref("/");
      return;
    }

    const computeActiveFromViewport = () => {
      if (window.scrollY < 100) {
        setHomeActiveHref("/");
        return;
      }

      const experienceEl = document.getElementById("experience");
      if (!experienceEl) {
        setHomeActiveHref("/");
        return;
      }

      const threshold = Math.min(window.innerHeight * 0.4, 340);
      const experienceTop = experienceEl.getBoundingClientRect().top;
      const reachedBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 48;

      if (experienceTop <= threshold || reachedBottom) {
        setHomeActiveHref("/#experience");
      } else {
        setHomeActiveHref("/");
      }
    };

    const syncHash = () => {
      if (window.location.hash === EXPERIENCE_HASH) {
        setHomeActiveHref("/#experience");
      } else if (window.location.hash === "" || window.location.hash === "#hero" || window.location.hash === "#academic-works") {
        setHomeActiveHref("/");
      } else {
        computeActiveFromViewport();
      }
    };

    const sections = HOME_SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    let observer: IntersectionObserver | undefined;
    if (sections.length > 0) {
      observer = new IntersectionObserver(
        () => computeActiveFromViewport(),
        { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.15, 0.4] },
      );
      sections.forEach((section) => observer?.observe(section));
    }

    syncHash();
    if (window.location.hash !== EXPERIENCE_HASH) {
      computeActiveFromViewport();
    }

    window.addEventListener("hashchange", syncHash);
    window.addEventListener("scroll", computeActiveFromViewport, { passive: true });
    window.addEventListener("resize", computeActiveFromViewport, { passive: true });

    return () => {
      observer?.disconnect();
      window.removeEventListener("hashchange", syncHash);
      window.removeEventListener("scroll", computeActiveFromViewport);
      window.removeEventListener("resize", computeActiveFromViewport);
    };
  }, [isHome]);

  if (path === "/about") return "/about";
  if (path === "/life") return "/life";
  if (isHome) return homeActiveHref;
  return null;
}
