module.exports = {
  title: 'PeTi',
  description: 'Pembayaran Tagihan PDAM Tirta Tarum Kabupaten Karawang',
  head: [
    ['link', { rel: 'icon', href: '/peti.svg' }]
  ],
  themeConfig: {
    lastUpdated: true,
    repo: 'tirtatarum/peti',
    docsDir: 'docs',
    editLinks: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      // { text: 'Schema', link: '/schema/' },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'authorization',
            'inquiry',
            'payment',
            'reversal',
            'status',
            'webhook',
            'reconsiliation',
            'error',
          ]
        }
      ]
    }
  }
}
