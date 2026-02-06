"use client";

import { useState } from "react";
import Link from "next/link";

interface TermsCheckboxProps {
  onAcceptChange: (accepted: boolean) => void;
  className?: string;
}

export function TermsCheckbox({ onAcceptChange, className }: TermsCheckboxProps) {
  const [checked, setChecked] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.checked;
    setChecked(val);
    onAcceptChange(val);
  }

  return (
    <label
      className={`flex items-start gap-2 text-xs text-cyber-muted cursor-pointer ${className ?? ""}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="mt-0.5 accent-emerald-500 cursor-pointer"
      />
      <span>
        I agree to the{" "}
        <Link
          href="/terms"
          target="_blank"
          className="text-cyber-accent hover:underline"
          onClick={(e) => e.stopPropagation()}
        >
          Terms &amp; Conditions
        </Link>
        , including the liability disclaimer and training policies.
      </span>
    </label>
  );
}
