const COLORS = ["bg-indigo-500","bg-emerald-500","bg-amber-500","bg-rose-500","bg-sky-500","bg-violet-500"];

export default function Avatar({ author, size = "md" }) {
  const sz = size === "sm" ? "w-7 h-7 text-xs" : "w-9 h-9 text-sm";
  const color = COLORS[author.name.charCodeAt(0) % COLORS.length];
  return (
    <div className={`${sz} ${color} rounded-full flex items-center justify-center flex-shrink-0`}>
      <span className="text-white font-semibold">{author.initials}</span>
    </div>
  );
}