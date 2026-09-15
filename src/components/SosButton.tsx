"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Siren, X, ShieldWarning } from "@phosphor-icons/react";

export function SosButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        whileTap={{ scale: 0.94 }}
        transition={{ type: "spring", bounce: 0, duration: 0.3 }}
        className="flex items-center gap-1.5 bg-danger-tint px-3 py-1.5 text-xs font-semibold text-danger"
        style={{ borderRadius: 9999 }}
      >
        <Siren size={15} weight="fill" />
        SOS
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/30 p-4 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="glass-panel-elevated w-full max-w-sm p-6"
              style={{ borderRadius: 28 }}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center bg-danger-tint text-danger" style={{ borderRadius: 9999 }}>
                  <ShieldWarning size={22} weight="fill" />
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-muted"
                  aria-label="ปิด"
                >
                  <X size={20} />
                </button>
              </div>
              <h3 className="mt-4 text-lg font-semibold">แจ้งเหตุฉุกเฉิน (SOS)</h3>
              <p className="mt-2 text-sm text-muted">
                นี่คือต้นแบบสาธิตเท่านั้น ยังไม่เชื่อมต่อกับศูนย์รักษาความปลอดภัยจริง
                ในระบบใช้งานจริง การกดปุ่มนี้จะส่งพิกัดและแจ้งเหตุไปยังเจ้าหน้าที่ทันที
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-5 w-full bg-foreground py-2.5 text-sm font-medium text-white"
                style={{ borderRadius: 9999 }}
              >
                เข้าใจแล้ว
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
