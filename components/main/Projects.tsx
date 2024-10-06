import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
            style={{position: 'relative',bottom: '0',zIndex: '100'}}
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects 
            </h1>
            <div className="h-auto w-full flex flex-col md:flex-row gap-5 px-10 flex-wrap">
                <ProjectCard
                    src="/auto_mieten.png"
                    title="Auto Mieten"
                    description="PHP,MySQL,Bootstrap ."
                    link=""
                />
                <ProjectCard
                    src="/car_rental.png"
                    title="car rental"
                    description="Next.js,typscript,tailwindcss,shadcnui"
                    link="https://hulkcars.com/#ProjectSection"
                />
                <ProjectCard
                    src="/Kryptomon.png"
                    title="Kryptomon"
                    description="Next.js,Typescript,RadixUi,prisma.."
                    link="https://hub.kryptomon.co/sign-in"
                />
                <ProjectCard
                    src="/BBBkings.png"
                    title="BBBkings"
                    description="Next.js,Typescript,Shadcnui,MongoDB.."
                    link="https://bbbkings.vercel.app"
                />
                <ProjectCard
                    src="/devoptima.png"
                    title="devoptima"
                    description="Vue.js,Chakraui,Typescript.."
                    link=""
                />
                <ProjectCard
                    src="/bitruine.png"
                    title="bitruin"
                    description="Next.js,Typescript,Shadcnui"
                    link=""
                />
                <ProjectCard
                    src="/shutterstock.png"
                    title="shutterstock"
                    description="Php,Scss.."
                    link="https://www.shutterstock.com/"
                />
                <ProjectCard
                    src="/Hilton@Hyland.png"
                    title="Hilton@Hyland"
                    description="Php,Css.."
                    link="https://www.hiltonhyland.com"
                />
            </div>
        </div>
    );
};

export default Projects;