module.exports = {
    base: process.env.NODE_ENV === 'production' ? '/sili-guide/' : '/',
    title: 'Sili Guide',
    description: 'Documentation for Sili Multi-Purpose Single Page Template',
    head: [
        ['link', { rel: 'icon', href: `img/icon.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3273dc' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `img/Icon-76@2x.png` }],
        ['meta', { name: 'msapplication-TileImage', content: 'img/xxhdpi.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#3273dc' }],
    ],
    dest: 'docs',
    serviceWorker: true,
    themeConfig: {
        repo: 'tecdiary/sili-guide',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Help us improve this page!',
        displayAllHeaders: true,
        lastUpdated: 'Last Updated',
        nav: [{ text: 'Home', link: '/' }, { text: 'Buy Now', link: 'https://tecdiary.net/products/sili-single-page-template' }],
        sidebar: false,
        serviceWorker: {
            updatePopup: true,
            updatePopup: {
                message: 'A new version is available for documentation.',
                buttonText: 'Refresh',
            },
        },
    },
};
