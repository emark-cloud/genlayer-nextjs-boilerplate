import Header from '../components/Header';
import ContractPlayground from '../components/ContractPlayground';

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <Header />

      <h1 className="text-2xl font-bold mt-6">
        GenLayer Next.js Boilerplate
      </h1>

      <p className="mt-3 text-sm text-gray-600">
        A migration of the GenLayer project boilerplate to Next.js with wallet connection improvements.
      </p>

      <ContractPlayground />
    </main>
  );
}
