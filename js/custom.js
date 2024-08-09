
  (function(d, w, s) {
	var widgetHash = '5mbvrdky9mb008kuvjim', ctw = d.createElement(s); ctw.type = 'text/javascript'; ctw.async = true;
	ctw.src = '//widgets.binotel.com/calltracking/widgets/'+ widgetHash +'.js';
	var sn = d.getElementsByTagName(s)[0]; sn.parentNode.insertBefore(ctw, sn);
  })(document, window, 'script');

(function(d, w, s) {
    var widgetHash = 'uJNwSpBFspBKGaooSKUD', bch = d.createElement(s); bch.type = 'text/javascript'; bch.async = true;
    bch.src = '//widgets.binotel.com/chat/widgets/' + widgetHash + '.js';
    var sn = d.getElementsByTagName(s)[0]; sn.parentNode.insertBefore(bch, sn);
})(document, window, 'script');

  (function(d, w, s) {
	var widgetHash = '07dl0b7pdwfberxbqdxg', gcw = d.createElement(s); gcw.type = 'text/javascript'; gcw.async = true;
	gcw.src = '//widgets.binotel.com/getcall/widgets/'+ widgetHash +'.js';
	var sn = d.getElementsByTagName(s)[0]; sn.parentNode.insertBefore(gcw, sn);
  })(document, window, 'script');



  (function () {
    var webSdkScript = document.createElement("script");
  
    // fetch the latest version of the Web-SDK from the CDN
    webSdkScript.src =
      "https://unpkg.com/@grafana/faro-web-sdk@^1.4.0/dist/bundle/faro-web-sdk.iife.js";
  
    webSdkScript.onload = () => {
      window.GrafanaFaroWebSdk.initializeFaro({
        url: "https://faro-collector-prod-us-east-0.grafana.net/collect/1dd5a6022d93c8ff46e8b3cf7411fbc2",
        app: {
          name: "Test Site",
          version: "1.0.0",
          environment: "production",
        },
        
      });
  
  
      // Load instrumentations at the onLoad event of the web-SDK and after the above configuration.
      // This is important because we need to ensure that the Web-SDK has been loaded and initialized before we add further instruments!
      var webTracingScript = document.createElement("script");
  
      // fetch the latest version of the Web Tracing package from the CDN
      webTracingScript.src =
        "https://unpkg.com/@grafana/faro-web-tracing@^1.4.0/dist/bundle/faro-web-tracing.iife.js";
  
      // Initialize, configure (if necessary) and add the the new instrumentation to the already loaded and configured Web-SDK.
      webTracingScript.onload = () => {
        window.GrafanaFaroWebSdk.faro.instrumentations.add(
          new window.GrafanaFaroWebTracing.TracingInstrumentation()
        );
      };
  
      // Append the Web Tracing script script tag to the HTML page
      document.head.appendChild(webTracingScript);
    };
  
    // Append the Web-SDK script script tag to the HTML page
    document.head.appendChild(webSdkScript);
  })();