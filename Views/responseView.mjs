export function renderizarSuperheroe(superheroe) {
    const out = {
        Nombre: superheroe.nombreSuperHeroe,
        'Nombre Real': superheroe.nombreReal,
        Edad: superheroe.edad,
        'Planeta de Origen': superheroe.planetaOrigen,
        Debilidad: superheroe.debilidad,
        Poderes: superheroe.poderes,
        Aliados: superheroe.aliados,
        Enemigos: superheroe.enemigos,
    };
    if (superheroe._id != null) {
        out._id = String(superheroe._id);
    }
    if (superheroe.createdAt != null) {
        out.createdAt = superheroe.createdAt;
    }
    return out;
}
export function renderizarListaSuperheroes (superheroes) {
return superheroes.map(superheroe => renderizarSuperheroe (superheroe));
}