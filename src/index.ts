import Window from "./Core/Window";
import Controller from "./Core/Controller";
export * from "./Patch/main";
import Params from './Params';

declare var Lecode: any;
//- Expose this plugin so other makers can access and modify it
//- The "Lecode" object is global. You should use your own signature
Lecode = Lecode || {};
Lecode.Greeting = {
    Window,
    Controller,
    Params
};
//- Exports something so rollup can bundle the code
export const Plugin = Lecode.Greeting;
