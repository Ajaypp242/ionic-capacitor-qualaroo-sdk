#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(QualarooIonicCapacitorSDKPlugin, "QualarooIonicCapacitorSDK",
           CAP_PLUGIN_METHOD(initialize, CAPPluginReturnPromise);
                     CAP_PLUGIN_METHOD(showSurvey, CAPPluginReturnPromise);
                     CAP_PLUGIN_METHOD(setUserId, CAPPluginReturnPromise);
                     CAP_PLUGIN_METHOD(setUsetUserPropertyserId, CAPPluginReturnPromise);
                     CAP_PLUGIN_METHOD(removeUserProperty, CAPPluginReturnPromise);
                     CAP_PLUGIN_METHOD(setPreferredLanguage, CAPPluginReturnPromise);
)
