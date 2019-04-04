import { pluginConfig } from '../config/plugin.config';
import { PluginManager } from 'mv';

/**
 * Holds the parameters of the plugin
 * @memberof Greeting
 * @namespace Params
 */
let Params = PluginManager.parameters(pluginConfig.pluginName);
Object.keys(Params).forEach(key => {
  let parameter = Params[key];
  if (!isNaN(parameter)) {
    Params[key] = Number(parameter);
  } else if (parameter === 'true') {
    Params[key] = true;
  } else if (parameter === 'false') {
    Params[key] = false;
  } else {
    Params[key] = parameter;
  }
});

export default Params;
