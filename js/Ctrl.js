export class Ctrl {
  Enviar(nombre) {
    const nombreSinEspacios = nombre ? nombre.trim() : "";
    if (!nombreSinEspacios) {
      throw new Error("Falta proporcionar el nombre.");
    }
    return `${nombreSinEspacios}.`;
  }
    Enviar(boleta) {
    const boletaSinEspacios = boleta ? boleta.trim() : "";
    if (!boletaSinEspacios) {
      throw new Error("Falta proporcionar la boleta.");
    }
    return `${boletaSinEspacios}.`;
  }
    Enviar(grupo) {
    const grupoSinEspacios = grupo ? grupo.trim() : "";
    if (!grupoSinEspacios) {
      throw new Error("Falta proporcionar el grupo.");
    }
    return `${grupoSinEspacios}.`;
  }
    Enviar(materia) {
    const materiaSinEspacios = materia ? materia.trim() : "";
    if (!materiaSinEspacios) {
      throw new Error("Falta proporcionar la materia.");
    }
    return `${materiaSinEspacios}.`;
  }
    Enviar(fecha) {
    const fechaSinEspacios = fecha ? fecha.trim() : "";
    if (!fechaSinEspacios) {
      throw new Error("Falta proporcionar la fecha.");
    }
    return `${fechaSinEspacios}.`;
  }
}
