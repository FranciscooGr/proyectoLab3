const mp = new MercadoPago("APP_USR-346715b2-5249-4268-ac50-df4536e965b3", {
  locale: "es-AR",
});

const finalizarCompra = document.getElementById("finalizarCompra");

finalizarCompra.addEventListener("click", async () => {
  console.log("Activo");
  try {
    let buyThings = JSON.parse(localStorage.getItem("carrito")) || [];

    // Definir el objeto order con los datos obtenidos
    const order = buyThings;

    const body = {
      items: order.map((item) => ({
        title: item.title, // Asegúrate de que `title` es una cadena
        unit_price: Number(item.price), // Convertimos `price` a número
        quantity: Number(item.amount), // Convertimos `amount` a número
        currency_id: "ARS",
      })),
      back_urls: {
        success: "https://www.youtube.com/",
        failure: "https://www.youtube.com/",
        pending: "https://www.youtube.com/",
      },
    };

    console.log("Body a enviar:", body);

    const response = await fetch("http://localhost:3000/create_preference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body), // Enviando `body` como JSON
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Respuesta del servidor:", data);
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
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
          valueProp: "smart_option",
        },
      },
    });
  };
  renderComponent();
};
