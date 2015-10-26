# Cordova disable select

## What is it?
This Meteor package disables user selection and iOS magnifying glass / longpress menu in Cordova applications.

## Installation

Add the package in your Meteor application with this command:

```
meteor add 255kb:cordova-disable-select
```

## Behavior

This package will add the following Cordova plugin to disable iOS longpress menu: 
[https://github.com/EddyVerbruggen/cordova-plugin-ios-longpress-fix](https://github.com/EddyVerbruggen/cordova-plugin-ios-longpress-fix)

It will also add the following CSS to your Cordova application: 

    *:not(input):not(textarea) {
        /* disable user selection */
        -webkit-user-select: none;
        user-select: none;
        
        /* disable longpress on links */
        -webkit-touch-callout: none;
        
        /* disable drag and drop */
        -webkit-user-drag: none;
        
        /* transparent highlight color */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

## Behavior

- v1.0.1: change CSS to LESS