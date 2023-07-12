import Nullstack, {
  NullstackClientContext,
  NullstackNode,
} from 'nullstack'

import './Application.css'
import redirects from './redirects'

declare function NotFound(): NullstackNode
declare function Redirecting(): NullstackNode
declare function Head(): NullstackNode

class Application extends Nullstack {

  prepare({ page, project }: NullstackClientContext) {
    page.locale = 'en-US'
    page.title = `${project.name} Full Stack Template at StackBlitz`
    page.description = 'Run a Nullstack template with one link ✨🚀'
  }

  async hydrate({ router }: NullstackClientContext) {
    if (redirects[router.path]) {
      router.url = redirects[router.path]
    }
  }

  renderHead() {
    return (
      <head>
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <link
          href="https://fonts.googleapis.com"
          rel="preconnect"
        />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossorigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Crete+Round&display=swap"
          rel="stylesheet"
        />
      </head>
    )
  }

  renderNotFound() {
    return (
      <>
        <h1> 404: No project found with that name! </h1>
        <h2> Try one of those: </h2>
        <ul>
          {Object.keys(redirects).map(projectRoute => {
            if (projectRoute === '/') return false
            return (
              <li>
                <a href={projectRoute}>
                  {projectRoute.substring(1).toUpperCase()}
                </a>
              </li>
            )
          })}
        </ul>
      </>
    )
  }

  renderRedirecting() {
    return <h1 class="italic"> Redirecting to StackBlitz... </h1>
  }

  render({ router }: NullstackClientContext) {
    return (
      <>
        <Head />
        {!redirects[router.path] ? <NotFound /> : <Redirecting />}
      </>
    )
  }

}

export default Application
