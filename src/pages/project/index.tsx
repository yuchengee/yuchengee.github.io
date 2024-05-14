import { translate } from '@docusaurus/Translate'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { groupByProjects, projects, projectTypeMap } from '@site/data/projects'
import clsx from 'clsx'
import ShowcaseCard from './_components/ShowcaseCard'

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'

import MyLayout from '@site/src/theme/MyLayout'
import { upperFirst } from '@site/src/utils/jsUtils'
import styles from './styles.module.css'

const TITLE = translate({
  id: 'theme.project.title',
  message: '项目',
})
const DESCRIPTION = translate({
  id: 'theme.project.description',
  message: '实践是检验真理的唯一标准， talk is cheap, show me code!',
})

// const GITHUB_URL = 'https://github.com/kuizuo'

type ProjectState = {
  scrollTopPosition: number
  focusedElementId: string | undefined
}

export function prepareUserState(): ProjectState | undefined {
  if (ExecutionEnvironment.canUseDOM) {
    return {
      scrollTopPosition: window.scrollY,
      focusedElementId: document.activeElement?.id,
    }
  }

  return undefined
}

function ShowcaseHeader() {
  return (
    <section className="text--center">
      <h2>{TITLE}</h2>
      <p>{DESCRIPTION}</p>
      {/* <a
        className="button button--primary"
        href={GITHUB_URL}
        target="_blank"
        rel="noreferrer"
      >
        <Translate id="showcase.header.button">前往 Github 克隆项目</Translate>
      </a> */}
    </section>
  )
}

function ShowcaseCards() {
  const { i18n } = useDocusaurusContext()
  const lang = i18n.currentLocale

  if (projects.length === 0) {
    return (
      <section className="margin-top--lg margin-bottom--xl">
        <div className="container padding-vert--md text--center">
          <h2>No result</h2>
        </div>
      </section>
    )
  }

  return (
    <section className="margin-top--lg margin-bottom--xl">
      <>
        <div className="container margin-top--lg">
          <div className={clsx('margin-bottom--md', styles.showcaseFavoriteHeader)}></div>

          {Object.entries(groupByProjects).map(([key, value]) => {
            return (
              <div key={key}>
                <div className={clsx('margin-bottom--md', styles.showcaseFavoriteHeader)}>
                  <h3>{upperFirst(lang === 'en' ? key : projectTypeMap[key])}</h3>
                </div>
                <ul className={styles.showcaseList}>
                  {value.map(project => (
                    <ShowcaseCard key={project.title} project={project} />
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </>
    </section>
  )
}

function Showcase(): JSX.Element {
  return (
    <MyLayout title={TITLE} description={DESCRIPTION} maxWidth={1280}>
      <main className="margin-vert--lg">
        <ShowcaseHeader />
        <ShowcaseCards />
      </main>
    </MyLayout>
  )
}

export default Showcase
