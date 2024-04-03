import express from 'express'
import cors from 'cors'
/**importar la conexion a la base de datos */
import connDB from './configDB/db.js'
/**importar rutas */
import citasRouter from './routers/rutas_citas.js'
/**puerto */
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/citas', citasRouter);

/**verficamos la conexion a la DB */
try {
    await connDB.authenticate();
    console.log('Connection successfully.');
  } catch (error) {
    console.error('error connect DB', error);
  }

app.get('/', (req,res)=>{
    res.json({msg:'Ingresaste ruta raiz'});
})

app.listen(5000, ()=>{
    console.log('Server running http://localhost:5000');
})