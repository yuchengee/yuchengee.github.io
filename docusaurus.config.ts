import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import { themes } from 'prism-react-renderer'
import { GiscusConfig } from './src/components/Comment'

// const announcementBarContent = `🌟<span>如果你对 Web 开发感兴趣，不妨到 <a href='https://github.com/yuchengee'>我的Github</a> 看看</span>`
// const announcementBarContent = `🌟<span>欢迎访问小站</span>`

const beian = 'XX备XXXXXX号-2'
const beian1 = 'XX网安备XXXXXXXXXX号'

const config: Config = {
  title: '渔歌-yuchengee-成长为更强大的自己',
  url: 'https://yuchengee.github.io/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'yuchengee',
  projectName: 'blog',
  customFields: {
    bio: '知识分享，记录，成长',
    description:
      '个人博客，主要分享编程开发知识和项目，该网站基于 React 驱动的静态网站生成器 Docusaurus 构建。',
  },
  themeConfig: {
    // announcementBar: {
    //   id: 'announcementBar-3',
    //   content: announcementBarContent,
    // },
    metadata: [
      {
        name: 'keywords',
        content: 'yuchengee',
      },
      {
        name: 'keywords',
        content: 'java,linux,spring,springboot,springcloud,spark,mysql,k8s,docker,webgis',
      },
      {
        name: 'keywords',
        content: '这是用 Docusaurus 搭建的java/linux/spring/springboot/springcloud/spark/mysql/k8s/docker/webgis 博客！',
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: '',
      logo: {
        alt: 'yuchengee',
        src: 'img/logo.png',
        srcDark: 'img/logo.png',
      },
      hideOnScroll: true,
      items: [
        {
          label: '👨‍💻 博客',
          position: 'right',
          to:'blog',
          items: [
            {
              label: '标签',
              to: 'blog/tags',
            },
            {
              label: '归档',
              to: 'blog/archive',
            },
          ],
        },
        {to: 'docs/skill/', label: '👨🏻‍🌾 笔记', position: 'right'},
        {to: 'docs/interview/', label: '👨‍🎓 面试', position: 'right'},
        {to: 'docs/tools/', label: '🛠 工具', position: 'right'},
        {
          label: '📡 其他', position: 'right',
          items: [
            {
              label: '项目',
              to: 'project',
            },
            {
              label: '资源',
              to: 'resources',
            },
            {
              label: 'GPT',
              to: 'gpt',
            },
          ],
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '学习',
          items: [
            { label: '博客', to: 'blog' },
            { label: '归档', to: 'blog/archive' },
            { label: '技术笔记', to: 'docs/skill' },
          ],
        },
        {
          title: '社交媒体',
          items: [
            { label: '关于我', to: '/about' },
            { label: 'GitHub', href: /*social.github.href */ "https://github.com"},
            { label: '掘金', href: /*social.juejin.href*/'https://juejin.cn' },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: 'H5小游戏',
              href: 'https://yuchee.gitee.io/xiaoyouxi',
            },
            {
              label: '俄罗斯方块',
              href: 'https://yuchee.gitee.io/alittle/tetris',
            },
            {
              html: `
                <a href="https://docusaurus.io/zh-CN/" target="_blank" rel="noreferrer noopener">
                  <img src="/img/buildwith.png" alt="build with docusaurus" width="120" height="50"/>
                <a/>
                `,
            },
          ],
        },
      ],
      copyright: `
        <p style="margin-bottom: 0;"><a href="http://beian.miit.gov.cn/">${beian}</a></p>
        <p style="display: inline-flex; align-items: center;"><img style="height:20px;margin-right: 0.5rem;" src="/img/police.png" alt="police" height="20"/><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${beian1.match(
          /\d+/,
        )?.[0]}" >${beian1}</a></p>
        <p>Copyright © 2022 - PRESENT 渔歌 Built with Docusaurus.</p>
        `,
    },
    // algolia: {
    //   appId: 'GV6YN1ODMO',
    //   apiKey: '50303937b0e4630bec4a20a14e3b7872',
    //   indexName: 'kuizuo',
    // },
    prism: {
      theme: themes.oneLight,
      darkTheme: themes.oneDark,
      additionalLanguages: [
        'bash',
        'json',
        'java',
        'python',
        'php',
        'graphql',
        'rust',
        'toml',
        'protobuf',
      ],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    giscus: {
      repo: 'yuchengee/Glass-UI',
      repoId: 'R_kgDOImG1bw',
      category: 'General',
      categoryId: 'DIC_kwDOImG1b84CTIuo',
      mapping: 'title',
      lang: 'zh-CN',
    }satisfies Partial<GiscusConfig>,
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    liveCodeBlock: { playgroundPosition: 'top' },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
    },
  } satisfies Preset.ThemeConfig,
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: ['./src/css/custom.scss'],
        },
        sitemap: {
          priority: 0.5,
        },
        gtag: {
          trackingID: '1',
          anonymizeIP: true,
        },
        debug: process.env.NODE_ENV === 'development',
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    'docusaurus-plugin-image-zoom',
    'docusaurus-plugin-sass',
    '@docusaurus/plugin-ideal-image',
    ['docusaurus-plugin-baidu-tongji', { token: '6dfb38b0fcc241bcb4c7486723b10185' }],
    // [
    //   '@docusaurus/plugin-pwa',
    //   {
    //     debug: process.env.NODE_ENV === 'development',
    //     offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
    //     pwaHead: [
    //       { tagName: 'link', rel: 'icon', href: '/img/logo.png' },
    //       { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
    //       { tagName: 'meta', name: 'theme-color', content: '#12affa' },
    //     ],
    //   },
    // ],
    [
      './src/plugin/plugin-content-blog', // 为了实现全局 blog 数据，必须改写 plugin-content-blog 插件
      {
        path: 'blog',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/yuchengee/blog/edit/master/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogDescription: '代码人生：编织技术与生活的博客之旅',
        blogSidebarCount: 10,
        blogSidebarTitle: 'Blogs',
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: '渔歌',
          copyright: `Copyright © ${new Date().getFullYear()} yuchengee Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
        },
      },
    ],
  ],
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: '渔歌的个人博客',
      },
    },
  ],
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Normal.min.css',
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Semibold.min.css',
  ],
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },
}

export default config
