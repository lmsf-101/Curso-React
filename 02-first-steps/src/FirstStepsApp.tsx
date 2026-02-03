import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
	productName: string;
	quantity: number;
}

const itemsInCart: ItemInCart[] = [
	{productName: "Nintendo Switch", quantity: 1},
	{productName: "Mario Bros", quantity: 5},
	{productName: "Switch Camera", quantity: 1},
]

export function FirstStepsApp() {
	return (
			<>
					<h1>Carro de Compras 🛒</h1>
					
					{
						itemsInCart.map(({productName, quantity}: ItemInCart) => (
							<ItemCounter key={productName} nombre={productName} cantidad={quantity} />
						))
					}
			</>
	);
}