export interface QualarooIonicCapacitorSDKPlugin {
  initialize(options: { apiKey: string }): Promise<{ apiKey: string }>;
  showSurvey(options: { surveyAlias: string }): Promise<{ surveyAlias: string }>;
  setUserId( options:{ userId: String }): Promise<{ userId: string }>;
  setUsetUserPropertyserId(options:{ key: String, value: String }): Promise<{ key: string }>;
  removeUserProperty(options:{ key: String }): Promise<{ key: string }>;
  setPreferredLanguage(options: { iso2Language: String }): Promise<{ iso2Language: string }>;
}
