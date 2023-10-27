import { Link, Head } from '@inertiajs/react';

export default function Home({ auth }) {
    return (
        <>
            <Head title="Home" />

            {/* This would be the overlay */}
            <div class="p-4 flex flex-row justify-evenly items-center border border-solid border-black bg-blue-300">
                <Link href={route('/')} class="m-1 font-bold underline">Majestic Miles</Link>

                <div class="flex flex-col border border-solid border-black">
                    <div class="flex flex-row">
                        <a href="mailto:info.majesticmiles@gmail.com" class='m-1 hover:bg-green-300'>info.majesticmiles@gmail.com</a>
                    </div>
                    <div class="flex flex-row">
                        <>
                            <Link href={route('services')} class='m-1 hover:bg-green-300'>Services</Link>

                            <Link href={route('about')} class='m-1 hover:bg-green-300'>About</Link>

                            <Link href={route('contact')} class='m-1 hover:bg-green-300'>Contact</Link>
                        </>
                    </div>
                </div>

                {/* <div>
                    TODO - APPLY THIS LATER
                    {auth.user ? (
                            <Link href={route('dashboard')} className='p-2 m-1 absolute bottom-0 right-0 border-solid border border-black hover:bg-green-300'>
                                Dashboard
                            </Link>
                    ) : (
                        <>  
                            <Link href={route('register')} className='p-2 m-1 border-solid border border-black hover:bg-green-300'>
                                Create
                            </Link>

                            <Link href={route('login')} className='p-2 m-1 border-solid border border-black hover:bg-green-300'>
                                Login
                            </Link>
                        </>
                    )}
                </div> */}
                
            </div>
        </>
    )
}