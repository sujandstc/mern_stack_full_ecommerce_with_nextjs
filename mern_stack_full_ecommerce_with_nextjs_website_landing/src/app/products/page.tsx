import { base_url } from '@/config';
import ProductsDisplayComponent from '@/pageComponents/product/ProductsDisplayComponent';
import axios from 'axios';

export const metadata = {
	title: 'Products | E Pasal',
	description: 'buy what you want, when you want, where you want.',
};

const ProductsPage = async () => {
	let response: any;

	try {
		response = await axios.get(`${base_url}/website/products`);
	} catch (e) {
		return (
			<>
				<div className='h-[100vh] w-[100vw] font-bold text-[35px] text-gray-500 flex items-center justify-center '>Oh no! Something went wrong, try again later.</div>
			</>
		);
	}

	return (
		<section id='products' className='container mx-auto mt-28'>
			<div className='2xl:mx-28  lg:mx-4 mx-2 '>
				<h1 className='text-4xl text-center my-8 font-bold'>All Products</h1>
				<hr className='mb-10' />
				<div className='mt-10 grid grid-cols-12 gap-4'>
					{response.data.data.map((product: any, index: any) => (
						<div key={index} className='lg:col-span-4 col-span-12'>
							<ProductsDisplayComponent product={product} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductsPage;
