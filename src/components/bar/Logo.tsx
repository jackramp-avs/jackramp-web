export default function Logo() {
  return (
    <a
      href={"/"}
      className="flex items-center justify-start gap-2 shine"
    >
      <img src="/jackramp-icon-small-gap.png" alt="Logo" className="object-cover object-center h-[60px]"/>
      <img src="/jackramp-text.png" alt="Logo" className="object-cover max-w-32 pt-2 hidden md:block"/>
    </a>
  );
}