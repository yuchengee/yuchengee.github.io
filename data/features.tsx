import Translate, { translate } from '@docusaurus/Translate'
import OpenSourceSvg from '@site/static/svg/undraw_open_source.svg'
import SpiderSvg from '@site/static/svg/undraw_spider.svg'
import WebDeveloperSvg from '@site/static/svg/undraw_web_developer.svg'

export type FeatureItem = {
  title: string
  text: JSX.Element
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
}

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.feature.developer',
      message: 'Java 工程师',
    }),
    text: (
      <Translate>
        作为一名 Java 工程师, Java系列技术都会。
        Linux、JVM、Spring全家桶、分布式、MySql、Redis、Kafka、Docker ，开发效率高。
      </Translate>
    ),
    Svg: WebDeveloperSvg,
  },
  {
    title: translate({
      id: 'homepage.feature.spider',
      message: '会点前端',
    }),
    text: (
      <Translate>
        作为一名Java后端的开发者 ，对前端也有很大兴趣， 学习了TypeScript、Vue、Uniapp等前端开发语言。没有看不懂的代码 ，只有不想看的代码。
      </Translate>
    ),
    Svg: SpiderSvg,
  },
  {
    title: translate({
      id: 'homepage.feature.enthusiast',
      message: '开源爱好者',
    }),
    text: (
      <Translate>
        作为一名开源爱好者，积极探索开源社区，混迹于各大开发论坛。学习优秀开源项目。
      </Translate>
    ),
    Svg: OpenSourceSvg,
  },
]

export default FEATURES
