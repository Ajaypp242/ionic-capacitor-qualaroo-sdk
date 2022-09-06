import Foundation
import Capacitor
import Qualaroo
/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(QualarooIonicCapacitorSDKPlugin)
public class QualarooIonicCapacitorSDKPlugin: CAPPlugin {
    private let implementation = QualarooIonicCapacitorSDK()

    
    @objc func initialize(_ call: CAPPluginCall) {
        let apiKey = call.getString("apiKey") ?? ""
        Qualaroo.shared.configure(with: apiKey)
        call.resolve([
            "value": apiKey
        ])
    }
    
    @objc func showSurvey(_ call: CAPPluginCall) {
         let surveyAlias = call.getString("surveyAlias") ?? ""
         Qualaroo.shared.showSurvey(with: surveyAlias)
         call.resolve([
             "value": surveyAlias
         ])
     }
    
    @objc func setUsetUserPropertyserId(_ call: CAPPluginCall) {
       let key = call.getString("key") ?? ""
        let value = call.getString("value") ?? ""
       Qualaroo.shared.addUserProperty(key, withValue: value)
       call.resolve([
           "value": key
       ])
   }
    
    @objc func removeUserProperty(_ call: CAPPluginCall) {
            let key = call.getString("key") ?? ""
        Qualaroo.shared.removeUserProperty(key)
            call.resolve([
                "value": key
            ])
        }
    
    @objc func setPreferredLanguage(_ call: CAPPluginCall) {
        let iso2Language = call.getString("iso2Language") ?? ""
      try?  Qualaroo.shared.setPreferredSurveysLanguage(iso2Language)
        call.resolve([
            "value": iso2Language
        ])
    }
    
}
