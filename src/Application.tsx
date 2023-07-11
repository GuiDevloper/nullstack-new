import Nullstack, { NullstackClientContext, NullstackNode } from 'nullstack'

import './Application.css'
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
      </head>
    )
  }

  render() {
    return <Head />
  }

}

export default Application
