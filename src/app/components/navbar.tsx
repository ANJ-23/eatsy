// imports Search Bar for use in the Nav Bar
import SearchBar from "./search_bar"
import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

                {/* 3 components: logo, search bar, and profile thingy */}
                <div className="relative flex h-16 items-center justify-between">

                    <div className="flex w-1/6 items-center justify-start sm:items-stretch sm:justify-start">
                        <Link href="/" className="text-3xl" >Eatsy</Link>
                    </div>

                    <div className="flex w-4/6 justify-center">
                        <SearchBar />
                    </div>

                    <div className="flex w-1/6 justify-end">
                        <Link href="/sign-in" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Sign In</Link>
                    </div>

                    {/* <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
                                <Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
                                <Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
                                <Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        </nav>
    )
}