
const mp = new MercadoPago('APP_USR-346715b2-5249-4268-ac50-df4536e965b3', {
    locale: "es-AR",
});

const finalizarCompra = document.getElementById("finalizarCompra");

finalizarCompra.addEventListener("click", async () => {
    console.log("Activo");
    try {
        let buyThings = JSON.parse(localStorage.getItem("carrito")) || [];

        const order = {
            items: [
                {
                    title: "Producto de prueba",
                    price: 10.99, // Precio predefinido
                    amount: 2 // Cantidad predefinida
                }
            ]
        };
        
            console.log(order);
        

        const response = await fetch("http://localhost:3000/create_preference", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(order)
        });

        const data = await response.json();
        createCheckoutButton(data.preferenceId); 
        
    } catch (error) {
        alert("Error al finalizar la compra");
        console.error(error);
    }
});

const createCheckoutButton = (preferenceId) => {
    const bricksBuilder = mp.bricks();

    const renderComponent = async () => {
        if (window.checkoutButton) window.checkoutButton.unmount();
        await bricksBuilder.create("wallet", "wallet_container", {
            initialization: {
                preferenceId: preferenceId,
            },
            customization: {
                texts: {
                    valueProp: 'smart_option',
                },
            },
        });
    };
    renderComponent();
};