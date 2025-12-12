import WalletConnect from './WalletConnect';

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 border-b">
      <div className="flex items-center gap-3">
        <img
          src="/logo.png"
          alt="GenLayer Logo"
          width={36}
          height={36}
        />
        <span className="font-semibold text-lg">GenLayer Boilerplate (Next.js)</span>
      </div>

      <WalletConnect />
    </header>
  );
}
