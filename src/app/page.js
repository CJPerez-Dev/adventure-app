import dynamic from 'next/dynamic';

// Dynamically import the Globe component with SSR disabled
const Globe = dynamic(() => import('../components/globe.js'), { ssr: false });

export default function Home() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'white', margin: '20px 0' }}>
        I LOVE YOU JESS
      </h1>
      <Globe />
    </div>
  );
}
