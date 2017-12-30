Package.describe({
    name: '255kb:cordova-disable-select',
    version: '1.0.2',
    summary: 'Disables user selection and iOS magnifying glass / longpress menu in Cordova applications.',
    git: 'https://github.com/255kb/cordova-disable-select',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2');

    Cordova.depends({
        'cordova-plugin-ios-longpress-fix': '1.1.0'
    });

    api.addFiles(['client/cordova-disable-select.css'], 'web.cordova');
});
