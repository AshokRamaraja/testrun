module.exports = {
  title: 'Welcome to Bribe By Bytes',
  tagline: 'Learn Tech One Byte at a Time',
  url: 'https://bribebybytes.github.io',  
  baseUrl: '/landing-page/',
  onBrokenLinks: 'throw',
  favicon: 'img/banner.jpg',
  organizationName: 'bribebybytes', // Usually your GitHub org/user name.
  projectName: 'landing-page', // Usually your repo name.  
  customFields: {
    videoTile : 'Checkout My videos..',
    yTubeVideos: [
      {
        url : 'https://www.youtube.com/embed/1Xt-0_wsFnM'
      },
      {
        url : 'https://www.youtube.com/embed/AWPdvVRoMkY?list=PL-dDmq4YllM9cnv0Xp1nFC2ITAhQMwHpg'
      },
      {
        url : 'https://www.youtube.com/embed/1Xt-0_wsFnM?list=PL-dDmq4YllM9w7i2Mn8vGXisCul1OTltu'
      },
      {
        url : 'https://www.youtube.com/embed/c7ytxiddImw?list=PL-dDmq4YllM9w7i2Mn8vGXisCul1OTltu'
      }
    ],
  },
  themeConfig: {
    bannerImg : 'img/banner.jpg',  
    navbar: {
      title: 'Bribe By Bytes',
      logo: {
        alt: 'Bribe By Bytes Logo',
        src: 'img/logo_transparent.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },    
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bribe By Bytes, Inc. Built with Docusaurus.`,
    },
  },
    
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
