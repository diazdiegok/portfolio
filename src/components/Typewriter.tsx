"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Seg = { text: string; cls: string };

const lines: Seg[][] = [
  [
    { text: "const ", cls: "text-keyword" },
    { text: "profile", cls: "text-fn" },
    { text: " = {", cls: "text-paper" },
  ],
  [
    { text: "  name: ", cls: "text-prop" },
    { text: '"Diego Nicolás Diaz"', cls: "text-str" },
    { text: ",", cls: "text-muted" },
  ],
  [
    { text: "  role: ", cls: "text-prop" },
    { text: '"Desarrollador Full Stack"', cls: "text-str" },
    { text: ",", cls: "text-muted" },
  ],
  [
    { text: "  location: ", cls: "text-prop" },
    { text: '"Paraná, Entre Ríos"', cls: "text-str" },
    { text: ",", cls: "text-muted" },
  ],
  [
    { text: "  stack: ", cls: "text-prop" },
    { text: '["SQL Server", "Python", "JavaScript", "React"]', cls: "text-str" },
    { text: ",", cls: "text-muted" },
  ],
  [
    { text: "  focus: ", cls: "text-prop" },
    { text: '"WEB + DATOS + IA"', cls: "text-str" },
    { text: ",", cls: "text-muted" },
  ],
  [
    { text: "  os: ", cls: "text-prop" },
    { text: '["Windows", "Linux", "Docker"]', cls: "text-str" },
    { text: ",", cls: "text-muted" },
  ],
  [
    { text: "  email: ", cls: "text-prop" },
    { text: '"diazdiegognicok@gmail.com"', cls: "text-str" },
    { text: ",", cls: "text-muted" },
  ],
  [{ text: "};", cls: "text-paper" }],
];

export function Typewriter({
  onDone,
  onProgress,
}: {
  onDone?: () => void;
  onProgress?: (ratio: number) => void;
}) {
  const chars = useMemo(
    () =>
      lines.flatMap((line, i) => [
        ...line.flatMap((seg) =>
          seg.text.split("").map((ch) => ({ ch, cls: seg.cls })),
        ),
        ...(i < lines.length - 1 ? [{ ch: "\n", cls: "" }] : []),
      ]),
    [],
  );

  const [count, setCount] = useState(0);
  const done = count >= chars.length;
  const onDoneRef = useRef(onDone);
  const onProgressRef = useRef(onProgress);
  onDoneRef.current = onDone;
  onProgressRef.current = onProgress;

  useEffect(() => {
    onProgressRef.current?.(chars.length ? count / chars.length : 1);
  }, [count, chars.length]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setCount(chars.length);
      onDoneRef.current?.();
      return;
    }
    if (count >= chars.length) {
      onDoneRef.current?.();
      return;
    }
    const delay = chars[count]?.ch === "\n" ? 140 : 18;
    const id = window.setTimeout(() => setCount((n) => n + 1), delay);
    return () => window.clearTimeout(id);
  }, [count, chars]);

  const visible = chars.slice(0, count);

  return (
    <pre className="font-mono text-[13px] leading-7 sm:text-[15px] sm:leading-8">
      <code>
        {visible.map((c, i) =>
          c.ch === "\n" ? (
            <br key={i} />
          ) : (
            <span key={i} className={c.cls}>
              {c.ch}
            </span>
          ),
        )}
        <span className="caret" aria-hidden />
      </code>
      <span className="sr-only">
        {done
          ? "const profile = { name: Diego Nicolás Diaz, role: Desarrollador Full Stack, location: Paraná Entre Ríos }"
          : ""}
      </span>
    </pre>
  );
}
