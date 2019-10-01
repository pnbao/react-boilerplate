/**
 * Page Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a page component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Page Name?',
      default: 'Form',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value) ? 'A page with this name already exists' : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: (data) => {
    const actions = [
      {
        type: 'add',
        path: '../pages/{{dashCase name}}.js',
        templateFile: './page/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'prettify',
        path: '/pages/',
      },
    ];

    return actions;
  },
};
