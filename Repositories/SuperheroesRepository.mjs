import { SuperHero } from '#SRC/models/SuperHero.js';
import IRepository from '#SRC/Repositories/Irepository.mjs';

const filtroPorNombre = (nombre) => ({
    $or: [
        { nombreSuperHeroe: { $regex: `^${nombre}$`, $options: 'i' } },
        { nombreSuperheroe: { $regex: `^${nombre}$`, $options: 'i' } },
    ],
});

class SuperHeroRepository extends IRepository {
    async obtenerTodos() {
        return SuperHero.find({});
    }

    async obtenerPorId(id) {
        return SuperHero.findById(id);
    }

    async buscarPorAtributo(atributo, valor) {
        return SuperHero.find({ [atributo]: valor });
    }

    async obtenerMayoresDe30() {
        return SuperHero.find({ edad: { $gt: 30 } });
    }

    async buscarPorPlaneta(planeta) {
        return SuperHero.find({ planetaOrigen: planeta });
    }

    async obtenerPorNombre(nombre) {
        return SuperHero.findOne(filtroPorNombre(nombre));
    }

    async crear(datos) {
        const doc = new SuperHero(datos);
        return doc.save();
    }

    async actualizarPorNombre(nombre, datos) {
        return SuperHero.findOneAndUpdate(
            filtroPorNombre(nombre),
            { $set: datos },
            { new: true, runValidators: true },
        );
    }

    async eliminarPorNombre(nombre) {
        return SuperHero.findOneAndDelete(filtroPorNombre(nombre));
    }

    async eliminarPorId(id) {
        return SuperHero.findByIdAndDelete(id);
    }
}

export default new SuperHeroRepository();
