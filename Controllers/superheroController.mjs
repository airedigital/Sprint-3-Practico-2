import superHeroRepository from '#SRC/Repositories/SuperheroesRepository.mjs';
import {
    renderizarSuperheroe,
    renderizarListaSuperheroes,
} from '#SRC/Views/responseView.mjs';

export async function obtenerTodos(req, res) {
    try {
        const heroes = await superHeroRepository.obtenerTodos();
        res.status(200).json(renderizarListaSuperheroes(heroes));
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al obtener los superhéroes',
            error: error.message,
        });
    }
}

export async function buscarPorPlaneta(req, res) {
    try {
        const planeta = req.query.planetaOrigen || 'Tierra';
        const heroes = await superHeroRepository.buscarPorPlaneta(planeta);
        res.status(200).json(renderizarListaSuperheroes(heroes));
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al buscar por planeta',
            error: error.message,
        });
    }
}

export async function obtenerPorNombre(req, res) {
    try {
        const nombre = req.params.nombre;
        const hero = await superHeroRepository.obtenerPorNombre(nombre);
        if (!hero) {
            return res
                .status(404)
                .json({ mensaje: 'Superhéroe no encontrado' });
        }
        res.status(200).json(renderizarSuperheroe(hero));
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al obtener el superhéroe',
            error: error.message,
        });
    }
}

export async function insertar(req, res) {
    try {
        const saved = await superHeroRepository.crear(req.body);
        res.status(201).json(renderizarSuperheroe(saved));
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al crear el superhéroe',
            error: error.message,
        });
    }
}

export async function actualizar(req, res) {
    try {
        const nombre = req.params.nombre;
        const actualizado = await superHeroRepository.actualizarPorNombre(
            nombre,
            req.body,
        );
        if (!actualizado) {
            return res
                .status(404)
                .json({ mensaje: 'Superhéroe no encontrado' });
        }
        res.status(200).json(renderizarSuperheroe(actualizado));
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al actualizar el superhéroe',
            error: error.message,
        });
    }
}

export async function eliminar(req, res) {
    try {
        const nombre = req.params.nombre;
        const borrado = await superHeroRepository.eliminarPorNombre(nombre);
        if (!borrado) {
            return res
                .status(404)
                .json({ mensaje: 'Superhéroe no encontrado' });
        }
        res.status(200).json(renderizarSuperheroe(borrado));
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al eliminar el superhéroe',
            error: error.message,
        });
    }
}

export async function eliminarPorId(req, res) {
    try {
        const { id } = req.params;
        const borrado = await superHeroRepository.eliminarPorId(id);
        if (!borrado) {
            return res
                .status(404)
                .json({ mensaje: 'Superhéroe no encontrado' });
        }
        res.status(200).json(renderizarSuperheroe(borrado));
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al eliminar el superhéroe',
            error: error.message,
        });
    }
}

export async function obtenerPorId(req, res) {
    try {
        const { id } = req.params;
        const superheroe = await superHeroRepository.obtenerPorId(id);
        if (!superheroe) {
            return res
                .status(404)
                .json({ mensaje: 'Superhéroe no encontrado' });
        }
        res.status(200).json(renderizarSuperheroe(superheroe));
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al obtener el superhéroe',
            error: error.message,
        });
    }
}

export async function buscarPorAtributo(req, res) {
    try {
        const { atributo, valor } = req.params;
        const superheroes = await superHeroRepository.buscarPorAtributo(
            atributo,
            valor,
        );
        if (superheroes.length === 0) {
            return res.status(404).json({
                mensaje: 'No se encontraron superhéroes con ese atributo',
            });
        }
        res.status(200).json(renderizarListaSuperheroes(superheroes));
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al buscar los superhéroes',
            error: error.message,
        });
    }
}

export async function obtenerMayoresDe30(req, res) {
    try {
        const superheroes = await superHeroRepository.obtenerMayoresDe30();
        if (superheroes.length === 0) {
            return res.status(404).json({
                mensaje: 'No se encontraron superhéroes mayores de 30 años',
            });
        }
        res.status(200).json(renderizarListaSuperheroes(superheroes));
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al obtener superhéroes mayores de 30',
            error: error.message,
        });
    }
}
