"use client";

import Image from "next/image";
import Link from "next/link";
import { agency } from "@/lib/siteContent";
import { headerLogo } from "@/lib/header-nav";
import { useResolvedTheme } from "@/lib/useResolvedTheme";

type HeaderBrandProps = {
  textClassName?: string;
};

export function HeaderBrand({
  textClassName = "font-display text-2xl font-bold uppercase tracking-[0.18em]",
}: HeaderBrandProps) {
  const resolvedTheme = useResolvedTheme();
  const logoSrc = resolvedTheme === "dark" ? headerLogo.onDark : headerLogo.onLight;

  return (
    <Link
      href={headerLogo.href}
      className="site-header-logo flex items-center gap-2.5 no-underline md:gap-3"
      aria-label={headerLogo.alt}
    >
      <Image
        key={logoSrc}
        src={logoSrc}
        alt=""
        width={headerLogo.width}
        height={headerLogo.height}
        className="h-8 w-auto shrink-0 object-contain md:h-9"
        priority
      />
      <span className={textClassName}>{agency.nameUpper}</span>
    </Link>
  );
}
