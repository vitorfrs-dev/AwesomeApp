const flavor = process.env.EXPO_PUBLIC_APP_ENV || "development";

const getPackage = () => {
  switch(flavor) {
    case "production":
      return "com.vitorfrs.AwesomeApp"
    case "staging":
      return "com.vitorfrs.AwesomeApp.staging"
    default:
      return "com.vitorfrs.AwesomeApp.development"
  }
}
module.exports = 
{
  expo: {
    name: "AwesomeApp",
    slug: "AwesomeApp",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      package: getPackage()
    },
    
    updates: {
      url: "https://u.expo.dev/dfe12262-05da-4208-bbb7-eb8fc0236060"
    },
    runtimeVersion: {
      policy: "sdkVersion"
    },
    
    extra: {
      eas: {
        projectId: "dfe12262-05da-4208-bbb7-eb8fc0236060"
      }
    }
  }
}
