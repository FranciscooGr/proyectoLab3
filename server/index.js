import express from "express"; 
import cors from "cors";
import bodyParser  from "body-parser";

// SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from 'mercadopago';
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: 'APP_USR-3016297409880147-061111-e707e6fb3c969e2dfe5a3f0ad9b1e5c4-1851970335' });
const app = express()
const port = 3000;


app.use(cors());
app.use(express.json()); 

app.get("/", (req,res)=> {
    res.send("soy el server: ");
})

app.post("/create_preference", async (req, res) => {
    try{
        const order = req.body.items; // Capturar el cuerpo de la solicitud POST
        console.log('Datos recibidos:', order);
        const preferenceData = {
            items: order.map(item => ({
                title: item.title,
                unit_price: Number(item.unit_price),
                quantity: Number(item.quantity),
                currency_id: 'ARS',
            })),
            back_urls: {
                success: "https://www.youtube.com/",
                failure: "https://www.youtube.com/",
                pending: "https://www.youtube.com/",
            },
            auto_return: "approved",
        };
        console.log('Datos de preferencia:', preferenceData);

        const preference = new Preference(client);
        const result = await preference.create({preferenceData});
        console.log(result+" result");
       res.json({order:'Order received'});
    }catch(error){
        console.log(error);
        res.status(500).json({
            error: "Error al crear la nueva preferencia",
        });
    }
})

app.listen(port, () =>{
    console.log("el servidor esta corriendo en el puerto "+ port);
})