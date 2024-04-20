import Image from "next/image";

function Header() {
  return <p>Header is here! </p>;
}
function Footer() {
  return <p>Footer !!</p>;
}

function ElementInList() {
  return (
    <div>
      <p>This is element</p>
    </div>
  );
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <ElementInList />
      <ElementInList />
      <ElementInList />
      <h1 className="text-4xl font-bold text-gray-900">Hello Next.js 123!</h1>
      <Footer />
    </main>
  );
}
