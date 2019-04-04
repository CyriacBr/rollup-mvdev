# Introduction

A boilerplate made with rollup and based on TypeScript for a better development environment
with RPG Maker MV.  
The boilerplate already contains an example of a plugin: a greeting window drawn on the map.

# Usage
Download the project and run `npm install` or `yarn install`.  
A tutorial will be wrote about it on the official forum.

# What's included
## 3 types of build
* Normal: The sources are transpiled by TypeScript so that any version of RPG Maker can execute your plugin. This allows you to use latest JavaScript/TypeScript standards.  

* Minified: The sources are transpiled and uglifyed.

## Build status notification

A OS-based notification lets you know the status of the build processes anytime they happen.

## Auto copy to MV project

When the file are built, they are automatically copied to your PRG Maker MV project. (depending on the path you configured)

## Auto-generate plugin parameters

A script parses the `params.config.js` contained in your sources and generates the proper plugin parameters as comments.

## Auto-generate header

The header of the plugin is automatically generated based on the plugin parameters and the `plugin.config.js` file describing various information about the plugin (title, version, author, ect).

# Scripts

* `npm run dev`: Development mode. The sources are watched and built any time they change.
* `npm run build`: Manually build the sources files.

