import './Application.css'
import Nullstack, {
  NullstackClientContext,
  NullstackNode,
} from 'nullstack'

import Home from './Home'

declare function Head(): NullstackNode

class Application extends Nullstack {

  prepare({ page, project }: NullstackClientContext) {
    page.locale = 'en-US'
    page.title = `${project.name} Full Stack Template at StackBlitz`
    page.description = 'Run a Nullstack template with one link ✨🚀'
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

  render() {
    return (
      <>
        <Head />
        <Home />
      </>
    )
  }

}

export default Application
