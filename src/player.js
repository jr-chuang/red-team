import * as THREE from 'three';

export default class PLAYER {

  static load ( STATE ) { }

  static init ( STATE ) {

    // Instantiate all player properties (eg. acceleration, state, etc.)
  	let geo = new THREE.BoxBufferGeometry( 20, 32, 1);

    //let mat = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
  	let mat = STATE.materials.get('player');
  	//mat.transparent = true;
    //mat.opacity = 0.5;

  	let obj = new THREE.Mesh( geo, mat );
  	obj.position.set( -150, 50, 75 );
    obj.castShadow = true;

    STATE.player = {
      obj: obj
    };

    // Add player to scene.
    STATE.scene.add( STATE.player.obj );

  }

  static update ( STATE, deltaTime ) {

    // left
    if (STATE.keyboard.isPressed(37)) {
      STATE.player.obj.position.x -= 100 * deltaTime;
    }

    // Up
    if (STATE.keyboard.isPressed(38)) {
      STATE.player.obj.position.y += 100 * deltaTime;
    }

    // Right
    if (STATE.keyboard.isPressed(39)) {
      STATE.player.obj.position.x += 100 * deltaTime;
    }

    // Down
    if (STATE.keyboard.isPressed(40)) {
      STATE.player.obj.position.y -= 100 * deltaTime;
    }

    // Space
    if (STATE.keyboard.startPressed(32)) {
      STATE.sounds.play('test');
    }

    // Use the above the modify player state.

    // Check for collisions, respond appropriately.

    // Adjust camera as necessary.
    STATE.camera.position.set(
      STATE.player.obj.position.x,
      STATE.player.obj.position.y + 75,
      300
    );

  }

}
