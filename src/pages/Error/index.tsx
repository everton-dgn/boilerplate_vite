import { useSetPageTitle } from 'hooks'

const Error = () => {
  useSetPageTitle({ pageTitle: 'Error Page' })

  return (
    <div className="min-h-screen p-16 center col-full">
      <header className="fw-600 mb-32 fs-20" role="banner">
        Error!
      </header>
      <main className="ai-center col-full g-20">
        <h1 className="fw-500 text-center fs-32">Page not found!</h1>
      </main>
    </div>
  )
}

export default Error
