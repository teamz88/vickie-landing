import React from "react";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Privacy Policy | Vickie Voice AI Agent",
  description:
    "Read the Privacy Policy for Vickie Voice AI Agent by Omadli LLC.",
  alternates: {
    canonical: "https://vickievoiceai.com/privacy-policy/",
  },
};

async function getFileContent(relativePath: string) {
  const filePath = path.join(process.cwd(), relativePath);
  return fs.promises.readFile(filePath, "utf8");
}

function renderInline(text: string): React.ReactNode[] {
  const parts = text.split("**");
  return parts.map((part, idx) =>
    idx % 2 === 1 ? (
      <strong key={`inline-${idx}-${part}`} className="font-semibold text-[#19331B]">{part}</strong>
    ) : (
      <span key={`inline-${idx}-${part}`}>{part}</span>
    )
  );
}

function renderContent(content: string): React.ReactNode {
  const lines = content.split(/\r?\n/);
  const nodes: React.ReactNode[] = [];
  let currentParagraph: string[] = [];
  let currentList: string[] = [];

  const flushParagraph = () => {
    if (currentParagraph.length) {
      const text = currentParagraph.join(" ");
      nodes.push(
        <p key={`p-${nodes.length}`} className="text-base sm:text-lg text-[#333] leading-relaxed mb-4">
          {renderInline(text)}
        </p>
      );
      currentParagraph = [];
    }
  };

  const flushList = () => {
    if (currentList.length) {
      nodes.push(
        <ul key={`ul-${nodes.length}`} className="list-disc pl-6 sm:pl-8 text-base sm:text-lg text-[#333] space-y-2 mb-4">
          {currentList.map((item, i) => (
            <li key={`li-${nodes.length}-${i}`} className="leading-relaxed">
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }

    if (/^###\s+/.test(trimmed)) {
      flushParagraph();
      flushList();
      const text = trimmed.replace(/^###\s+/, "");
      nodes.push(
        <h3 key={`h3-${nodes.length}`} className="text-xl sm:text-2xl font-semibold text-[#19331B] mt-5 mb-2">
          {renderInline(text)}
        </h3>
      );
      continue;
    }
    if (/^##\s+/.test(trimmed)) {
      flushParagraph();
      flushList();
      const text = trimmed.replace(/^##\s+/, "");
      nodes.push(
        <h2 key={`h2-${nodes.length}`} className="text-2xl sm:text-3xl font-semibold text-[#19331B] mt-6 mb-3">
          {renderInline(text)}
        </h2>
      );
      continue;
    }
    if (/^#\s+/.test(trimmed)) {
      flushParagraph();
      flushList();
      const text = trimmed.replace(/^#\s+/, "");
      nodes.push(
        <h1 key={`h1-${nodes.length}`} className="text-3xl sm:text-4xl font-semibold text-[#19331B] mb-4">
          {renderInline(text)}
        </h1>
      );
      continue;
    }
    if (/^\*\*.*\*\*$/.test(trimmed)) {
      flushParagraph();
      flushList();
      const text = trimmed.replace(/^\*\*(.*)\*\*$/, "$1");
      nodes.push(
        <h2 key={`bold-${nodes.length}`} className="text-2xl sm:text-3xl font-semibold text-[#19331B] mt-6 mb-3">
          {renderInline(text)}
        </h2>
      );
      continue;
    }

    if (/^-\s+/.test(trimmed)) {
      const item = trimmed.replace(/^-\s+/, "");
      currentList.push(item);
      continue;
    }

    currentParagraph.push(trimmed);
  }

  flushParagraph();
  flushList();

  return nodes;
}

export default async function PrivacyPolicyPage() {
  const content = await getFileContent("privacy.txt");

  return (
    <div className="w-full bg-white mb-52 md:mb-80">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 sm:py-14 lg:py-16">
        <header className="mb-6 sm:mb-8 lg:mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#19331B]">
            Privacy Policy
          </h1>
          <p className="mt-2 text-base sm:text-lg text-[#4C4C4C]">
            Learn how we collect, use, and protect your information.
          </p>
        </header>

        <article className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
          {renderContent(content)}
        </article>
      </div>
    </div>
  );
}