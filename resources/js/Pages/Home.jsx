import { Head } from "@inertiajs/react";

import NavBar from "../Layouts/NavBar";
import Footer from "../Layouts/Footer";
import sideFrontMerc from "../../assets/sideFrontMerc.jpg";

export default function Home() {
    return (
        <>
            <Head title="Home" />

            <NavBar />

            <img src={sideFrontMerc} />

            <Footer />
        </>
    );
}
