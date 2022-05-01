import { makeLinkComponent } from "@spark-web/link";
import { Link } from "@remix-run/react";
import type { ForwardedRef } from "react";

export const UniversalRemixLink = makeLinkComponent(
  (
    { href, children, onClick, rel, ...props },
    ref: ForwardedRef<HTMLAnchorElement>
  ) => {
    const shouldUseRemix = href[0] === "/";

    return shouldUseRemix ? (
      <Link ref={ref} to={href} {...props}>
        {children}
      </Link>
    ) : (
      <a
        ref={ref}
        href={href}
        rel={rel || "noreferrer noopener"}
        onClick={(event) => {
          if (href === "" || href === "#") {
            event.preventDefault();
          }

          if (typeof onClick === "function") {
            onClick(event);
          }
        }}
        {...props}
      >
        {children}
      </a>
    );
  }
);
