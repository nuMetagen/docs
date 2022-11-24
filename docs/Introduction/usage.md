---
sidebar_position: 2
---
# Usage

## AR Ads

## Android - Kotlin

### Basic Usage - Move to AR Ads Activity

1. Import nuMetagenSDK

    ```kotlin
    import id.numetagen.sdk.NuMetagenAdsActivity
    ```

2. Create Intent Activity and Start it.

    ```kotlin
    val i = Intent(this, NuMetagenAdsActivity::class.java)
    startActivity(i)
    ```

## Installation

Installation Guide for specific platform. For now still using local file.

### Android

Currently we only provide local sdk. Will publish it on mavenCentral  

1. Download SDK [Latest Version](https://github.com/nuMetagen/nuMetagen.github.io/releases/download/v0.6.1/nuMetagenSDK-0.6.1.zip/)
2. Create libs folder and add all nuMetagenSDK to your android project root/libs/ folder
3. Add libs folder on your repository to access local library in settings.gradle

    ```xml
    repositories {
        google()
        mavenCentral()
        flatDir {
            dirs 'libs'
        }
    }
    ```

4. Add meta-data for API Key on your AndroidManifest.xml inside application tag.

    ```xml
    <meta-data android:name="id.numetagen.sdk.apikey" android:value="YOUR_API_KEY" />
    ```

5. Implement on your app build.gradle, since nuMetagenSDK dependency with google AR Core, add it with sdk.

    ```gradle
    implementation 'com.google.ar:core:1.34.0'
    implementation(name: 'nuMetagenSDK-core', ext: 'aar')
    implementation(name: 'nuMetagenSDK-ads', ext: 'aar')
    ```

6. Lastly, Sync your gradle and you are ready to go.

If you question please feel free to contact us on [our Website](https://numetagen.id/)

<!-- ## FAQ
- Where i can get APIKey?
    
    You can Contact nuMetagen for getting API Key

- I want to publish my ads on nuMetagen AR Ads?

    Contact nuMetagen  -->
