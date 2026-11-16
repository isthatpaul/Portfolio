"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const staticBasePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
const EXPERIENCE_HASH = "#experience";

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
 * - `/#experience` is active on `/` when the hash targets it or the section is in view.
 * - `/` (Work) is active on `/` only when Experience is not.
 */
export function useActiveNav() {
  const path = normalizePathname(usePathname());
  const isHome = path === "/";
  const [experienceActive, setExperienceActive] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setExperienceActive(false);
      return;
    }

    const syncHash = () => {
      if (window.location.hash === EXPERIENCE_HASH) setExperienceActive(true);
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);

    const section = document.getElementById(EXPERIENCE_HASH.slice(1));
    let observer: IntersectionObserver | undefined;

    if (section) {
      // Once the user scrolls, visibility of the section governs the highlight.
      observer = new IntersectionObserver(
        ([entry]) => setExperienceActive(entry.isIntersecting),
        { rootMargin: "-35% 0px -45% 0px", threshold: 0 },
      );
      observer.observe(section);
    }

    return () => {
      window.removeEventListener("hashchange", syncHash);
      observer?.disconnect();
    };
  }, [isHome]);

  if (path === "/about") return "/about";
  if (path === "/life") return "/life";
  if (isHome) return experienceActive ? "/#experience" : "/";
  return null;
}
