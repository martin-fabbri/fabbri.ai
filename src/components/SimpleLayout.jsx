import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-12 sm:mt-12">
      <header className="max-w-3xl">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
          {title}
        </h1>
        <p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  )
}
