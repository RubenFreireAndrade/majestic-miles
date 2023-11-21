import { Link } from '@inertiajs/react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

export default function NavBar({ auth }) {
    return (
        <>
            <div class="sticky top-0 p-4 flex flex-row justify-evenly items-center bg-blue-400">
                <Link href={route('/')} class="m-1 font-bold underline">
                    Majestic Miles
                </Link>

                <div class="flex flex-col border border-solid border-black">
                    <div class="flex flex-row">
                        <AiOutlineMail />
                        <span>
                            <a
                                href="mailto:info.majesticmiles@gmail.com"
                                class="mx-2 hover:bg-green-300"
                            >
                                info.majesticmiles@gmail.com
                            </a>
                        </span>
                        <BsFillTelephoneFill />
                        <span class="mx-2 hover:bg-green-300">90123908981</span>
                    </div>
                    <div class="flex flex-row justify-evenly">
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
