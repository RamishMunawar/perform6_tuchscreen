import type { Platform } from './index';

export const browserPlatform: Platform = {
  name: 'browser',
  init() {
    console.info('[Perform6] Running in browser dev mode (no BrightSign)');
  },
};
