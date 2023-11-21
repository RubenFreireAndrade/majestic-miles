import { Head } from '@inertiajs/react';
import { Carousel } from "@material-tailwind/react";
import { IoCarSportSharp } from "react-icons/io5";

import NavBar from '../Layouts/NavBar';
import Footer from '../Layouts/Footer';
import Carousels from '../Layouts/Carousel';
import frontMerc from '../../assets/FrontMerc.jpg';
import sideFrontMerc from '../../assets/sideFrontMerc.jpg';
import frontMercBlack from '../../assets/FrontMercBlack.jpg';

export default function Home() {
    const images = [ frontMercBlack, frontMerc, sideFrontMerc ];

    return (
        <>
            <Head title="Home" />

            <NavBar />
            {/* <div class="mt-20 w-[75%]">
                <Carousel transition={{duration: 2}}>
                    <img src={sideFrontMerc} />
                    <img src={LF} />
                </Carousel>
            </div> */}

            <div class="flex flex-col items-center bg-gray-700">
                <div>
                    <img src={frontMercBlack}></img>
                </div>
            </div>

            <h1 class="text-center">Our Services</h1>
            
            <div class="grid grid-cols-2 gap-10 mx-12 mb-12 text-center justify-center">
                <section class="flex flex-row">
                    <IoCarSportSharp class="mr-6" size={"10rem"} />
                    <div class="border border-black">
                        <h2>Transfers</h2>
                        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    </div>
                </section>

                <section class="flex flex-row">
                    <div class="mr-6">ICON</div>
                    <div class="border border-black">
                        <h2>Hire</h2>
                        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    </div>
                </section>

                <section class="flex flex-row">
                    <div class="mr-6">ICON</div>
                    <div class="border border-black">
                        <h2>Tours</h2>
                        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
}
