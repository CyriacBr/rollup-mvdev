import Controller from '../Core/Controller';
import * as MV from 'mv';

declare var Game_Interpreter;
Game_Interpreter = class extends MV.Game_Interpreter {
  pluginCommand(command, args) {
    super.pluginCommand(command, args);
    if (command === 'Greeting') {
      let action = args[0];
      if (action.match(/open/i)) {
        Controller.open();
      } else if (action.match(/close/i)) {
        Controller.close();
      }
    }
  }
};
