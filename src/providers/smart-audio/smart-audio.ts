// Credit: https://www.joshmorony.com/sound-effects-using-html5-and-native-audio-in-ionic/

import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

@Injectable()
export class SmartAudioProvider {

  /*
  In the constructor function we simply detect whether or not we are running on Cordova, 
  and if we are we switch the audioType to native. This will determine which method is used to play the audio.

  We have a preload function, which we will call at app startup to load in the audio that we want to use. 
  The key will be the string we use to reference a specific sound, and the asset will be the path to where 
  that audio file is located. In the case of HTML5 audio, we just create an object that contains the key and asset. 
  If we are using native audio, then we first preload the audio using preloadSimple and then we just store the key 
  for both the key and asset values in the object (we won’t need the file path to play the sound later). 
  Once the appropriate audio object has been created, we push it into our sounds array.

  In the play function, we supply it with the key that we used to preload the audio asset. 
  This will find that asset in the sounds array and then use the appropriate method to play it 
  (depending on whether we are using the HTML5 audio or the native audio).
  */

  audioType: string = 'html5';
  sounds: any = [];

  constructor(public nativeAudio: NativeAudio, platform: Platform) {

    if (platform.is('cordova')) {
      this.audioType = 'native';
    }
  }

  preload(key, asset) {
    if (this.audioType === 'html5') {
      let audio = {
        key: key,
        asset: asset,
        type: 'html5'
      };
      this.sounds.push(audio);

    } else {
      this.nativeAudio.preloadSimple(key, asset);
      let audio = {
        key: key,
        asset: asset,
        type: 'native'
      };
      this.sounds.push(audio);
    }
  }

  play(key) {
    let audio = this.sounds.find((sound) => {
      return sound.key === key;
    });

    if (audio.type === 'html5') {
      let audioAsset = new Audio(audio.asset);
      audioAsset.play();

    } else {
      this.nativeAudio.play(audio.asset).then((res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });
    }
  }
}