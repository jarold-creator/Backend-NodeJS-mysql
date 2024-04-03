import express from 'express';
/**importar uno a uno las funciones desde el controlador */
import { getAllCitas, crearCita, getCitaById, actualizarCita, eliminarCita } from '../controllers/citasController.js'

const router = express.Router();
//**rutas CRUD */
router.get('/', getAllCitas);
router.post('/', crearCita);
router.get('/:id', getCitaById);
router.put('/:id', actualizarCita);
router.delete('/:id', eliminarCita);

export default router;