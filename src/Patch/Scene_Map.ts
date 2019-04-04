import Window from '../Core/Window';
import * as MV from 'mv';

export class PatchedScene_Map extends MV.Scene_Map {
  _greetingWindow: Window;

  createAllWindows() {
    super.createAllWindows();
    this._greetingWindow = new Window();
    this.addChild(this._greetingWindow);
  }
};

declare var Scene_Map;
Scene_Map = PatchedScene_Map;
