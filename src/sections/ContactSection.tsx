import { Mail, ArrowUpRight, Phone } from 'lucide-react';
import { FaGithub } from "react-icons/fa";
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
interface ContactItem {
    title: string;
    value: string;
    href: string;
    icon: React.ReactNode;
}

const CONTACTS: ContactItem[] = [
    {
        title: 'Phone / Zalo',
        value: '0937 639 157',
        href: 'https://zalo.me/0937639157',
        icon: <Phone size={22} />,
    },
    {
        title: 'Email',
        value: 'trantienhung21122004@gmail.com',
        href:
            'https://mail.google.com/mail/?view=cm&fs=1&to=trantienhung21122004@gmail.com&su=Portfolio%20Inquiry',
        icon: <Mail size={22} />,
    },
    {
        title: 'GitHub',
        value: 'github.com/trantienhunggg',
        href: 'https://github.com/trantienhunggg',
        icon: <FaGithub size={22} />,
    },
];

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="bg-white pt-24 rounded-t-[24px]
            sm:rounded-t-[40px]
            md:rounded-t-[50px]
            lg:rounded-t-[60px]"
        >
            <div
                className="
            max-w-7xl
            mx-auto
            bg-white
            rounded-t-[24px]
            sm:rounded-t-[40px]
            md:rounded-t-[50px]
            lg:rounded-t-[60px]
            px-5
            sm:px-8
            md:px-10
            pt-24
            pb-14
        "
            >
                {/* Heading */}

                <FadeIn delay={0} y={40}>
                    <h2
                        className="font-black uppercase text-center leading-none tracking-tight text-black"
                        style={{
                            fontSize: 'clamp(3rem,12vw,160px)',
                        }}
                    >
                        Contact
                    </h2>
                </FadeIn>

                {/* Description */}

                <div className=" mt-12 sm:mt-16 flex flex-col items-center">

                    <AnimatedText
                        text="Let's build something amazing together. I'm always excited to collaborate on meaningful projects, freelance opportunities and modern web experiences."
                        className="text-black text-center font-medium leading-relaxed max-w-2xl" style={{
                            fontSize: 'clamp(1rem,2vw,1.35rem)',
                        }}
                    />



                </div>

                {/* Contact Links */}

                <div className="mt-24 border-t border-black/10">
                    {CONTACTS.map((item, index) => (
                        <FadeIn
                            key={item.title}
                            delay={0.15 + index * 0.1}
                            y={25}
                        >
                            <a
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                className="group relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 py-8 md:py-10 border-b border-black/10 overflow-hidden"
                            >
                                {/* Hover Line */}
                                <span
                                    className="
                    absolute
                    left-0
                    bottom-0
                    h-[2px]
                    w-0
                    bg-black
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                                />

                                {/* Left */}
                                <div className="flex items-center gap-5">

                                    <div
                                        className="
    w-14
    h-14
    rounded-full
    border
    border-black/15
    flex
    items-center
    justify-center
    bg-white
    text-black
    transition-all
    duration-300
    group-hover:bg-black
    group-hover:text-white
    group-hover:border-black
    group-hover:scale-110
  "
                                    >
                                        {item.icon}
                                    </div>
                                    <div>

                                        <p className="uppercase tracking-[0.25em] text-xs text-black mb-2">
                                            {item.title}
                                        </p>

                                        <h3
                                            className="
                        text-black
                        font-medium
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                      "
                                            style={{
                                                fontSize: 'clamp(1.2rem,2vw,2rem)',
                                            }}
                                        >
                                            {item.value}
                                        </h3>

                                    </div>

                                </div>

                                {/* Right */}

                                <div
                                    className="
                    flex
                    items-center
                    justify-end
                    gap-3
                    text-black
                  "
                                >

                                    <span
                                        className="
                      uppercase
                      tracking-widest
                      text-sm
                      text-black
                      transition-all
                      duration-300
                      group-hover:opacity-100
                    "
                                    >
                                        Visit
                                    </span>

                                    <ArrowUpRight
                                        size={24}
                                        className="
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      group-hover:rotate-45
                      text-black
                    "
                                    />

                                </div>

                            </a>
                        </FadeIn>
                    ))}
                </div>
                {/* Footer */}

                <FadeIn delay={0.45} y={25}>
                    <footer
                        className="
              mt-20
              flex
              flex-col
              md:flex-row
              items-center
              justify-between
              gap-4
              border-t
              border-black/10
              pt-8
            "
                    >
                        <p
                            className="
                text-black
                tracking-widest
                text-xs
                md:text-sm
              "
                        >
                            © 2026 trantienhunggg
                        </p>

                        <p
                            className="
                text-black
                uppercase
                tracking-widest
                text-xs
                md:text-sm
                text-center
                md:text-right
              "
                        >
                            Crafting modern web experiences with React, Spring Boot, PostgreSQL, and Docker.                        </p>
                    </footer>
                </FadeIn>

            </div>
        </section>
    );
}