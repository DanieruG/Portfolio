import React from "react";
import { ReactDOM } from "next/dist/server/route-modules/app-page/vendored/rsc/entrypoints";

const positioning = {
  transform: "translate(-50%, -50%)",
  top: "50%",
  left: "50%",
};

export default function Modal({
  isOpen,
  children,
  isClosed,
}: {
  isOpen: boolean;
  children: React.ReactNode;
  isClosed: () => void;
}) {
  if (isOpen == false) {
    return null;
  }

  return (
    <div className="inset-0 z-1000 fixed bg-gray-400/10">
      <div
        className="fixed z-1000 bg-zinc-900 p-20 rounded-md"
        style={positioning}
      >
        {children}
        <button
          className="px-3 py-2 text-sm font-semibold text-white border border-white/20 rounded-md hover:bg-white hover:text-black transition-all duration-300"
          onClick={() => isClosed()}
        >
          Close modal
        </button>
      </div>
    </div>
  );
}
