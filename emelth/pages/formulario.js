import Layout from "../components/layout";

export default function Formulario() {
  return (
    <Layout className="">
      <main className="bg-slate-400 ">
        <div className="h-full">
          <form method="post" className="flex flex-col max-h-full">
            <div className="">Crear Folio</div>
            <span className="">Selecciona el nivel de emergencia</span>
            <div className="">
              <span className="">C1</span>
              <input type="radio" name="tipoC" value="C1" className="" />
              <span className="">C2</span>
              <input type="radio" name="tipoC" value="C2" className="" />
              <span className="">C3</span>
              <input type="radio" name="tipoC" value="C3" className="" />
              <span className="">C4</span>
              <input type="radio" name="tipoC" value="C4" className="" />
              <span className="">C5</span>
              <input type="radio" name="tipoC" value="C5" class="" />
            </div>
            <span class="">Nombre paciente</span>
            <input
              type="text"
              name="formFolioNombre"
              class=""
              id="NombreID"
              placeholder="Nombre del paciente"
            />
            <span class="">Apellido Paterno</span>
            <input
              type="text"
              name="formFolioApellidoP"
              class=""
              id="ApellidoPID"
              placeholder="Apellido Paterno"
            />
            <span class="">Apellido Materno</span>
            <input
              type="text"
              name="formFolioApellidoM"
              class="Folio-form_txt Folio-form__apellidoM--input"
              id="ApellidoMID"
              placeholder="Apellido Materno"
            />
            <span class="Folio-form__Edad-txt nklasdlj">Edad</span>
            <input
              type="text"
              name="formFolioEdad"
              class="Folio-form_txt"
              id="EdadID"
              placeholder="Edad"
              oninput="soloNumeros(event)"
            />
            <span class="Folio-form__Sexo-txt nklasdlj">Sexo</span>
            <div class="Folio-form_RButton d-flex row">
              <span class="RButton_span KAHSDKJShd">Masculino</span>
              <input
                type="radio"
                name="sexo"
                value="M"
                class="Folio-form_RButton-M KAHSDKJShd"
              />
              <span class="RButton_span KAHSDKJShd">Femenino</span>
              <input
                type="radio"
                name="sexo"
                value="F"
                class="Folio-form_RButton-F KAHSDKJShd"
              />
            </div>
            <span class="Folio-form__Padecimiento-txt nklasdlj">
              Padecimiento actual
            </span>
            <input
              type="text"
              name="formFolioPadecimiento"
              class="Folio-form_txt"
              id="PadecimientoID"
              placeholder="Padecimiento"
            />
            <button
              type="submit"
              class="Folio-form_submit Folio-form_btn"
              id="id_form--submit"
            >
              Generar
            </button>
          </form>
        </div>
      </main>
    </Layout>
  );
}
