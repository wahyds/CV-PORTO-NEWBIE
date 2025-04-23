// layout.client.tsx
'use client';

import { useState } from "react";
import "./globals.css";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState("Some state");

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
