import { registerPlugin } from '@capacitor/core';

import type { QualarooIonicCapacitorSDKPlugin } from './definitions';

const QualarooIonicCapacitorSDK =
  registerPlugin<QualarooIonicCapacitorSDKPlugin>('QualarooIonicCapacitorSDK', {
    web: () => import('./web').then(m => new m.QualarooIonicCapacitorSDKWeb()),
  });

export * from './definitions';
export { QualarooIonicCapacitorSDK };
