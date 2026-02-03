import { ItemCounter } from "./shopping-cart/ItemCounter";

export function FirstStepsApp() {
	return (
			<>
					<h1>Carro de Compras 🛒</h1>
					
					<ItemCounter nombre="Nintendo Switch" cantidad={1}/>
					<ItemCounter nombre="PS5" cantidad={1}/>
					<ItemCounter nombre="Agua"/>
					<ItemCounter nombre="Coca-Cola" cantidad={5}/>
			</>
	);
}