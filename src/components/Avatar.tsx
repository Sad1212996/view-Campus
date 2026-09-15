import Image from "next/image";

export function Avatar({
  initials,
  accentHex,
  photoSrc,
}: {
  initials: string;
  accentHex: string;
  photoSrc?: string;
}) {
  if (photoSrc) {
    return (
      <div
        className="relative h-16 w-16 shrink-0 overflow-hidden border-2"
        style={{ borderRadius: 18, borderColor: `${accentHex}55` }}
      >
        <Image
          src={photoSrc}
          alt=""
          fill
          sizes="64px"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className="flex h-16 w-16 shrink-0 items-center justify-center border-2 font-semibold text-xl"
      style={{
        backgroundColor: `${accentHex}14`,
        color: accentHex,
        borderColor: `${accentHex}55`,
        borderRadius: 18,
      }}
    >
      {initials}
    </div>
  );
}
