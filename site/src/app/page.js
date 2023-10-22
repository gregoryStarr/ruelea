import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
       <div>
        <menu>
          Coming soon...
        </menu>
       </div>
        <div className="fixed bottom-0 left-0 flex items-end justify-center w-full h-48 bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="flex gap-2 p-8 pointer-events-none place-items-center lg:pointer-events-auto lg:p-0"
            href="https://www.astralis.one"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/images/astralisLogo.png"
              alt="Astralis Logo"
              className=""
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h2 className='text-4xl '>Ruelea is under construction at the moment</h2>
        <p className='text-lg'>But keep checking in as we will be  back online soon!</p>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] border-spacing-7 m-7"
          src="/images/construction.webp"
          alt="construction"
          width={300}
          height={124}
          priority
        />
      </div>

      <footer className='flex items-center'>
        ©Ruelea.com Copyright 2023, all rights reserved.
      </footer>
    </main>
  )
}
