# taskbox
storybook

##how to ignore vscode configuration
1.git rm -r --cached .vscode            //to delete the checked in folder
2.add ".vscode/" into the .gitignore file and repush

##how to solve the require.context error
use plugin to polyfill(mock) the webpack functionality with Jest
1.npm install --save-dev require-context.macro
2.in the storybook config file,import 'require-context.macro' and run it in place of 'require.context'
