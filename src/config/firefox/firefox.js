const data = require('sdk/self').data
const pageMod = require('sdk/page-mod')

pageMod.PageMod({
    include: ['https://bitbucket.org/*', 'https://github.com/*', 'http://git.oschina.net/*', 'https://git.oschina.com/*', 'http://gitee.com/*', 'https://gitee.com/*'],
    contentScriptFile: [data.url('jquery.js'),
        data.url('jquery-ui.js'),
        data.url('jstree.js'),
        data.url('keymaster.js'),
        data.url('ondemand.js'),
        data.url('octotree.js')
    ],
    contentStyleFile: [data.url('jstree.css'),
        data.url('octotree.css')
    ],
    contentScriptWhen: 'start'
})
