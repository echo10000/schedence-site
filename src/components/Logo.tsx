import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", iconOnly = false }) => {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 font-semibold text-slate-900 hover:text-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-md ${className}`}
      aria-label="Schedence Home"
    >
      <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-blue-700 text-white shadow-sm ring-1 ring-blue-800/20">
        {/* Original timetable / S symbol */}
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Top bar of S */}
          <path
            d="M5 6C5 5.44772 5.44772 5 6 5H18C18.5523 5 19 5.44772 19 6C19 6.55228 18.5523 7 18 7H6C5.44772 7 5 6.55228 5 6Z"
            fill="currentColor"
          />
          {/* Left vertical block */}
          <rect x="5" y="8" width="4" height="3" rx="1" fill="#93c5fd" />
          {/* Middle bar of S */}
          <path
            d="M5 12C5 11.4477 5.44772 11 6 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H6C5.44772 13 5 12.5523 5 12Z"
            fill="currentColor"
          />
          {/* Right vertical block */}
          <rect x="15" y="14" width="4" height="3" rx="1" fill="#93c5fd" />
          {/* Bottom bar of S */}
          <path
            d="M5 18C5 17.4477 5.44772 17 6 17H18C18.5523 17 19 17.4477 19 18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18Z"
            fill="currentColor"
          />
          {/* Subtle balanced indicator dot */}
          <circle cx="18" cy="6" r="1.5" fill="#34d399" />
        </svg>
      </div>
      {!iconOnly && (
        <span className="text-xl tracking-tight font-bold text-slate-900">
          Schedence
        </span>
      )}
    </Link>
  );
};
