import typescript from 'rollup-plugin-typescript2';
import license from 'rollup-plugin-license';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from "rollup-plugin-terser";
import mvConfig from './config/mv.config';
import { pluginConfig } from './config/plugin.config';
import * as paramsConfig from './config/params.config';
import generateParams from './tools/params.generator';

const filename = pluginConfig.pluginName;
const licensePlugin = license({
  banner: {
    file: `config/header.txt`,
    data() {
      return {
        ...pluginConfig,
        filename,
        parameters: generateParams(paramsConfig)
      };
    }
  }
});
const configs = [...makeInitialConfig(), ...makeMinConfig()];

function makeInitialConfig() {
  return [
    {
      external: ['mv'],
      input: 'src/index.ts',
      output: [
        {
          file: 'dist/' + filename + '.js',
          format: 'iife',
          name: pluginConfig.author + '_' + pluginConfig.pluginName,
          sourcemap: true,
          globals: {
            mv: 'window'
          }
        }
      ],
      plugins: [
        resolve(),
        commonjs(),
        typescript({
          typescript: require('typescript')
        }),
        licensePlugin
      ]
    }
  ];
}

function makeMinConfig() {
  if (mvConfig.miniVersion)
    return [
      {
        external: ['mv'],
        input: 'src/index.ts',
        output: [
          {
            file: 'dist/' + filename + '.min.js',
            format: 'iife',
            name: pluginConfig.author + '_' + pluginConfig.pluginName,
            sourcemap: true,
            globals: {
              mv: 'window'
            }
          }
        ],
        plugins: [
          resolve(),
          commonjs(),
          typescript({
            typescript: require('typescript')
          }),
          terser(),
          licensePlugin
        ]
      }
    ];
  return [];
}

export default configs;
