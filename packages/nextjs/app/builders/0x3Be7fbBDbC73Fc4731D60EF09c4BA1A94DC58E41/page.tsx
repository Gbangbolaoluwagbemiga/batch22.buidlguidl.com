import { Address } from "@scaffold-ui/components";

const BuilderPage = () => {
  return (
    <div className="flex items-center flex-col flex-grow pt-10 bg-base-200 min-h-screen">
      <div className="px-5 w-full max-w-4xl">
        <h1 className="text-center text-base-content">
          <span className="block text-2xl mb-2">Welcome to</span>
          <span className="block text-4xl font-bold">crypticdev&apos;s Page</span>
        </h1>
        <div className="flex justify-center items-center gap-12 flex-col sm:flex-row mt-8">
          <div className="flex flex-col bg-base-100 shadow-xl px-10 py-10 text-center items-center max-w-xs rounded-3xl border border-base-300">
            <h2 className="text-2xl font-bold text-base-content mb-4">crypticdev</h2>
            <Address address="0x3Be7fbBDbC73Fc4731D60EF09c4BA1A94DC58E41" />
            <p className="mt-4 text-lg text-base-content">
              Hello! I am a builder participating in Batch 22 of BuidlGuidl. Excited to learn and build cool things on
              Ethereum!
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/Gbangbolaoluwagbemiga"
                target="_blank"
                rel="noreferrer"
                className="link link-primary text-primary hover:text-primary-focus"
              >
                GitHub
              </a>
              <a
                href="https://x.com/GbangbolaPhilip"
                target="_blank"
                rel="noreferrer"
                className="link link-primary text-primary hover:text-primary-focus"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderPage;
