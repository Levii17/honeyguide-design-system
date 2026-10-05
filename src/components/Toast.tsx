import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { copyText } from '@/lib/clipboard';

interface ToastApi { say: (msg: string) => void; copy: (text: string, label?: string) => Promise<void> }
const Ctx = createContext<ToastApi>({ say: () => {}, copy: async () => {} });
export const useToast = () => useContext(Ctx);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [msg, setMsg] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const say = useCallback((m: string) => {
    setMsg(m);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setMsg(null), 2200);
  }, []);
  useEffect(() => () => clearTimeout(timer.current), []);
  const copy = useCallback(async (text: string, label = text) => {
    say((await copyText(text)) ? `Copied ${label}` : "Couldn't copy, select the text instead");
  }, [say]);
  return (
    <Ctx.Provider value={{ say, copy }}>
      {children}
      <div role="status" aria-live="polite">{msg && <div className="toast">{msg}</div>}</div>
    </Ctx.Provider>
  );
}
