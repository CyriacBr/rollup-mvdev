//@ts-check
/**
 * @type {import('../tools/interfaces').Params}
 */
export const params = [
  {
    display: 'Window',
    children: [
      {
        param: 'Text',
        display: 'Content',
        type: 'text',
        default: 'Hello World!',
        desc: "The window's content."
      },
      {
        display: 'Opacity',
        type: 'number',
        default: 175,
        min: 0,
        max: 255
        //decimals: 2 <-- Possible field
      }
    ]
  },
  {
    display: 'Param Examples',
    children: [
      {
        display: 'File Example',
        type: 'file',
        dir: 'audio/bgm/',
        require: true
      },
      {
        display: 'Boolean Example',
        type: 'boolean',
        default: true,
        on: 'Yes',
        off: 'No'
      },
      {
        display: 'List Example',
        type: 'text[]'
      },
      {
        display: 'Struct Example',
        type: 'struct<MyStruct>',
        default: {
          Text: 'I am a text',
          Value: 50
        }
      },
      {
        display: 'Nested Example',
        children: [
          {
            display: 'Select Example',
            type: 'select',
            options: ['XP', 'VX', { display: 'VX Ace', value: '3.0' }, 'MV'],
            default: 'MV'
          }
        ]
      }
    ]
  }
];

/**
 * @type {import('../tools/interfaces').Structs}
 */
export const structs = [
  {
    name: 'MyStruct',
    fields: [
      {
        param: 'Text',
        type: 'text'
      },
      {
        param: 'Value',
        type: 'number'
      }
    ]
  }
];
