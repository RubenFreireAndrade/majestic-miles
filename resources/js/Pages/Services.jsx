import { Link, Head } from "@inertiajs/react";

import NavBar from "../Layouts/NavBar";

export default function Services() {
    return (
        <>
            <Head title="Services" />

            <NavBar />

            <div class="flex flex-col items-center justify-evenly border border-solid border-black">
                <div class="flex flex-row">
                    <h1>SERVICES</h1>
                </div>

                <div class="flex flex-row justify-evenly w-full border border-solid border-black">
                    <div class="flex flex-col mx-2">
                        <h1>Our Services</h1>

                        <Link href={route("transfers")}>Transfers</Link>

                        <Link href={route("hire")}>City Hire</Link>

                        <Link href={route("test")}>Test</Link>
                    </div>

                    <div class="flex flex-col mx-2">
                        <h1>Inquiry</h1>
                    </div>
                </div>
            </div>
        </>
    );
}
