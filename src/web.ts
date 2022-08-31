import { WebPlugin } from '@capacitor/core';

import type { QualarooIonicCapacitorSDKPlugin } from './definitions';

export class QualarooIonicCapacitorSDKWeb
  extends WebPlugin
  implements QualarooIonicCapacitorSDKPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
