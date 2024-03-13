import { CounterButton } from 'components/atoms'

import { useSetPageTitle } from 'hooks'

const Home = () => {
  useSetPageTitle({ pageTitle: 'Boilerplate React' })

  return (
    <main className="h-fit p-0 center col g-32">
      <div className="flex-wrap px-8 py-0 jc-center row-full g-32">
        <img
          className="h-[77px] w-[87px] min-w-[87px] sm:h-[155px] sm:w-[174px] sm:min-w-[174px]"
          src="/images/logoVite.svg"
          alt="Logo Vite"
        />
        <img
          className="h-[77px] w-[87px] min-w-[87px] sm:h-[155px] sm:w-[174px] sm:min-w-[174px]"
          src="/images/logoReact.svg"
          alt="Logo React"
        />
      </div>
      <h1 className="text-center text-32 font-500">Vite + React</h1>
      <CounterButton />
    </main>
  )
}

export default Home
