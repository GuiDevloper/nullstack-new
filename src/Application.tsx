import Nullstack, { NullstackClientContext } from 'nullstack'

import './Application.css'

class Application extends Nullstack {

  prepare({ page }: NullstackClientContext) {
    page.locale = 'en-US'
  }

  render: () => false

}

export default Application
