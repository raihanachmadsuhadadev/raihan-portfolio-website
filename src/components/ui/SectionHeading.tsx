type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  theme = "light",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
  className={`mb-8 max-w-3xl ${
    isCenter ? "mx-auto text-center" : ""
  }`}
>
      <p
        className={`mb-3 text-sm font-medium uppercase tracking-[0.25em] ${
          isDark ? "text-blue-200" : "text-blue-600"
        }`}
      >
        {label}
      </p>

      <h2
        className={`text-3xl font-semibold tracking-tight md:text-4xl ${
          isDark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-3 text-base leading-7 ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}