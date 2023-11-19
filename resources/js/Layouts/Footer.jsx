import React from "react";
import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-8">
            <div className="container mx-auto flex justify-between">
                <div className="flex">
                    <Link
                        // to="/social-media-1"
                        className="mr-4 hover:text-gray-500"
                    >
                        Social Media 1
                    </Link>
                    <Link
                        //to="/social-media-2"
                        className="mr-4 hover:text-gray-500"
                    >
                        Social Media 2
                    </Link>
                    <Link 
                        //to="/social-media-3" 
                        className="hover:text-gray-500"
                    >
                        Social Media 3
                    </Link>
                </div>
                <div>&copy; 2023 Your Company Name. All rights reserved.</div>
            </div>
        </footer>
    );
}
