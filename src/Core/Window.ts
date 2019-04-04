import Params from '../Params';
import {Window_Base} from 'mv';

/**
 * A window that display a greeting on the map
 */
export default class GreetingWindow extends Window_Base {
  constructor() {
    super(0, 0, 0, 0);
    this.move(0, 0, this.windowWidth(), this.windowHeight());
    this.opacity = Params.Opacity;
    this.createContents();
    this.refresh();
  }

  windowWidth() {
    return 240;
  }

  windowHeight() {
    return this.fittingHeight(1);
  }

  /**
   * Draw the content of the window
   */
  refresh(text = Params.Text) {
    this.drawText(text, 0, 0, this.contentsWidth());
  }
}
