import Image from "next/image";

export default function BuilderPage() {
  return (
    <div className="flex flex-col items-center justify-center p-10 text-center">
      <Image
        src="https://avatars.githubusercontent.com/u/00000000"
        alt="Khano Avatar"
        width={120}
        height={120}
        className="rounded-full shadow-lg mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">Khano</h1>

      <p className="text-lg text-gray-300 max-w-xl mb-6">Builder and Web3 adventurer. Member of BuidlGuidl Batch 22.</p>

      <div className="space-y-1 text-sm">
        <p>
          <strong>Address:</strong>
        </p>
        <p className="font-mono text-sm text-blue-400">0x5258c93FbF34600a89bb1B7A57Fe9B981A693Fc7</p>
      </div>

      <div className="mt-6 flex space-x-6">
        <a href="https://x.com/" target="_blank" className="text-blue-400 hover:underline">
          Twitter
        </a>

        <a href="https://github.com/" target="_blank" className="text-purple-400 hover:underline">
          GitHub
        </a>
      </div>
    </div>
  );
}
