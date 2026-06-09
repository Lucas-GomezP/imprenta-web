import { useEffect, useState } from "react";

export default function CalculadoraImpresion({ precios, anillados }) {
  const [color, setColor] = useState("bn");
  const [modo, setModo] = useState("simple");
  const [cantidad, setCantidad] = useState(1);
  const [anillado, setAnillado] = useState(false);
  // const precioAnillado = anillado
  // ? anillados.find(a => cantidad <= a.maxHojas)?.precio ?? "No disponible"
  // : 0;
  // const precioImpresion = precios[color][modo] * cantidad;
  const hojas =
    modo === "simple"
      ? Number(cantidad)
      : Math.ceil(Number(cantidad) / 2);
  const precioImpresion =
    modo === "simple"
      ? precios[color].simple * hojas
      : precios[color].doble * hojas;
      
  const precioAnillado = anillado
  ? anillados.find(a => hojas <= a.maxHojas)?.precio ?? 0
  : 0;
      
  const total = precioImpresion + precioAnillado;

  return (
    <article className="mx-auto my-16 max-w-4xl px-4">
      <div className="overflow-hidden rounded-xl border bg-white shadow-md">
        <div className="bg-linear-to-b from-green-300 to-green-200 px-6 py-8">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-green-700">
            IMPRESIONES A4
          </p>

          <h2 className="mt-2 text-center text-3xl font-bold">
            Calculá tu presupuesto
          </h2>

          <p className="mt-2 text-center text-gray-700">
            Elegí las opciones y obtené un precio estimado al instante.
          </p>
        </div>

        <div className="flex flex-col gap-6 p-6">
          <div className="flex flex-col gap-2">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="color"
            >
              Color
            </label>

            <select
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="rounded-lg border border-gray-300 bg-white px-4 py-3 transition focus:border-green-500 focus:outline-none"
              name="color"
              id="color"
            >
              <option value="bn">Blanco y negro</option>
              <option value="color">Color</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="modo"
            >
              Modo
            </label>

            <select
              value={modo}
              onChange={(e) => setModo(e.target.value)}
              className="rounded-lg border border-gray-300 bg-white px-4 py-3 transition focus:border-green-500 focus:outline-none"
              name="modo"
              id="modo"
            >
              <option value="simple">Simple Faz</option>
              <option value="doble">Doble Faz</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="cantidad"
            >
              Cantidad
            </label>

            <input
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              className="rounded-lg border border-gray-300 bg-white px-4 py-3 transition focus:border-green-500 focus:outline-none"
              type="number"
              name="cantidad"
              id="cantidad"
            />
            <p className="text-sm text-gray-500">
                Hojas físicas: {hojas}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={anillado}
                onChange={(e) => setAnillado(e.target.checked)}
              />

              <span className="text-sm font-medium text-gray-700">
                Agregar anillado
              </span>
            </label>
          </div>

          <div className="rounded-xl bg-green-50 p-6">
            <p className="text-sm text-gray-600">
              Impresión
            </p>

            <p className="font-semibold">
              ${precioImpresion}
            </p>

            {
              anillado && (
                <>
                  <p className="mt-3 text-sm text-gray-600">
                    Anillado
                  </p>

                  {precioAnillado === 0 ? (
                    <p className="font-semibold">
                      No disponible
                    </p>
                  ) : (
                    <p className="font-semibold">
                      ${precioAnillado}
                    </p>
                  )}
                </>
              )
            }

            <hr className="my-4" />

            <p className="text-sm text-gray-600">
              Total
            </p>

            <p className="mt-2 text-4xl font-extrabold text-green-700">
              ${total}
            </p>
          </div>

          

          <button
            className="
              rounded-lg
              bg-amber-300
              px-6
              py-3
              font-semibold
              transition
              hover:bg-amber-400
            "
          >
            Hacé tu pedido por WhatsApp
          </button>
        </div>
      </div>
    </article>
  );
}