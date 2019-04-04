function humanToKebab(str) {
  return str.replace(/\s/gi, '');
}

function kebabToHuman(str) {
  return str;
}

function error(message) {
  console.log('/!\\ Error while generating plugin parameters:');
  throw new Error(message);
}

const preLine = ' * ';
let forbiddenKeys = ['display', 'param', 'children', 'fields', 'default', 'options', 'require'];
let parent = null;
export default function generate(config) {
  let string = '';
  const { params, structs } = config;

  for (const obj of params) {
    let display = obj.display || kebabToHuman(obj.param);
    let param = obj.param || humanToKebab(obj.display);
    if (!display && !param) {
      return error("A config should have at least a 'param' or 'display' field");
    }
    string += `\n${preLine}`;
    string += `@param ${param}\n${preLine}`;
    if (parent) string += `@parent ${parent}\n${preLine}`;
    if (obj.require) string += `@require 1\n${preLine}`;
    string += `@text ${display}\n${preLine}`;
    if (obj.children) {
      //string += `\n`;
      parent = param;
      string += generate({ params: obj.children, structs: [] });
      parent = null;
      string += `\n${preLine}`;
      continue;
    }
    for (const [key, value] of Object.entries(obj)) {
      if (!forbiddenKeys.includes(key)) {
        string += `@${key} ${value}\n${preLine}`;
      }
    }
    for (const opt of obj.options || []) {
      if (typeof opt === 'string') {
        string += `@option ${opt}\n${preLine}`;
      } else {
        string += `@option ${opt.display}\n${preLine}`;
        string += `@value ${opt.value}\n${preLine}`;
      }
    }
    if (obj.default) {
      if (typeof obj.default === 'string') string += `@default ${obj.default}\n${preLine}`;
      else string += `@default ${JSON.stringify(obj.default)}\n${preLine}`;
    }
  }

  for (const obj of structs) {
    let { name, fields } = obj;
    if (!name && !fields) {
      return error("A struct config should have the 'name' and 'fields' fields");
    }
    string += `\n${preLine}*/\n/*~struct~${name}:`;
    string += generate({ params: fields, structs: [] });
    string += '\n*/';
  }
  let arr = string.split('\n');
  arr.pop();
  string = arr.join('\n');

  return string;
};
