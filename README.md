# Getting Started

We created MetaSDK so developers can easily integrate and add certain AR-powered functions tailored to your needs. We will also help you with the AR Contents management and production and turn your ideas into reality.

Discuss with us on how you can add suitable functions for your Android apps by utilizing the Marker-based or Markerless AR technology or join our AR Ads Network and be our Publisher to generate additional revenue and monetize from AR Ads.

## Installation

Installation Guide for specific platform. For now still using local file.

### Android

Currently we only provide local sdk. Will publish it on mavenCentral  

1. Download SDK [Latest Version](https://github.com/nuMetagen/docs/releases/download/v0.7.0/numetagenSDK-0.7.0.aar)
2. Create libs folder and add all nuMetagenSDK to your android project root/libs/ folder
3. Add libs folder on your repository to access local library in settings.gradle

    ```xml
    ...
    repositories {
        google()
        mavenCentral()
        ...
        flatDir {
            dirs 'libs'
        }
    }
    ...
    ```

4. Add meta-data for API Key on your AndroidManifest.xml inside application tag

    ```xml
    <meta-data android:name="id.numetagen.sdk.apikey" android:value="YOUR_API_KEY" />
    ```

5. Implement on your app build.gradle, since nuMetagenSDK dependency with google AR Core, add it with sdk.

    ```gradle
    implementation(name: 'numetagenSDK-0.7.0', ext: 'aar')
    ```

6. Lastly, Sync your gradle and you are ready to go.

If you question please feel free to contact us on [our Website](https://numetagen.id/)
