import { Link } from 'react-router-dom';
import { useDeviceStore } from '../stores/deviceStore';

export default function Home() {
  const deviceId = useDeviceStore((s) => s.deviceId);

  return (
    <main className="flex h-full flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-4xl font-bold tracking-tight">Perform6</h1>
      <p className="text-slate-400">Touchscreen — Milestone 2 UI starts here</p>
      {deviceId ? (
        <p className="text-sm text-perform-primary">Device: {deviceId}</p>
      ) : (
        <Link
          to="/pairing"
          className="rounded-xl bg-perform-primary px-8 py-4 text-lg font-semibold text-white"
        >
          Pair device
        </Link>
      )}
    </main>
  );
}
