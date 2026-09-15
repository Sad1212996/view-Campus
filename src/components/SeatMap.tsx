import { SteeringWheel } from "@phosphor-icons/react/dist/ssr";
import { buildSeatRows } from "@/lib/seat-layout";

const SIZES = {
  sm: { seat: 16, gap: 3, notch: 5 },
  lg: { seat: 34, gap: 7, notch: 11 },
} as const;

function SeatBlock({
  occupied,
  size,
}: {
  occupied: boolean;
  size: keyof typeof SIZES;
}) {
  const { seat, notch } = SIZES[size];
  return (
    <div
      className={
        occupied
          ? "relative border-2 border-primary bg-primary"
          : "relative border-2 border-border-strong bg-surface"
      }
      style={{ width: seat, height: seat, borderRadius: 3 }}
      aria-hidden="true"
    >
      <div
        className={occupied ? "absolute bg-white/30" : "absolute bg-border-strong"}
        style={{
          left: "50%",
          top: Math.round(seat * 0.16),
          width: notch,
          height: Math.round(seat * 0.22),
          transform: "translateX(-50%)",
          borderRadius: 1,
        }}
      />
    </div>
  );
}

export function SeatMap({
  capacity,
  onboard,
  size = "lg",
  showDriver = true,
  showLegend = true,
}: {
  capacity: number;
  onboard: number;
  size?: keyof typeof SIZES;
  showDriver?: boolean;
  showLegend?: boolean;
}) {
  const rows = buildSeatRows(capacity);
  const { seat, gap } = SIZES[size];
  let seatIndex = 0;

  return (
    <div>
      <div className="inline-flex flex-col" style={{ gap }}>
        {showDriver && (
          <div className="mb-1 flex items-center" style={{ gap }}>
            <div
              className="flex items-center justify-center border-2 border-accent bg-accent-tint text-accent"
              style={{ width: seat, height: seat, borderRadius: 3 }}
              title="คนขับ"
            >
              <SteeringWheel size={Math.round(seat * 0.6)} weight="bold" />
            </div>
            <span className="text-xs text-muted">คนขับ</span>
          </div>
        )}
        {rows.map((count, rowIdx) => (
          <div key={rowIdx} className="flex" style={{ gap }}>
            {Array.from({ length: count }).map((_, colIdx) => {
              const occupied = seatIndex < onboard;
              seatIndex += 1;
              return (
                <SeatBlock
                  key={colIdx}
                  occupied={occupied}
                  size={size}
                />
              );
            })}
          </div>
        ))}
      </div>

      {showLegend && (
        <div className="mt-4 flex items-center gap-4 border-t border-border pt-3 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <span
              className="inline-block border-2 border-border-strong bg-surface"
              style={{ width: 12, height: 12, borderRadius: 2 }}
            />
            ที่นั่งว่าง
          </span>
          <span className="flex items-center gap-1.5">
            <span
              className="inline-block border-2 border-primary bg-primary"
              style={{ width: 12, height: 12, borderRadius: 2 }}
            />
            มีผู้โดยสาร
          </span>
        </div>
      )}
    </div>
  );
}
