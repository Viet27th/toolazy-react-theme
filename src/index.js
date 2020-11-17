/**
 * References you need to know before write a library for React:
 * - https://webpack.js.org/guides/author-libraries/#expose-the-library
 * To bundle a javascript library with Wepack.
 * 
 * - https://medium.com/better-programming/how-to-publish-a-react-component-library-c89a07566770
 * All you need to know how to write a library for React like bundle, npm install local package, publish to npm.
 * 
 * - https://webpack.js.org/configuration/externals/
 * 
 * - https://webpack.js.org/configuration/resolve/
 * 
 * - https://flaviocopes.com/npm-peer-dependencies/
 * 
 * - https://medium.com/dailyjs/how-to-use-npm-link-7375b6219557
 * Mooking import. The way to npm install a local library.
 * 
 * After you finish coding, bundle it, publish to npm and using it on another project. Suppose it is project A.
 * So, project A are using your library, you will get an Error: Minified React error #321,
 * Because there are two React instances in your project, ene is in your React project, and
 * another one is in the package you created. The solve this problem, you need to go to your library and:
 * + Config webpack.externals to remove React from bundle file.
 * 
 * + Config webpack.resolve: because your library still using React something like that: "import React from 'react'" 
 * so you need to tell Webpack use React dependency on A project instead on your library when Webpack is bundling.
 * If you don't specify this config, at the time Webpack bundling your library, it can't 
 * resolve to React dependency on your library.
 * 
 * + Config package.json "peerDependencies": Because your library needs to 
 * use React dependency, you must therefore addition React dependency here. By that way, anytime other 
 * projects install your library, all libraries in peerDependencies angle bracket will be install.
 * In other words, the code that includes your library must include all 
 * libraries below peerDependencies as its dependency.
 */
export {toolazyReactTheme} from './utils';
export {withToolazyReactTheme} from './withToolazyReactTheme';
