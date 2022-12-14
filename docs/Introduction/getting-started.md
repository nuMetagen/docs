---
sidebar_position: 1
---
# Getting Started

We created MetaSDK so developers can easily integrate and add certain AR-powered functions tailored to your needs. We will also help you with the AR Contents management and production and turn your ideas into reality.

Discuss with us on how you can add suitable functions for your Android apps by utilizing the Marker-based or Markerless AR technology or join our AR Ads Network and be our Publisher to generate additional revenue and monetize from AR Ads.

[![jitPack](https://jitpack.io/v/nuMetagen/nuMetagenSDKAndroid.svg)](https://jitpack.io/#nuMetagen/nuMetagenSDKAndroid)
[![pub package](https://img.shields.io/pub/v/numetagen_sdk_flutter.svg)](https://pub.dev/packages/numetagen_sdk_flutter)

## Installation

Installation Guide for specific platform.

:::caution
nuMetagenSDK require Android Minimal Sdk Version 26
:::

### Android - Maven Jitpack

1. Add the JitPack repository to your build file. Add it in your root build.gradle at the end of repositories:

    ```gradle
    allprojects {
        repositories {
            ...
            maven { url 'https://jitpack.io' }
        }
    }
   ```

2. Add the dependency

    ```gradle
    dependencies {
        implementation 'com.github.nuMetagen:nuMetagenSDKAndroid:0.8.4@aar'
    }
    ```

3. Add meta-data for API Key on your AndroidManifest.xml inside application tag.

    ```xml
    <meta-data android:name="id.numetagen.sdk.apikey" android:value="YOUR_API_KEY" />
    ```

### Android - Local File

1. Download SDK [Latest Version](https://github.com/nuMetagen/docs/releases/download/v0.8.3/nuMetagenSDK-0.8.3.aar)
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

4. Add meta-data for API Key on your AndroidManifest.xml inside application tag.

    ```xml
    <meta-data android:name="id.numetagen.sdk.apikey" android:value="YOUR_API_KEY" />
    ```

5. Implement on your app build.gradle, since nuMetagenSDK dependency with google AR Core, it may conflict with your current dependency. Change latest version based on file name and SDK Version.

    ```gradle
    implementation(name: 'numetagenSDK-<latest-version>', ext: 'aar')
    ```

6. Lastly, Sync your gradle and you are ready to go.

### Flutter - Android

1. Add the JitPack repository to your build file. Add it in your root build.gradle at the end of repositories:

    ```gradle
    allprojects {
        repositories {
            ...
            maven { url 'https://jitpack.io' }
        }
    }
   ```

2. Add dependency

    ```yaml
    dependencies:
      numetagen_sdk_flutter: ^0.8.6
    ```

3. Add meta-data for API Key on your AndroidManifest.xml inside application tag.

    ```xml
    <meta-data android:name="id.numetagen.sdk.apikey" android:value="YOUR_API_KEY" />
    ```

If you question please feel free to contact us on [our Website](https://numetagen.id/)
