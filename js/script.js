      import { Ctrl } from "/js/Ctrl.js";
      const ctrl = new Ctrl();
      form.addEventListener("submit", evt => {
        try {
          evt.preventDefault();
          const datos = new FormData(form);
          const nombre = datos.get("nombre");
          const envia = ctrl.Enviar(nombre);
          const boleta = datos.get("boleta");
          const envia = ctrl.Enviar(boleta);
          const grupo = datos.get("grupo");
          const envia = ctrl.Enviar(grupo);
          const materia = datos.get("materia");
          const envia = ctrl.Enviar(materia);
          const fecha = datos.get("fecha");
          const envia = ctrl.Enviar(fecha);
          form.salida.value = envia;
        } catch (error) {
          console.log(error);
          form.salida.value = error.message;
        }
      });
   
