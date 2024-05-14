export const projects: Project[] = [
  {
    title: '渔歌-yuchengee',
    description: '🦖 基于 Docusaurus 静态网站生成器实现个人博客， 原作者kuizuo',
    preview: '/img/project/blog.png',
    website: 'https://yuchee.gitee.io',
    source: 'https://github.com/kuizuo/blog',
    tags: ['opensource', 'design', 'favorite', 'personal'],
    type: 'web',
  },
  {
    title: '设备管理系统',
    description: '基于 Jeecg 二次开发的设备管理系统',
    preview: '/img/project/shebeiguanli.png',
    website: 'http://www.jeecg.com',
    // source: '非开源项目',
    tags: ['design', 'product'],
    type: 'web',
  },
  // toy
  {
    title: '俄罗斯方块',
    description: '🌟 真实还原游戏机俄罗斯方块。',
    preview: '/img/project/elsfk.png',
    website: 'https://yuchee.gitee.io/alittle/12.tetris',
    source: 'https://github.com/chvin/react-tetris',
    tags: ['opensource', 'favorite'],
    type: 'toy',
  },
  {
    title: 'H5小游戏合集',
    description: '🌟 H5小游戏合集, 益智、休闲、射击、消除等',
    preview: '/img/project/h5xiaoyouxi.png',
    website: 'https://yuchee.gitee.io/xiaoyouxi',
    source: 'https://gitee.com/yuchee/xiaoyouxi',
    tags: ['opensource', 'favorite'],
    type: 'toy',
  },
  {
    title: '网页扫雷',
    description: '🌟 网页扫雷小游戏',
    preview: '/img/project/wangyesaolei.png',
    website: 'https://yuchee.gitee.io/alittle/1.websl',
    source: 'https://gitee.com/yuchee/Alittle/tree/master/1.websl',
    tags: ['opensource', 'favorite'],
    type: 'toy',
  },
  // personal
  // {
  //   title: 'vscode-extension',
  //   description: 'vscode 插件的样品',
  //   preview: '/img/project/vscode-extension.png',
  //   website: 'https://marketplace.visualstudio.com/items?itemName=kuizuo.vscode-extension-sample',
  //   source: 'https://github.com/kuizuo/vscode-extension',
  //   tags: ['opensource'],
  //   type: 'personal',
  // },
  // other
  {
    title: '屏幕检测工具',
    description: '基于 JS 实现的屏幕检测工具',
    preview: '/img/project/pinmujiance.png',
    website: 'https://yuchee.gitee.io/alittle/13.pingmujiance',
    source: 'https://gitee.com/yuchee/Alittle/tree/master/13.pingmujiance',
    tags: ['opensource'],
    type: 'other',
  },
]

export type Tag = {
  label: string
  description: string
  color: string
}

export type TagType = 'favorite' | 'opensource' | 'product' | 'design' | 'large' | 'personal'

export type ProjectType = 'web' | 'app' | 'commerce' | 'personal' | 'toy' | 'other'

export const projectTypeMap = {
  web: '网站',
  app: '应用',
  commerce: '商业项目',
  personal: '个人',
  toy: '玩具',
  other: '其他',
}

export type Project = {
  title: string
  description: string
  preview?: string
  website: string
  source?: string | null
  tags: TagType[]
  type: ProjectType
}

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: '喜爱',
    description: '我最喜欢的网站，一定要去看看!',
    color: '#e9669e',
  },
  opensource: {
    label: '开源',
    description: '开源项目可以提供灵感!',
    color: '#39ca30',
  },
  product: {
    label: '产品',
    description: '与产品相关的项目!',
    color: '#dfd545',
  },
  design: {
    label: '设计',
    description: '设计漂亮的网站!',
    color: '#a44fb7',
  },
  large: {
    label: '大型',
    description: '大型项目，原多于平均数的页面',
    color: '#8c2f00',
  },
  personal: {
    label: '个人',
    description: '个人项目',
    color: '#12affa',
  },
}

export const TagList = Object.keys(Tags) as TagType[]

export const groupByProjects = projects.reduce(
  (group, project) => {
    const { type } = project
    group[type] = group[type] ?? []
    group[type].push(project)
    return group
  },
  {} as Record<ProjectType, Project[]>,
)
