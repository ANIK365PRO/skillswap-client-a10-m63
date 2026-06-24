// "use client";
// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";
// export function ThemeSwitch() {
//   const { theme, setTheme } = useTheme();
//   return (
//     <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
//       {theme === "dark" ? <Sun /> : <Moon/>}
//     </button>
//   );
// }



"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="
        rounded-full p-2
        text-[var(--muted)]
        hover:bg-black/5
        dark:hover:bg-white/5
      "
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-[var(--accent)]" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}