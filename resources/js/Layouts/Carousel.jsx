import { Link } from '@inertiajs/react';
import '../../js/Layouts/Carousel.css';
import React, { useState, useEffect } from 'react';

export default function Carousel({ images, interval }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
            const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(intervalId);
    }, [currentIndex, interval, images.length]);

    return (
        <div class="relative overflow-hidden w-full h-1/4">
            <div
                class="flex transition-transform duration-500 ease-in-out transform"
                style={{ transform: `translateX(-${currentIndex * (100 / images.length)}%)` }}
            >
                {images.map((image, index) => (
                    <img 
                        key={index} 
                        src={image}
                        alt={`slide-${index}`}
                        class="w-full h-full object-cover"
                        style={{ objectFit: 'contain', objectPosition: 'center center' }}
                    />
                ))}
            </div>
    </div>
    );
}