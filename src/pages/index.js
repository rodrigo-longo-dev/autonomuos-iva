import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [cantidad, setCantidad] = useState(0);
  const [percentage, setPercentage] = useState(21);
  const [baseTotal, setBaseTotal] = useState(0);
  const [ivaTotal, setIvaTotal] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [modoCalculo, setModoCalculo] = useState("extra"); // 'extra' o 'incluido'

  const calcularResultado = (c, p, modo) => {
    const cantidadNum = parseFloat(c) || 0;
    const porcentajeNum = parseFloat(p) || 0;

    let iva, total, base;

    if (modo === "extra") {
      // IVA añadido al valor base
      base = cantidadNum;
      iva = cantidadNum * (porcentajeNum / 100);
      total = cantidadNum + iva;
    } else if (modo === "incluido") {
      // IVA ya incluido en el valor base
      iva = cantidadNum - cantidadNum / (1 + porcentajeNum / 100);
      total = cantidadNum;
      base = total - iva;
    }

    setBaseTotal(base.toFixed(2)); // Mostrar con 2 decimales
    setIvaTotal(iva.toFixed(2)); // Mostrar con 2 decimales
    setResultado(total.toFixed(2)); // Mostrar con 2 decimales
  };

  return (
    <>
      <Head>
        <title>Y(AUTONOM)UOS</title>
      </Head>
      <section className='page'>
        <h1>
          CALC. IVA <span>Y</span>AUTONOM<span>UOS</span>
        </h1>
        <article className='page_box'>
          <p>Cantidad</p>
          <input
            className='input'
            value={cantidad}
            onChange={(e) => {
              const value = e.target.value;
              setCantidad(value);
              calcularResultado(value, percentage, modoCalculo);
            }}
            type='number'
            placeholder='Ingrese la cantidad'
          />
          <div className='space' />
          <p>Tipo de IVA (%)</p>
          <input
            className='input'
            value={percentage}
            onChange={(e) => {
              const value = e.target.value;
              setPercentage(value);
              calcularResultado(cantidad, value, modoCalculo);
            }}
            type='number'
            placeholder='Ingrese el porcentaje'
          />

          <div className='page_results'>
            <p>Modo de Cálculo:</p>
            <div
              onClick={(e) => {
                setModoCalculo("extra");
                calcularResultado(cantidad, percentage, "extra");
              }}
              className={`radio ${
                modoCalculo === "extra" ? " radio--active" : ""
              }`}
            >
              IVA extra al valor base
            </div>
            <div
              onClick={(e) => {
                setModoCalculo("incluido");
                calcularResultado(cantidad, percentage, "incluido");
              }}
              className={`radio ${
                modoCalculo === "incluido" ? " radio--active" : ""
              }`}
            >
              IVA incluido en el valor
            </div>
          </div>

          <div className='page_results'>
            <div className='result'>
              <p>Base:</p> <p className='span'>{baseTotal} €</p>
            </div>
            <div className='result'>
              <p>IVA:</p> <p className='span'>{ivaTotal} €</p>
            </div>
            <div className='result'>
              <p>Total:</p> <p className='span'>{resultado} €</p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

{
  /* <div className='page_radio'>
            <p>Modo de Cálculo:</p>
            <label>
              <input
                type='radio'
                name='modoCalculo'
                value='extra'
                checked={modoCalculo === "extra"}
                onChange={(e) => {
                  setModoCalculo(e.target.value);
                  calcularResultado(cantidad, percentage, e.target.value);
                }}
              />
              IVA extra al valor base
            </label>
            <label>
              <input
                type='radio'
                name='modoCalculo'
                value='incluido'
                checked={modoCalculo === "incluido"}
                onChange={(e) => {
                  setModoCalculo(e.target.value);
                  calcularResultado(cantidad, percentage, e.target.value);
                }}
              />
              IVA incluido en el valor
            </label>
          </div> */
}
