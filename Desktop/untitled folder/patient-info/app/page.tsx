"use client";

import { useState } from "react";
import Image from "next/image";
import { BsPlusLg, BsPeopleFill, BsClipboardData } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";

export default function HealthDashboard() {
  const [activeTab, setActiveTab] = useState("clinical");

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="flex flex-col items-center gap-6 p-4 border-r h-screen w-16 bg-white">
        <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
          <BsPlusLg size={24} />
        </button>
        <button className="text-gray-400 hover:text-blue-600">
          <BsPeopleFill size={24} />
        </button>
        <button className="text-gray-400 hover:text-blue-600">
          <BsClipboardData size={24} />
        </button>
        <button className="mt-auto text-gray-400 hover:text-blue-600">
          <FiSettings size={24} />
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-white border-b">
          <input
            type="text"
            placeholder="Busqueda global.."
            className="flex-grow max-w-md border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="ml-4 relative">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-9.33-5"
              />
            </svg>
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"></span>
          </button>

          <div className="flex items-center ml-6 space-x-3">
            <Image
              src="/franco.jpg"
              alt="Franco Rodriguez"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-900">Franco Rodriguez</p>
              <p className="text-xs text-gray-500">Doctor</p>
            </div>
          </div>
        </header>

        {/* Main area scrollable */}
        <main className="flex-grow overflow-auto p-6">
          <button className="flex items-center gap-2 text-sm text-gray-700 mb-6">
            ← Información paciente
          </button>

          {/* Patient Summary */}
          <section className="bg-white p-6 rounded-xl shadow-md flex gap-8 max-w-5xl mx-auto mb-8">
            <div>
              <Image
                src="/franco_maldonado.jpg"
                alt="Franco Maldonado Park"
                width={96}
                height={96}
                className="rounded-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-6 text-sm text-gray-600">
              <div>
                <p className="text-xs uppercase">Nombre paciente</p>
                <p className="font-semibold text-gray-900">Franco Maldonado Park</p>
                <p className="text-xs uppercase mt-3">Email</p>
                <p className="font-semibold text-gray-900">franco.malsd@gmail.com</p>
              </div>
              <div>
                <p className="text-xs uppercase">Edad</p>
                <p className="font-semibold text-gray-900">25 años</p>
                <p className="text-xs uppercase mt-3">Celular</p>
                <p className="font-semibold text-gray-900">+51936248087</p>
              </div>
              <div>
                <p className="text-xs uppercase">Estado</p>
                <span className="inline-block px-2 py-1 text-xs rounded bg-blue-200 text-blue-700 font-semibold">
                  Atendido
                </span>
                <p className="text-xs uppercase mt-3">DNI</p>
                <p className="font-semibold text-gray-900">72458785</p>
              </div>
              <div>
                <p className="text-xs uppercase">Sexo</p>
                <p className="font-semibold text-gray-900">Masculino</p>
                <p className="text-xs uppercase mt-3">Estado civil</p>
                <p className="font-semibold text-gray-900">Soltero</p>
              </div>
            </div>
          </section>

          {/* Vitals */}
          <section className="bg-white p-6 rounded-xl shadow-md max-w-5xl mx-auto mb-8 grid grid-cols-4 text-sm text-gray-700 border border-gray-100">
            <div>
              <p className="font-bold text-xs uppercase">Peso</p>
              <p>79 Kg</p>
            </div>
            <div>
              <p className="font-bold text-xs uppercase">Altura</p>
              <p>1.75 m</p>
            </div>
            <div>
              <p className="font-bold text-xs uppercase">Alergias</p>
              <p className="font-semibold">Ninguno</p>
            </div>
            <div>
              <p className="font-bold text-xs uppercase">Pre existencias Medicas</p>
              <p className="font-semibold">Migraña, Asmatico</p>
            </div>
          </section>

          {/* Clinical Summary Tabs */}
          <section className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6">
            <div className="flex border-b border-gray-200 text-sm text-gray-500 font-semibold">
              <button
                onClick={() => setActiveTab("clinical")}
                className={`px-4 py-2 -mb-px border-b-2 ${
                  activeTab === "clinical" ? "border-blue-600 text-blue-600" : "border-transparent"
                }`}
              >
                Resumen clínico
              </button>
              <button
                onClick={() => setActiveTab("preconsult")}
                className={`px-4 py-2 -mb-px border-b-2 ${
                  activeTab === "preconsult" ? "border-blue-600 text-blue-600" : "border-transparent"
                }`}
              >
                Historial de Pre consultas
              </button>
            </div>

            <div className="mt-4 text-xs text-gray-600">
              {activeTab === "clinical"
                ? "Resumen clínico de las últimas 3 pre-consultas."
                : "Historial de Pre consultas content here."}
            </div>

            {activeTab === "clinical" && (
              <div className="mt-6 grid grid-cols-3 gap-6 text-xs text-gray-700">
                {/* Antecedentes */}
                <div className="border-r border-gray-200 pr-4">
                  <h3 className="font-semibold mb-2">Antecedentes</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Diabetes tipo 2 diagnosticada en 2020</li>
                    <li>Asma leve desde la infancia</li>
                    <li>Cirugía de menisco (2022)</li>
                    <li>Alérgico a mariscos (Reacción: dificultad respiratoria)</li>
                    <li>Fumador social, no consume alcohol</li>
                  </ul>

                  <h4 className="mt-4 font-semibold">Antecedentes familiares</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Padre con hipertensión y cáncer de próstata</li>
                    <li>Hermano con asma</li>
                  </ul>
                </div>

                {/* Medicación Actual */}
                <div className="border-r border-gray-200 pr-4">
                  <h3 className="font-semibold mb-2">Medicacion Actual</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Metformina 850mg, 1 tableta cada 12h</li>
                    <li>Salbutamol inhalador, 1 puff en caso de crisis</li>
                    <li>Loperamida 2mg, solo si diarrea</li>
                  </ul>

                  <h4 className="mt-4 font-semibold">Notas/Alertas Clinicas</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Alergia SEVERA a mariscos. Llevar siempre identificación de alergia.</li>
                    <li>Priorizar control glucémico.</li>
                    <li>Chequear función pulmonar en controles anuales.</li>
                  </ul>
                </div>

                {/* Resultados recientes */}
                <div>
                  <h3 className="font-semibold mb-2">Resultados recientes</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Hemoglobina glicosilada (HbA1c): 6.81% (20/06/2025)</li>
                    <li>Prueba de función pulmonar: leve obstrucción (12/05/2025)</li>
                    <li>Perfil lipídico: Colesterol total 185mg/dL (20/06/2025)</li>
                    <li>Electrocardiograma: Normal (15/06/2025)</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "preconsult" && (
              <div className="mt-6 text-center text-gray-400">Historial de Pre consultas content here.</div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
