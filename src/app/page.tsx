import Image from 'next/image'
import Head from 'next/head';
import Link from 'next/link';

import SearchBar from '@/app/components/search_bar';
import Navbar from '@/app/components/navbar';

import clientPromise from './lib/mongodb'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

type ConnectionStatus = {
  isConnected: boolean
}

// HOME PAGE - includes nav bar (Home page link, Favorites (signed-in), Sign Out (signed-in), Sign In), title, recipe search bar
export default function Home() {

  const callAPI = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/1`
      );
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {/* <div>
        <main>
          <button onClick={callAPI}>Make API call</button>
        </main>
      </div> */}


      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* <nav className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

          {[
            ['Favorites', '/favorites'],
            ['Sign-in', '/signin'],
          ].map(([title, url]) => (
            <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
          ))}
        </nav> */}


        <div className="flex flex-col items-center">
          {/* Next.js SVG */}
          {/* <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          /> */}
          <Image
            className="mx-auto h-10 w-auto invert mb-6 w-1/6 h-1/6 max-h-24"
            height={100}
            width={100}
            src="/chef_hat_1.png"
            alt="Easty Logo"
          />
          <h1 className={`mb-3 text-5xl font-semibold`}>Eatsy. It&apos;s easy!</h1>

          <h2 className={`m-0 text-lg max-w-[30ch] text-sm opacity-80`}>Search for recipes in the bar up above!</h2>
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Docs (D&apos;OH!) {' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Learn{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Templates{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Explore the Next.js 13 playground.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Deploy{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>

        <footer>
          <a href="https://www.flaticon.com/free-icons/chef-hat" title="chef hat icons">Chef hat favicon created by Cuputo - Flaticon</a>
        </footer>
        
      </main>
    </>
  )
}
