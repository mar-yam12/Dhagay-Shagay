import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Trends = () => {
    return (
        <section className="mx-4 md:mx-20 my-10">
            <p className="text-sm uppercase text-[#1F1C1AF2] mb-2">Summer Trends</p>
            <h2 className="text-4xl font-black text-black">
                EXPLORE OUR MUST-HAVE SUMMER
            </h2>
            <h3 className="text-3xl font-medium text-black mb-10">
                COLLECTION AND STAY TRENDY
            </h3>

            <div className="flex flex-col md:flex-row gap-6">
                {/* LEFT COLUMN */}
                <div className="flex flex-col gap-6 w-full md:w-1/3">
                    {/* MEN SUMMER COLLECTION */}
                    <div className="relative rounded-[30px] overflow-hidden">
                        <Image
                            src="/images/men-summer.png"
                            alt="Men Summer Collection"
                            width={433}
                            height={353}
                            className="rounded-[30px] w-full h-auto"
                        />
                        <div className="absolute bottom-4 left-4 text-white font-semibold w-36">
                            MEN SUMMER COLLECTION
                        </div>
                        <Link href="/trends">
                            <div className="absolute bottom-5 right-4">
                                <div className="w-[50px] h-[50px] rounded-full bg-[#C5F302] flex items-center justify-center cursor-pointer hover:bg-[#b2e200]">
                                    <Image
                                        src="/images/Arrow-Icon.png"
                                        alt="Arrow Icon"
                                        width={22}
                                        height={18}
                                    />
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* WOMEN SPORT COLLECTION */}
                    <div className="relative rounded-[30px] overflow-hidden">
                        <Image
                            src="/images/women-sport.png"
                            alt="Women Sport Collection"
                            width={433}
                            height={353}
                            className="rounded-[30px] w-full h-auto object-cover"
                        />
                        <div className="absolute bottom-4 left-4 text-white font-semibold w-36">
                            WOMEN SPORT COLLECTION
                        </div>
                        <Link href="/trends">
                            <div className="absolute bottom-5 right-4">
                                <div className="w-[50px] h-[50px] rounded-full bg-[#C5F302] flex items-center justify-center cursor-pointer hover:bg-[#b2e200]">
                                    <Image
                                        src="/images/Arrow-Icon.png"
                                        alt="Arrow Icon"
                                        width={22}
                                        height={18}
                                    />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="relative w-full md:w-2/3 rounded-[30px] overflow-hidden">
                    <Image
                        src="/images/women-new-sport.png"
                        alt="Women New Sport Collection"
                        width={886}
                        height={686}
                        className="rounded-[30px] w-full object-cover"
                    />
                    <div className="absolute bottom-10 left-4 text-white font-semibold">
                        WOMEN NEW SPORT COLLECTION
                    </div>
                    <Link href="/trends">
                        <div className="absolute bottom-10 right-4">
                            <div className="w-[50px] h-[50px] rounded-full bg-[#C5F302] flex items-center justify-center cursor-pointer hover:bg-[#b2e200]">
                                <Image
                                    src="/images/Arrow-Icon.png"
                                    alt="Arrow Icon"
                                    width={22}
                                    height={18}
                                />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>

    );
};

export default Trends;