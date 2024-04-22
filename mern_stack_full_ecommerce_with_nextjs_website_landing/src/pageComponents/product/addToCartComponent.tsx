'use client';

import axiosInstance from '@/app/utils/axiosInstance';
import axios from 'axios';
import { useState } from 'react';

const AddToCartComponent = (props: any) => {
	const [isLoading, setisLoading] = useState(false);
	const [quantity, setQuanity] = useState(1);

	const addToCart = async () => {
		setisLoading(true);
		try {
			const response = await axiosInstance.post(`/website/products/addToCart`, {
				product_id: props.id,
				quantity: quantity,
			});
			setisLoading(false);
		} catch (e) {
			setisLoading(false);
		}
	};

	return (
		<>
			<div className='flex cursor-pointer'>
				<div className='flex space-x-2 items-center mr-6'>
					<div
						className=' h-[50px] w-[50px] flex items-center justify-center text-3xl  border-2 border-slate-400 rounded-md cursor-pointer'
						onClick={() => {
							if (quantity < 2) return;
							setQuanity(quantity - 1);
						}}
					>
						-
					</div>
					<div className=' h-[50px] w-[50px] flex items-center justify-center text-3xl  border-2 border-slate-400 rounded-md'>{quantity}</div>
					<div
						className=' h-[50px] w-[50px] flex items-center justify-center text-3xl  border-2 border-slate-400 rounded-md cursor-pointer'
						onClick={() => {
							setQuanity(quantity + 1);
						}}
					>
						+
					</div>
				</div>

				<button
					className='px-8 bg-red-500 shadow-md  text-white text-xl font-medium rounded-md'
					onClick={() => {
						addToCart();
					}}
				>
					Add to cart
				</button>
			</div>
		</>
	);
};
export default AddToCartComponent;
