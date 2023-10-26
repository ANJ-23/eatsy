import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router'



import Link from 'next/link'

export default function Page() {
    return (
        <>
            {/*
                This example requires updating your template:

                ```
                <html class="h-full bg-white">
                <body class="h-full">
                ```
            */}
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* logo */}
                    {/* <img
                        className="mx-auto h-10 w-auto invert"
                        src="chef_hat_1.png"
                        alt="Easty Logo"
                    /> */}
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-100">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        {/* Email / Username */}
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-blue-100">
                                Username
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    type="username"
                                    autoComplete="username"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-blue-100">
                                    Password
                                </label>
                                <div className="text-sm">
                                    {/* <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a> */}
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            {/* <div className="block text-sm font-medium leading-6">
                                <h1>DO NOT ENTER PERSONAL INFORMATION & REUSED PASSDWORDS</h1>
                            </div> */}
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md 
                                bg-blue-600 hover:bg-blue-800
                                px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm 
                                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                                focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}