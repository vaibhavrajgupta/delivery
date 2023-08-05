import React from "react";

const OrdersPage = () => {
	return (
		<div className="p-4 lg:px-20 xl:px-40">
			<table className="w-full border-separate border-spacing-3">
				<thead>
					<tr className="text-left ">
						<th className="hidden md:block">Order ID</th>
						<th className="">Date</th>
						<th className="">Price</th>
						<th className="hidden md:block">Products</th>
						<th className="">Status</th>
					</tr>
				</thead>
				<tbody>
					<tr className="text-sm md:text-base odd:bg-red-50">
						<td className="hidden md:block py-6 px-1">1234567897654</td>
						<td className="py-6 px-1">05.08.2023</td>
						<td className="py-6 px-1">897</td>
						<td className="hidden md:block py-6 px-1">Maharaja Burger(2), Veggie Paradise(2), Coke (1L)</td>
						<td className="py-6 px-1">On the way (approx. 10 min).....</td>
					</tr>
					<tr className="text-sm md:text-base odd:bg-gray-100">
						<td className="hidden md:block py-6 px-1">1234567897654</td>
						<td className="py-6 px-1">05.08.2023</td>
						<td className="py-6 px-1">897</td>
						<td className="hidden md:block py-6 px-1">Maharaja Burger(2), Veggie Paradise(2), Coke (1L)</td>
						<td className="py-6 px-1">On the way (approx. 10 min).....</td>
					</tr>
					<tr className="text-sm md:text-base odd:bg-gray-100">
						<td className="hidden md:block py-6 px-1">1234567897654</td>
						<td className="py-6 px-1">05.08.2023</td>
						<td className="py-6 px-1">897</td>
						<td className="hidden md:block py-6 px-1">Maharaja Burger(2), Veggie Paradise(2), Coke (1L)</td>
						<td className="py-6 px-1">On the way (approx. 10 min).....</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default OrdersPage;
