import { Howl } from 'howler';

export default class SOUNDS {

  static load ( STATE ) {

    // SFX

    STATE.sounds.pool['test'] = new Howl({
      src: ['resources/audio/test.mp3']
    });

    // Speech Synthesis

  }

  static init ( STATE ) { }

  static update ( STATE, deltaTime ) { }

}
