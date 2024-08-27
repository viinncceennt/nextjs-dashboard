import React from "react";
import { lusitana } from "@/app/ui/fonts";

export default function Page() {
  return (
    <div>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Customer page
      </h1>
    </div>
  );
}
