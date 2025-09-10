import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    { productName: 'Nintendo Switch 2', quantity: 1 },
    { productName: 'Mario Kart World', quantity: 2 },
    { productName: 'The Legend of Zelda', quantity: 5 },
];

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de Compras</h1>

            {itemsInCart.map(({ productName, quantity }) => (
                <ItemCounter key={productName} productName={productName} quantity={quantity} />
            ))}
            {/* 
            <ItemCounter productName="Nintendo Swich 2" quantity={2} />
            <ItemCounter productName="Mario Kart World" quantity={1} />
            <ItemCounter productName="The Legend of Zelda" quantity={3} /> */}
        </>
    );

}