import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDeviceStore } from '../stores/deviceStore';

export default function Pairing() {
  const navigate = useNavigate();
  const setDevice = useDeviceStore((s) => s.setDevice);
  const [code, setCode] = useState('');

  const handlePair = () => {
    // Milestone 3: POST /devices/pair via API
    setDevice({ deviceId: 'dev-mock-' + code.trim(), token: 'mock-token' });
    navigate('/');
  };

  return (
    <main className="flex h-full flex-col items-center justify-center gap-6 p-8">
      <h2 className="text-2xl font-semibold">Pair this player</h2>
      <p className="max-w-md text-center text-slate-400">
        Enter the code from the Perform6 admin portal.
      </p>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="000000"
        className="w-64 rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-center text-2xl tracking-widest"
        maxLength={8}
      />
      <button
        type="button"
        onClick={handlePair}
        disabled={!code.trim()}
        className="rounded-xl bg-perform-primary px-8 py-3 font-semibold disabled:opacity-40"
      >
        Connect
      </button>
    </main>
  );
}
