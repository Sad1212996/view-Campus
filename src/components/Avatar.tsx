export function Avatar({
  initials,
  accentHex,
}: {
  initials: string;
  accentHex: string;
}) {
  return (
    <div
      className="flex h-16 w-16 shrink-0 items-center justify-center border-2 font-serif text-xl font-semibold"
      style={{
        backgroundColor: `${accentHex}14`,
        color: accentHex,
        borderColor: `${accentHex}55`,
        borderRadius: 6,
      }}
    >
      {initials}
    </div>
  );
}
