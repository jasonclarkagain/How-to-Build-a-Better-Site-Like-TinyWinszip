import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "#1A1A1A",
          color: "#F2EDE8",
          border: "1px solid #2A2A2A",
          fontFamily: "'DM Sans', sans-serif",
        },
      }}
    />
  );
}
