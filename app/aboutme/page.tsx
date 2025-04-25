import p1 from '@/../../public/images/photo1.jpg'
import p2 from '@/../../public/images/photo2.jpg'
import p3 from '@/../../public/images/photo3.jpg'
import Link from 'next/link'

export default function AboutMe() {


    return (
        <>
            <section className="pb-3 pt-8 md:mt-8 md:pb-16 lg:mt-10 max-w-2xl mx-auto min-h-screen">
                <div className="flex items-end gap-5 mb-5">
                    <h1 className="text-4xl font-bold tracking-tight">about me</h1>
                </div>
                <div className="group space-y-5 leading-relaxed">
                    <p>
                    Hey there! I&apos;m Murunwa Maphiri, a{' '}
                    {Math.floor(
                        (new Date().getTime() - new Date(2002, 6, 10).getTime()) /
                        (365.25 * 24 * 60 * 60 * 1000)
                    )}
                    -year-old Full-Stack developer from Pretoria, South Africa who loves creating 
                    cool <span className="text-teal-500">UIs</span>,
                    especially with ReactJS and .NET.
                    </p>
                    <p>
                    I began my tech journey at the end of 2022, and since then, I’ve
                    developed a strong expertise in building responsive and secure web
                    applications that offer a seamless user experience. Along with my love
                    for animation and UI design, I find full-stack development incredibly
                    fascinating.
                    </p>
                    <p>
                    I enjoy building robust applications and exploring new technologies to
                    enhance my skills.
                    </p>
                    <p>
                    Currently, I&apos;m diving into Java and{' '}
                    <Link
                        href="https://solana.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                        Next.JS
                        </span>
                    </Link>{' '}
                    development, expanding my skills in these innovative areas.
                    </p>
                </div>
                <div className="flex items-end gap-5 mb-5">
                    <h1 className="mt-5 text-4xl font-bold tracking-tight">hobbies</h1>
                </div>
            </section>
        </>
    )
}