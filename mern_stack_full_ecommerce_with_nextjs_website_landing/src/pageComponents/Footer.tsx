'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaBarsStaggered, FaRegCopyright } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';

export const Footer = () => {
	return (
		<section id='footer'>
			<footer className='bg-black mt-10 text-white'>
				<div className='container mx-auto py-10'>
					<div className='2xl:mx-28  lg:mx-4 mx-2 '>
						<div className='border-b-[1px] pb-10 flex justify-between items-center lg:flex-row flex-col lg:space-y-0 space-y-10'>
							<div className='flex flex-col items-center lg:items-start'>
								<Link href='/'>
									<Image src={'/logo_white.png'} alt='' className=' w-[150px]' width={1000} height={1000} />
								</Link>

								<p className='font-medium max-w-[500px] mt-4 lg:text-start text-center text-white'> buy what you want, when you want, where you want.</p>
							</div>
						</div>

						<div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 justify-between items-center pt-12'>
							<p className='text-white'>
								<FaRegCopyright className='mr-1 inline-block' color='#fff' /> 2024 - E Pasal. All rights reserved
							</p>
						</div>
					</div>
				</div>
			</footer>
		</section>
	);
};
