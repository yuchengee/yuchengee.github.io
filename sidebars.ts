import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  skill: [
    'skill/introduction',
    'skill/doc-start',
    {
      label: 'nginx',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        { // 按目录排序
          type: 'autogenerated',
          dirName: 'skill/nginx',
        },
      ]
    },
    {  // 多级目录
      label: '数据库',
      type: 'category',
      link: {
        // title: '',
        // description: '',
        type: 'generated-index',
        keywords: ['database', 'mysql', 'mongodb', 'redis', 'elasticsearch'],
      },
      items: [
        {
          label: 'Mysql',
          type: 'category',
          link: {
            type: 'doc',
            id: 'skill/database/mysql/mysql-note',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/database/mysql',
            },
          ],
        },
        {
          label: 'MongoDB',
          type: 'category',
          link: {
            type: 'doc',
            id: 'skill/database/mongo/mongodb-note',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/database/mongo',
            },
          ],
        },
        {
          label: 'Redis',
          type: 'category',
          link: {
            type: 'doc',
            id: 'skill/database/redis/redis-note',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/database/redis',
            },
          ],
        },
        {
          label: 'Elasticsearch',
          type: 'category',
          link: {
            type: 'doc',
            id: 'skill/database/elasticsearch/elasticsearch-note',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/database/elasticsearch',
            },
          ],
        },
      ],
    },

  ],
  interview: [
    'interview/introduction', // 第一个页面，可以写简介内容
    {
      label: 'Java开发',
      type: 'category',
      link: {
        type: 'doc', // 意思是 点目录的时候也可以像文档一样 显示md说明
        id: 'interview/javadev-readme'
      },
      items: [
        {
          label: 'JVM',
          type: 'category',
          link: {
            type: 'doc',
            id: 'interview/javadev-readme',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'interview/jvm',
            },
          ],
        },
        {
          type: 'autogenerated',   // 自动生成左边的目录索引
          dirName: 'interview/java-dev',
        },
      ],
    },
    {
      label: '数据库开发',
      type: 'category',
      link: {
        type: 'doc',
        id: 'interview/database-readme'
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'interview/database',
        },
      ],
    },
    {
      label: '中间件',
      type: 'category',
      link: {
        type: 'doc',
        id: 'interview/middleware-readme'
      },
      items: [
        {
          label: 'redis',
          type: 'category',
          link: {
            type: 'doc',
            id: 'interview/middleware-readme',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'interview/middleware/redis',
            },
          ],
        },
        {
          label: 'kafka',
          type: 'category',
          link: {
            type: 'doc',
            id: 'interview/middleware-readme',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'interview/middleware/kafka',
            },
          ],
        },
        
      ],
    },
  ],
  tools: [
    'tools/introduction',
    'tools/everything-quick-search-local-files',
    'tools/wappalyzer-recognize-technology',
    'tools/windows-custom-right-click-menu',
    'tools/vscode-config',
    'tools/idea-config',
    'tools/vite-plugin',
    'tools/jetbrains-product-activation-method',
  ],
}

module.exports = sidebars
