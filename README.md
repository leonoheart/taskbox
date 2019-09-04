# taskbox
storybook

#ignore vscode configuration
1.git rm -r --cached .vscode            //to delete the checked in folder
2.add ".vscode/" into the .gitignore file and repush

#solve the require.context error
use plugin to polyfill(mock) the webpack functionality with Jest
1.npm install --save-dev require-context.macro
2.in the storybook config file,import 'require-context.macro' and run it in place of 'require.context'

#solve the cannot resolve 'XXX' error
1.make sure the error lib are installed in the node-modules folder
2.make sure the required lib are in package.json
3.delete package-json-lock and yarn-lock and then delate the node-modules folder
4.reinsatll
5.check   -->>solved(the cra sometimes have not completed installed)
6.if not ,check the version of yarn or npm
*remember: when cra, do not try to manually intall package, this wanna be a version related error

#a tiny coding miss
store = createStore? error solved, but still on question

#tutorial does not mention how to use the store
   .addDecorator(story => (
        <Provider store={store}>
            {story()}
        </Provider>))

#cannot add style to a router or Provider cause they are not tag,but how?
