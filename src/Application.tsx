import Nullstack, { NullstackClientContext, NullstackNode } from 'nullstack'

import './Application.css'
import redirects from './redirects'

declare function NotFound(): NullstackNode
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
      </head>
    )
  }

  renderNotFound() {
    return <h1> No project found with that name! </h1>
  }

  render({ router }: NullstackClientContext) {
    return (
      <>
        <Head />
        {!redirects[router.path] && <NotFound />}
      </>
    )
  }

}

export default Application
