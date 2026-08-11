import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 text-[12px] uppercase tracking-[0.16em] text-muted sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} {profile.shortName}</p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}
