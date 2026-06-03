import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface DeviceState {
  deviceId: string | null;
  token: string | null;
  setDevice: (payload: { deviceId: string; token: string }) => void;
  clear: () => void;
}

export const useDeviceStore = create<DeviceState>()(
  persist(
    (set) => ({
      deviceId: null,
      token: null,
      setDevice: ({ deviceId, token }) => set({ deviceId, token }),
      clear: () => set({ deviceId: null, token: null }),
    }),
    { name: 'perform6-device' },
  ),
);
