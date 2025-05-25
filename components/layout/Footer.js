import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="py-8 bg-slate-900 border-t border-slate-700">
        <div className="container mx-auto space-y-4 px-6 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} TechOpath. All rights reserved.</p>

          <p>
            ₊⊹ Built with ❤︎ by{" "}
            <a href="https://www.tivere.tech" className="text-golden-logo">
              Tivere IDORO
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
