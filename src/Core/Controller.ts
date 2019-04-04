import { Scene_Map, SceneManager } from 'mv';
import { PatchedScene_Map } from '../Patch/main';

function checkScene(scene: any): scene is PatchedScene_Map {
  return scene instanceof Scene_Map;
}

export default class Greeting {
  /**
   * Close the greeting window
   */
  static close() {
    const scene = SceneManager._scene;
    if (checkScene(scene)) {
      scene._greetingWindow.close();
    }
  }

  /**
   * Open the greeting window
   */
  static open() {
    const scene = SceneManager._scene;
    if (checkScene(scene)) {
      scene._greetingWindow.open();
    }
  }

  /**
   * Set the greeting window's content
   */
  static setText(text: string) {
    const scene = SceneManager._scene;
    if (checkScene(scene)) {
      scene._greetingWindow.refresh(text);
    }
  }
}
