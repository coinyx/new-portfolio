"use client";  // Ensure this is at the top of your file

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
    src: string;
    title: string;
    description: string;
    link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {


    console.log("link => ",link)

    return (
        <div
            className="rounded-lg w-80 shadow-lg border border-[#2A0E61] cursor-pointer"
             onClick={() => link && window.open(link, "_blank", "noopener noreferrer")}
        >
            <a href={link} target="_blank" rel="noopener noreferrer" className="block">
            <Image
                src={src}
                alt={title}
                width={1000}
                height={1000}
                className="object-contain"
            />
            <div className="p-4">
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <p className="mt-2 w-auto text-gray-300">{description}</p>
            </div>
            </a>
        </div>
    );
};

export default ProjectCard;