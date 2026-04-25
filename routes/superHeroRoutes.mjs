/**
 * Rutas montadas en app como `app.use('/api', superHeroRoutes)`.
 * Base Postman: http://localhost:3000/api
 *
 * Práctico 1 — endpoints obligatorios:
 * GET    /                    — todos los superhéroes
 * POST   /                    — crear (body JSON); devuelve el creado
 * PUT    /:nombre             — actualizar por nombre; devuelve el actualizado
 * DELETE /id/:id             — borrar por _id de MongoDB; devuelve el borrado
 * DELETE /:nombre            — borrar por nombre de superhéroe; devuelve el borrado
 *
 * Otros (ampliación):
 * GET /buscar, /mayores-30, /id/:id, /buscar-atributo/..., /:nombre
 */
import express from 'express';
import * as heroController from '#SRC/Controllers/superheroController.mjs';

const router = express.Router();

router.get('/mayores-30', heroController.obtenerMayoresDe30);
router.get('/id/:id', heroController.obtenerPorId);
router.get(
    '/buscar-atributo/:atributo/:valor',
    heroController.buscarPorAtributo,
);
router.get('/buscar', heroController.buscarPorPlaneta);
router.get('/', heroController.obtenerTodos);
router.get('/:nombre', heroController.obtenerPorNombre);
router.post('/', heroController.insertar);
router.put('/:nombre', heroController.actualizar);
router.delete('/:nombre', heroController.eliminar);
router.delete('/id/:id', heroController.eliminarPorId);

export default router;
