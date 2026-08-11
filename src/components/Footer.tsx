import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-line py-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 font-mono text-[12px] text-cmt sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>{`© ${new Date().getFullYear()} ${profile.shortName}`}</p>
        <a href={`mailto:${profile.email}`} className="hover:text-gold">
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
