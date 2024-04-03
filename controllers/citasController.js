/**importar el módelo */
import Citas from '../models/Citas.js'

/**funciones CRUD*/
/**funcion mostrar todas las citas */
export const getAllCitas = async (req, res) => {
    try {
        const citas = await Citas.findAll();
        res.json(citas)
    } catch (error) {
        res.json({ msg: error.message })
    }
}

/**funcion para crear una cita insertar en la base de datos */
export const crearCita = async (req, res) => {
    try {
        const { nombre_medico, especialidad, fecha, duracion } = req.body;

        const nuevaCita = await Citas.create({
            nombre_medico, especialidad, fecha, duracion
        })
        res.json(nuevaCita);
    } catch (error) {
        res.json({ msg: error.message });
    }
}

/**funcion para consultar cita por id */
export const getCitaById = async (req, res) => {
    try {
        const { id } = req.params;
        const cita = await Citas.findByPk(id);

        if (!cita) {
            return res.status(404).json({ msg: 'Cita no encontrada' });
        } else {
            res.json(cita);
        }
    } catch (error) {
        res.json({ msg: error.message })
    }
}

/**funcion para actualizar cita por id */
export const actualizarCita = async (req, res)=>{
    try {
        const { id } = req.params;
        const { nombre_medico, especialidad, fecha, duracion } = req.body;
        const cita = await Citas.findByPk(id);
        
        if(!cita){
            res.status(404).json({msg:'No se encontro la cita por este Id'});
        }else{
            await cita.update({
                nombre_medico,
                especialidad,
                fecha,
                duracion
            })
            res.json({msg:'cita actualizada...'})
        }        
    } catch (error) {
        res.json({msg:error.message});        
    }
}

/**funcion para eliminar cita */
export const eliminarCita = async(req, res)=>{
    try {
        const { id } = req.params;
        const numeroFilasEliminadas = await Citas.destroy({ where: { id } });
        
        if(numeroFilasEliminadas === 0){
            res.status(404).json({msg:'No se encontro la cita'});
        }else{
            res.json({msg:'cita eliminada...'})
        }
    } catch (error) {
        res.json({msg:error.message});
    }
}