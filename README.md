# FRONTEND BOILERPLATE

This setup will compile multiple javascript/css files into one consolidated file. As of vue files, laravel mix uses vue-loaders out of the box to compile scripts into vanilla javascript

## Advantages

- Less files to embed
- Smaller file size
- Automatically minify css/js files when processed as production
- Vue files can be lazy loaded, this means smaller asset size
- Supports versioning, so you dont need to hard reset when changes are made

## Prerequisites

- Install [Node.js](https://nodejs.org/en/ "Node.js")
- IDE of your choice, best paired with ide that supports vetur plugin for linting and intellisense

## What's in the box?

- [laravel-mix](https://laravel-mix.com/ "laravel-mix") - a webpack wrapper that makes compiling of static assets and vue files easier
- [webpack-obfuscator](https://github.com/javascript-obfuscator/webpack-obfuscator "laravel-mix") - obfuscates javascript assets
- [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin "clean-webpack-plugin") - cleans output path on every execution
- [ejs-html](https://github.com/sitegui/ejs-html "ejs-html") - templating used to create html file/s
- [pretty](https://github.com/jonschlinkert/pretty "pretty") - prettifies generated html file/s
- [vue](https://vuejs.org/ "vue") - spa progressive javascript framework
- [vue-router](https://router.vuejs.org/ "vue-router") - official router of vue
- [vuex](https://vuex.vuejs.org/ "vuex") - state management

## Directory Structure

    .
    ├── assets                   # static assets
    ├── template                 # ejs templates
    ├── vuesrc                   # vue workspace
    ├───── components            # directory for vue components
    ├───── lib                   # directory third party libraries and helpers
    ├───── router                # directory of router plugin *vue-router
    ├───── store                 # directory for state management *vuex
    ├───── app.js                # main entry point of vue project, this is where the vue instance is created
    ├── .env                     # actual environment variables //this is not included on repository
    ├── .env.example             # example environment variable //use this as a sample to create .env
    ├── package.json             # configuration of dependency and runnable scripts
    ├── webpack.mix.js           # configuration of webpack
    ├── bs-config.json           # configuration for lite-server //this is not included on repository
    ├── bs-config.json.example   # configuration for lite-server //use this as a sample to create bs-config.json
    ├── .gitignore               # configuration for ignored files in repository
    ├── LICENSE
    └── README.md

### Notes:

- .env is a required file during execution, make sure to create this file after cloning the repository
- public folder will be created upon execution

### lite-server <Optional>

If you want to host your application locally like what apache/nginx does, you may use lite-server. Please check [lite-server](https://github.com/johnpapa/lite-server "lite-server") for installation details.
Make sure to create a "bs-config.json" file with the correct configuration to make this command work.
Also align the url and port used in the .env file or else there will be a mismatch on the server and your app.

Use this command to run server:

```
npm run start
```

## Run Commands

```
npm run watch //watch mode
npm run prod //production mode
```

### watch

This watches the changes made on the vue worksapce and automatically regenerates assets

### prod

This doesn't watch files but generates production grade assets. It minifies css/js assets during the process

## Author

Christian Miranda

## License

This project is licensed - see the [LICENSE.md](LICENSE.md) file for details
