import p1 from '@/../../public/images/photo1.jpg'
import p2 from '@/../../public/images/photo2.jpg'
import p3 from '@/../../public/images/photo3.jpg'
import Link from 'next/link'
import avatar from "@/public/images/about-me-section/Me.png"
import avatar2 from "@/public/images/about-me-section/Me & My Sister.jpg"
import avatar3 from "@/public/images/about-me-section/Me and my homies.jpg"
import Image from 'next/image'

export default function AboutMe() {


    return (
        <>
            <section className="pb-3 pt-8 md:mt-8 md:pb-16 lg:mt-10 max-w-2xl mx-auto min-h-screen">
                <div className="flex items-end gap-5 mb-5">
                    <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
                </div>
                <div className="group space-y-5 leading-relaxed">
                    <div className='flex flex-row w-full justify-between'>
                        <Image
                            src={avatar}
                            alt='Picture of me'
                            height={80}
                            width={80}
                            className='h-[25%] w-[45%] rounded-2xl object-cover md:h-[250px] md:w-[200px]'
                        />
                        <Image
                            src={avatar2}
                            alt='Me and My Sister'
                            height={80}
                            width={80}
                            className='h-[25%] w-[45%] rounded-2xl object-cover md:h-[250px] md:w-[200px]'
                        />
                        <Image
                            src={avatar3}
                            alt='Me and my friends'
                            height={80}
                            width={80}
                            className='h-[25%] w-[45%] rounded-2xl object-cover md:h-[250px] md:w-[200px] md: hidden'
                        />
                    </div>
                    <p>
                    Hey there! I&apos;m Murunwa Maphiri, a{' '}
                    {Math.floor(
                        (new Date().getTime() - new Date(2002, 6, 10).getTime()) /
                        (365.25 * 24 * 60 * 60 * 1000)
                    )}
                    -year-old Full-Stack developer from Pretoria, South Africa who loves creating 
                    cool UIs and backends,
                    especially with ReactJS and .NET.
                    </p>
                    <p>
                    I enjoy building robust applications and exploring new technologies to
                    enhance my skills.
                    </p>
                    <p>
                        I fell in love with tech at the age of 13 and since then I've never looked back.
                        From installing custom roms from xda developers to hacking games using Lucky Patcher, 
                        I was obsessed with figuring out how things worked behind the screen. 
                        That curiosity turned into a passion and it's what turned me into the person I am today. It’s what drives me to keep learning every day.
                    </p>
                    <p>
                    Currently, I&apos;m diving into Java and Next.JS
                    development, expanding my skills in these innovative areas.
                    </p>
                </div>
                <div className="flex items-end gap-5 mb-5">
                    <h1 className="mt-5 text-4xl font-bold tracking-tight">Hobbies</h1>
                </div>
                <div className="group space-y-5 leading-relaxed">
                    <p>
                        Outside of coding, I enjoy watching anime, football and gaming.
                    </p>
                </div>
            </section>
        </>
    )
}