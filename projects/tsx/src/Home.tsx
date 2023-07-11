import './Home.css'
import Nullstack, { NullstackClientContext, NullstackNode } from 'nullstack'

import Logo from 'nullstack/logo'

declare function Link(context: HomeLinkProps): NullstackNode

type HomeProps = {
  greeting: string
}

type HomeLinkProps = {
  href: string
}

class Home extends Nullstack<HomeProps> {
  prepare({ project, page }: NullstackClientContext<HomeProps>) {
    page.title = `${project.name} - Nulla-chan te dá as boas vindas!`
    page.description = `${project.name} foi feito com Nullstack`
  }

  renderLink({
    children,
    href,
  }: NullstackClientContext<HomeProps & HomeLinkProps>) {
    const link = `${href}?ref=create-nullstack-app`
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  render({ project, greeting }: NullstackClientContext<HomeProps>) {
    return (
      <section>
        <article>
          <Link href="https://nullstack.app/pt-br">
            <Logo height={40} light />
          </Link>
          <h1> {project.name} </h1>
          <h1> {greeting} </h1>
          <ul>
            <li>
              <Link href="https://nullstack.app/stateless-components">
                🎉 Create your first component
              </Link>
            </li>
            <li>
              <Link href="https://nullstack.app/routes-and-params">
                ✨ Configure your first route
              </Link>
            </li>
            <li>
              <Link href="https://nullstack.app/context">
                ⚡ Define your context
              </Link>
            </li>
            <li>
              <Link href="https://github.com/nullstack/nullstack/stargazers">
                ⭐ Give a star on GitHub
              </Link>
            </li>
            <li>
              <Link href="https://youtube.com/nullstack">
                🎬 Subscribe to our Youtube channel!
              </Link>
            </li>
          </ul>
        </article>
        <aside>
          <Link href="https://nullstack.app/pt-br/waifu">
            <img
              src="/nulla-chan.webp"
              alt="Nulla-Chan: waifu oficial do Nullstack"
            />
          </Link>
        </aside>
      </section>
    )
  }
}

export default Home
