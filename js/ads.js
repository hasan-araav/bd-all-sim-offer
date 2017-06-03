// var isAppForeground = true;

// function onAdLoaded(e) {
//   if (isAppForeground) {
//     if (e.adType === admob.AD_TYPE.INTERSTITIAL) {
//       // admob.showInterstitialAd();
//     }
//   }
// }

// function onAdClosed(e) {
//   if (isAppForeground) {
//     if (e.adType === admob.AD_TYPE.INTERSTITIAL) {
//     	// admob.requestInterstitialAd();
//       setTimeout(admob.requestInterstitialAd, 1000 * 30);
//     }
//   }
// }

// function onPause() {
//   if (isAppForeground) {
//     admob.destroyBannerView();
//     isAppForeground = false;
//   }
// }

// function onResume() {
//   if (!isAppForeground) {
//     setTimeout(admob.createBannerView, 1);
//     setTimeout(admob.requestInterstitialAd, 1);
//     isAppForeground = true;
//   }
// }

// // optional, in case respond to events
// function registerAdEvents() {
//   document.addEventListener(admob.events.onAdLoaded, onAdLoaded);
//   document.addEventListener(admob.events.onAdClosed, onAdClosed);

//   document.addEventListener("pause", onPause, false);
//   document.addEventListener("resume", onResume, false);
// }

// function initAds() {
//   if (admob) {
//     var adPublisherIds = {
//       ios : {
//         banner : "ca-app-pub-XXXXXXXXXXXXXXXX/BBBBBBBBBB",
//         interstitial : "ca-app-pub-XXXXXXXXXXXXXXXX/IIIIIIIIII"
//       },
//       android : {
//         banner : "ca-app-pub-8252539561998142/2376602510",
//         interstitial : "ca-app-pub-8252539561998142/6806802114"
//       }
//     };

//     var admobid = (/(android)/i.test(navigator.userAgent)) ? adPublisherIds.android : adPublisherIds.ios;

//     admob.setOptions({
//       publisherId:          admobid.banner,
//       interstitialAdId:     admobid.interstitial,
//       autoShowInterstitial: false,
//       isTesting: true
//     });

//     registerAdEvents();

//   } else {
//     alert('AdMobAds plugin not ready');
//   }
// }

// function onDeviceReady() {
//   document.removeEventListener('deviceready', onDeviceReady, false);
//   initAds();

//   // display a banner at startup
//   admob.createBannerView();

//   // request an interstitial
//   admob.requestInterstitialAd();
// }

// document.addEventListener("deviceready", onDeviceReady, false);

function initAds() {
      if (admob) {
        var adPublisherIds = {
          ios : {
            banner : "ca-app-pub-XXXXXXXXXXXXXXXX/BBBBBBBBBB",
            interstitial : "ca-app-pub-XXXXXXXXXXXXXXXX/IIIIIIIIII"
          },
          android : {
            banner : "ca-app-pub-8252539561998142/2376602510",
        	interstitial : "ca-app-pub-8252539561998142/6806802114"
          }
        };

        var admobid = (/(android)/i.test(navigator.userAgent)) ? adPublisherIds.android : adPublisherIds.ios;

        admob.setOptions({
          publisherId:      admobid.banner,
          interstitialAdId: admobid.interstitial,
          tappxIdiOS:       "/XXXXXXXXX/Pub-XXXX-iOS-IIII",
          tappxIdAndroid:   "/XXXXXXXXX/Pub-XXXX-Android-AAAA",
          tappxShare:       0.5,
          autoShowInterstitial: false
        });

        registerAdEvents();

      } else {
        alert('AdMobAds plugin not ready');
      }
    }

    function onAdLoaded(e) {
      if (e.adType === admob.AD_TYPE.INTERSTITIAL) {
        // admob.showInterstitialAd();
        showNextInterstitial = setTimeout(function() {
          admob.requestInterstitialAd();
        }, 15 * 1000); // 30 seconds
      }
    }

    // optional, in case respond to events
    function registerAdEvents() {
      document.addEventListener(admob.events.onAdLoaded, onAdLoaded);
      document.addEventListener(admob.events.onAdFailedToLoad, function (e) {});
      document.addEventListener(admob.events.onAdOpened, function (e) {});
      document.addEventListener(admob.events.onAdClosed, function (e) {});
      document.addEventListener(admob.events.onAdLeftApplication, function (e) {});
      document.addEventListener(admob.events.onInAppPurchaseRequested, function (e) {});
    }

    function onDeviceReady() {
      document.removeEventListener('deviceready', onDeviceReady, false);
      initAds();

      // display a banner at startup
      admob.createBannerView();

      // request an interstitial
      admob.requestInterstitialAd();
    }

    document.addEventListener("deviceready", onDeviceReady, false);