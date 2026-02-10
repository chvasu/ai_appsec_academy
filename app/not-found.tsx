"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldAlert } from "lucide-react";

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirect = setTimeout(() => {
      router.push("/");
    }, 4000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [router]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-red-500/10 border border-red-500/30">
            <ShieldAlert className="w-12 h-12 text-red-400" />
          </div>
        </div>

        <p className="text-sm text-red-400 font-mono mb-3">
          &gt; ERROR 404: ACCESS DENIED
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-cyber-text mb-4">
          Page Not Found
        </h1>

        <p className="text-cyber-muted mb-8">
          The page you&#39;re looking for doesn&#39;t exist or has been moved.
        </p>

        <p className="text-sm text-cyber-muted font-mono mb-6">
          Redirecting to home in{" "}
          <span className="text-cyber-accent font-bold">{countdown}</span>{" "}
          second{countdown !== 1 ? "s" : ""}...
        </p>

        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-accent/10 border border-cyber-accent/40 rounded-lg text-cyber-accent hover:bg-cyber-accent/20 transition-all duration-300 font-mono text-sm"
        >
          &gt; cd /home
        </a>
      </div>
    </div>
  );
}
