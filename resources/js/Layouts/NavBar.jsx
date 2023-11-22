import { Link } from '@inertiajs/react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

export default function NavBar({ auth }) {
    return (
        <>
            <div class="sticky top-0 p-4 flex flex-row justify-evenly items-center bg-blue-400 text-white">
                <Link href={route('/')} class="m-1 font-bold underline text-[2rem]">
                    Majestic Miles
                </Link>

                <div class="flex flex-col font-bold text-[1rem]">
                    <div class="flex flex-row">
                        <AiOutlineMail class="ml-4" />
                        <span>
                            <a
                                href="mailto:info.majesticmiles@gmail.com"
                                class="mx-2 hover:bg-green-300"
                            >
                                info.majesticmiles@gmail.com
                            </a>
                        </span>
                        <BsFillTelephoneFill class="ml-4" />
                        <span class="mx-2 hover:bg-green-300">90123908981</span>
                    </div>
                    <div class="flex flex-row justify-evenly font-bold text-[1.50rem]">
                        <>
                            <Link href={route('services')} class="mx-1 hover:bg-green-300">
                                Services
                            </Link>

                            <Link href={route('about')} class="mx-1 hover:bg-green-300">
                                About
                            </Link>

                            <Link href={route('contact')} class="mx-1 hover:bg-green-300">
                                Contact
                            </Link>
                        </>
                    </div>
                </div>

                {/* <div>
                    TODO - APPLY THIS LATER
                    {auth.user ? (
                            <Link href={route('dashboard')} className='p-2 mx-1 absolute bottom-0 right-0 border-solid border border-black hover:bg-green-300'>
                                Dashboard
                            </Link>
                    ) : (
                        <>  
                            <Link href={route('register')} className='p-2 mx-1 border-solid border border-black hover:bg-green-300'>
                                Create
                            </Link>

                            <Link href={route('login')} className='p-2 mx-1 border-solid border border-black hover:bg-green-300'>
                                Login
                            </Link>
                        </>
                    )}
                </div> */}
            </div>
        </>
    );
}
