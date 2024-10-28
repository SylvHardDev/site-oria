import clock from "../../assets/icons/clock.png";
import money from "../../assets/icons/money.png";
import star from "../../assets/icons/star.png";
import user_star from "../../assets/icons/user-star.png";
import photo_Historique from "../../assets/images/illustration-construction-site.webp";

function SectionHistorique() {
  return (
    <section className="py-12 px-4 md:px-32">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Titre principal */}
          <div>
            <h2 className="text-green-600 text-xs font-semibold uppercase mb-2">
              <span className="inline-block w-2 h-2 bg-green-600 mr-2"></span>
              Notre Histoire
            </h2>
            <h3 className="text-xl font-bold mb-8">LE FONDEMENT DU GROUPE</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              <div className=" col-span-2 flex flex-col md:flex-row justify-between">
                {/* Image */}
                <div className="w-full mb-3 md:w-[40%]">
                  <img
                    src={photo_Historique}
                    alt="Construction"
                    className="w-full rounded-lg"
                  />
                </div>
                {/* Texte */}
                <div className=" md:w-[50%]">
                  <p className="text-sm mb-4">
                    Proin in iaculis neque. Pellentesque habitant morbi
                    tristique senectus et netus malesuada fames ac turpis
                    egestas. Curabitur
                  </p>
                  <p className="text-sm mb-4">
                    Duis dapibus aliquam mi, eget euismod sem scelerisque ut.
                    Vivamus at elit quis urna adipiscing iaculis. Curabitur
                    vitae
                  </p>
                </div>
              </div>

              <div className="col-span-2">
                <p className="text-sm mb-4">
                  Proin in iaculis neque. Pellentesque habitant morbi tristique
                  senectus et netus malesuada fames ac turpis egestas. Curabitur
                  vitae velit in neque dictum blandit. Proin in iaculis neque.
                  Pellentesque habitant morbi tristique senectus et netus
                  malesuada fames ac turpis egestas. Curabitur vitae velit in
                  neque dictum blandit.
                </p>
                <p className="text-sm mb-4">
                  Duis dapibus aliquam mi, eget euismod sem scelerisque ut.
                  Vivamus at elit quis urna adipiscing iaculis. Curabitur vitae
                  velit in neque dictum blandit. Proin in iaculis neque. Duis
                  dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus
                  at elit quis urna adipiscing iaculis.
                </p>
              </div>
            </div>
          </div>

          {/* Fonctionnalités */}
          <div>
            <h2 className="text-green-600 text-xs font-semibold uppercase mb-2">
              <span className="inline-block w-2 h-2 bg-green-600 mr-2"></span>
              Nous sommes qualifiés
            </h2>
            <h1 className="text-xl font-bold mb-8">NOS FONCTIONNALITÉS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Fonctionnalité 1 */}
              <div className="border bg-slate-50 rounded-lg p-6">
                <div className="flex flex-col mb-4">
                  <span className="text-green-600 text-3xl">
                    <img src={clock} className="w-8 h-8" alt="montre" />
                  </span>
                  <h3 className="pt-2 font-semibold text-md">
                    Toujours disponible
                  </h3>
                </div>
                <p className="text-sm text-gray-600">
                  Duis dapibus aliquam mi, et euismod scelerisque ut. Vivamus
                  elit quis urna adipiscing ...
                </p>
              </div>
              {/* Fonctionnalité 2 */}
              <div className="border bg-slate-50 rounded-lg p-6">
                <div className="flex flex-col mb-4">
                  <span className="text-green-600 text-3xl">
                    <img src={user_star} className="w-8 h-8" alt="user" />
                  </span>
                  <h3 className="pt-2 font-semibold text-md">
                    Des agents qualifiés
                  </h3>
                </div>
                <p className="text-sm text-gray-600">
                  Duis dapibus aliquam mi, et euismod scelerisque ut. Vivamus
                  elit quis urna adipiscing ...
                </p>
              </div>
              {/* Fonctionnalité 3 */}
              <div className="border bg-slate-50 rounded-lg p-6">
                <div className="flex flex-col mb-4">
                  <span className="text-green-600 text-3xl">
                    <img src={money} className="w-9 h-9" alt="argent" />
                  </span>
                  <h3 className="pt-2 font-semibold text-md">
                    Prix abordables
                  </h3>
                </div>
                <p className="text-sm text-gray-600">
                  Duis dapibus aliquam mi, et euismod scelerisque ut. Vivamus
                  elit quis urna adipiscing ...
                </p>
              </div>
              {/* Fonctionnalité 4 */}
              <div className="border bg-slate-50 rounded-lg p-6">
                <div className="flex flex-col mb-4">
                  <span className="text-green-600 text-3xl">
                    <img src={star} className="w-9 h-9" alt="etoile" />
                  </span>
                  <h3 className="pt-2 font-semibold text-md">
                    Meilleures offres
                  </h3>
                </div>
                <p className="text-sm text-gray-600">
                  Duis dapibus aliquam mi, et euismod scelerisque ut. Vivamus
                  elit quis urna adipiscing ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionHistorique;
