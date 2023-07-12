import './Home.css'
import Nullstack from 'nullstack'

import Logo from 'nullstack/logo'

class Home extends Nullstack {
  prepare({ project, page }) {
    page.title = `${project.name} - Nulla-chan welcomes you!`
    page.description = `${project.name} was made with Nullstack`
  }

  renderLink({ children, href }) {
    const link = `${href}?ref=create-nullstack-app`
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  render({ project, greeting }) {
    return (
      <section>
        <article>
          <Link href="https://nullstack.app">
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
          <Link href="https://nullstack.app/waifu">
            <img
              src="/nulla-chan.webp"
              alt="Nulla-Chan: official Nullstack waifu"
            />
          </Link>
        </aside>
      </section>
    )
  }
}

export default Home
