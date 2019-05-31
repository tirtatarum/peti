module.exports = {
  title: 'PeTi',
  description: 'Pembayaran Tagihan PDAM Tirta Tarum Kabupaten Karawang',
  base: process.env.NODE_ENV === 'production' ? '/docs/' : '/',
  themeConfig: {
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
