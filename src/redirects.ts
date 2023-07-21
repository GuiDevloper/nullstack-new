export type Platform = 'vercel' | 'stackblitz'

const stackFullPath =
  'https://stackblitz.com/fork/github/GuiDevloper/nullstack-new/tree/main/projects/'

const exampleStackFullPath =
  'https://stackblitz.com/fork/github/GuiDevloper/nullstack-examples/tree/main/examples/'

function getVercelFullPath(name: string) {
  return `https://vercel.com/new/clone?repository-url=https://github.com/GuiDevloper/nullstack-new/tree/main/projects/${name}&project-name=${name}&repo-name=${name}&demo-title=Nullstack+${name}&demo-description=Nullstack+example+${name}&demo-url=https://github.com/GuiDevloper/nullstack-new/tree/main/projects/${name}&demo-image=https://nullstack.app/image-1200x630.png`
}

function getExampleVercelFullPath(name: string) {
  return `https://vercel.com/new/clone?repository-url=https://github.com/GuiDevloper/nullstack-examples/tree/main/examples/${name}&project-name=${name}&repo-name=${name}&demo-title=Nullstack+${name}&demo-description=Nullstack+example+${name}&demo-url=https://github.com/GuiDevloper/nullstack-examples/tree/main/examples/${name}&demo-image=https://nullstack.app/image-1200x630.png`
}

function getStackExamples(examples: string[]) {
  return examples.reduce((prev, example) => {
    const title = `?title=Nullstack+${example}`
    return {
      ...prev,
      [`/${example}`]: `${exampleStackFullPath}${example}${title}`,
    }
  }, {})
}

function getVercelExamples(examples: string[]) {
  return examples.reduce((prev, example) => {
    return {
      ...prev,
      [`/${example}?vercel`]: getExampleVercelFullPath(example),
    }
  }, {})
}

export async function getExamples(
  platform: Platform,
): Promise<Record<string, string>> {
  const examplesURL =
    'https://raw.githubusercontent.com/GuiDevloper/nullstack-examples/main/scripts/names.json'
  const examples: string[] = await (await fetch(examplesURL)).json()
  return platform === 'stackblitz'
    ? getStackExamples(examples)
    : getVercelExamples(examples)
}

export default async function getRedirects(
  platform: Platform,
): Promise<Record<string, string>> {
  const originalRedirects =
    platform === 'stackblitz'
      ? {
          '/': `${stackFullPath}tsx?title=Nullstack New TSX`,
          '/tsx': `${stackFullPath}tsx?title=Nullstack New TSX`,
          '/jsx': `${stackFullPath}jsx?title=Nullstack New JSX`,
        }
      : {
          '/?vercel': getVercelFullPath('tsx'),
          '/tsx?vercel': getVercelFullPath('tsx'),
          '/jsx?vercel': getVercelFullPath('jsx'),
        }

  return {
    ...originalRedirects,
    ...(await getExamples(platform)),
  }
}
