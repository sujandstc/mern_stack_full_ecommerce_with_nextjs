import axiosInstance from '@/app/utils/axiosInstance';
import { base_url } from '@/config';
import AddToCartComponent from '@/pageComponents/product/addToCartComponent';
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Links = ({ links }: any) => {
	return (
		<>
			{links.map((link: any, index: any) => (
				<Link key={index} href={link.link}>
					{' '}
					{'<'} {link.name}
				</Link>
			))}
		</>
	);
};

const SingleProductPage = async ({ params }: any) => {
	let response: any;

	try {
		response = await axios.get(`${base_url}/website/products?_id=${params.id}`);
	} catch (e) {
		return (
			<>
				<div className='h-[100vh] w-[100vw] font-bold text-[35px] text-gray-500 flex items-center justify-center '>Oh no! Something went wrong, try again later.</div>
			</>
		);
	}

	const product = response.data.data[0];

	return (
		<>
			<section id='product_details' className='container mx-auto mt-24'>
				<div className='2xl:mx-28  lg:mx-4 mx-2 '>
					<div className='my-4'>
						<Links
							links={[
								{ name: 'Home', link: '/' },
								{ name: 'Products', link: '/products' },
								{ name: 'Checkout', link: '/checkout' },
							]}
						/>
					</div>
					<div className='grid grid-cols-12 gap-4 '>
						<div className='lg:col-span-6 col-span-12'>
							<div>
								<Image src={product.product_image} alt='product_image' className=' w-full rounded-lg' width={500} height={200} />
							</div>
						</div>
						<div className='lg:col-span-6 col-span-12'>
							<div className=' px-4  mt-6'>
								<h1 className='text-5xl font-bold mb-4 '>{product.product_name}</h1>

								<p className='font-medium text-4xl'>Rs. {product.product_price}</p>
							</div>
							<p className='my-3'>Shipping is calculated at checkout</p>
							<AddToCartComponent id={response.data.data[0]._id} />
							<div className='mt-10'></div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default SingleProductPage;
