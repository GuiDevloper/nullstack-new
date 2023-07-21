import Nullstack, {
  NullstackClientContext,
  NullstackNode,
} from 'nullstack'

import getRedirects from './redirects'

declare function NotFound(): NullstackNode
declare function Redirecting(): NullstackNode

class Home extends Nullstack {

  currentRedirects: Record<string, string> = {}
  fullLoaded = false

  getCurrentPlatform(context?: NullstackClientContext) {
    return Object.hasOwn(context.params, 'vercel')
      ? 'vercel'
      : 'stackblitz'
  }

  async hydrate({ router }: NullstackClientContext) {
    this.currentRedirects = await getRedirects(this.getCurrentPlatform())
    this.fullLoaded = true
    if (this.currentRedirects[router.url]) {
      router.url = this.currentRedirects[router.url]
    }
  }

  renderNotFound() {
    const RoutesList = () => {
      return Object.keys(this.currentRedirects).map(projectRoute => {
        if (projectRoute === '/' || projectRoute === '/?vercel') {
          return false
        }
        return (
          <li>
            <a href={this.currentRedirects[projectRoute]}>
              {projectRoute.substring(1)}
            </a>
          </li>
        )
      })
    }

    return (
      <>
        <h1> 404: No project found with that name! </h1>
        <h2> Try one of those: </h2>
        <ul>
          <RoutesList />
        </ul>
      </>
    )
  }

  renderRedirecting() {
    const platform = this.getCurrentPlatform()
    return <h1 class="italic"> Redirecting to {platform}... </h1>
  }

  render({ router }: NullstackClientContext) {
    const FoundOrNot = () =>
      !this.currentRedirects[router.url] ? <NotFound /> : <Redirecting />

    return (
      <>
        {!this.fullLoaded ? (
          <h1 class="italic"> Loading... </h1>
        ) : (
          <FoundOrNot />
        )}
      </>
    )
  }

}

export default Home
