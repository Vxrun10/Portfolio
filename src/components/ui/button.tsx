interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  primary?: boolean;
}

export default function Button({
  children,
  href,
  primary = false,
}: ButtonProps) {
  const classes =
    primary
      ? "bg-orange-500 hover:bg-orange-600 text-white"
      : "border border-slate-600 hover:border-cyan-500";

  if (href) {
    return (
      <a
        href={href}
        className={`px-6 py-3 rounded-xl font-medium transition ${classes}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`px-6 py-3 rounded-xl font-medium transition ${classes}`}
    >
      {children}
    </button>
  );
}