package com.proprofs.qualaroo.capacitor;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.qualaroo.Qualaroo;

@CapacitorPlugin(name = "QualarooIonicCapacitorSDK")
public class QualarooIonicCapacitorSDKPlugin extends Plugin {

    private QualarooIonicCapacitorSDK implementation = new QualarooIonicCapacitorSDK();

    @PluginMethod
    public void initialize(PluginCall call) {
        String apiKey = call.getString("apiKey");
        Qualaroo.initializeWith(getContext())
                .setApiKey(apiKey)
                .init();
        JSObject ret = new JSObject();
        ret.put("value", apiKey);
        call.resolve(ret);
    }

    @PluginMethod
    public void showSurvey(PluginCall call) {
        String surveyAlias = call.getString("surveyAlias");
        Qualaroo.getInstance().showSurvey(surveyAlias);
        JSObject ret = new JSObject();
        ret.put("value", surveyAlias);
        call.resolve(ret);
    }

    @PluginMethod
    public void setUserId(PluginCall call) {
        String userId = call.getString("userId");
        Qualaroo.getInstance().setUserId(userId);
        JSObject ret = new JSObject();
        ret.put("value", userId);
        call.resolve(ret);
    }

    @PluginMethod
    public void setUsetUserPropertyserId(PluginCall call) {
        String key = call.getString("key");
        String value = call.getString("value");
        Qualaroo.getInstance().setUserProperty(key, value);
        JSObject ret = new JSObject();
        ret.put("value", key);
        call.resolve(ret);
    }

    @PluginMethod
    public void removeUserProperty(PluginCall call) {
        String key = call.getString("key");
        Qualaroo.getInstance().removeUserProperty(key);
        JSObject ret = new JSObject();
        ret.put("value", key);
        call.resolve(ret);
    }

    @PluginMethod
    public void setPreferredLanguage(PluginCall call) {
        String iso2Language = call.getString("iso2Language");
        Qualaroo.getInstance().setPreferredLanguage(iso2Language);
        JSObject ret = new JSObject();
        ret.put("value", iso2Language);
        call.resolve(ret);
    }

}
