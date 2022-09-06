import { WebPlugin } from '@capacitor/core';

import type { QualarooIonicCapacitorSDKPlugin } from './definitions';

export class QualarooIonicCapacitorSDKWeb
  extends WebPlugin
  implements QualarooIonicCapacitorSDKPlugin
{
  initialize(_options: { apiKey: string; }): Promise<{ apiKey: string; }> {
    throw new Error('Method not implemented.');
  }
  showSurvey(_options: { surveyAlias: string; }): Promise<{ surveyAlias: string; }> {
    throw new Error('Method not implemented.');
  }
  setUserId(_options: { userId: String; }): Promise<{ userId: string; }> {
    throw new Error('Method not implemented.');
  }
  setUsetUserPropertyserId(_options: { key: String; value: String; }): Promise<{ key: string; }> {
    throw new Error('Method not implemented.');
  }
  removeUserProperty(_options: { key: String; }): Promise<{ key: string; }> {
    throw new Error('Method not implemented.');
  }
  setPreferredLanguage(_options: { iso2Language: String; }): Promise<{ iso2Language: string; }> {
    throw new Error('Method not implemented.');
  } 
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
