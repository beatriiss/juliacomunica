// src/components/sections/hero.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <div className="text-center lg:text-left md:max-w-2xl md:mx-auto lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight text-text sm:text-5xl md:text-6xl">
                <span className="block">Olá, eu sou</span>
                <span className="block text-primary-600 mt-2">Júlia Carvalho</span>
              </h1>
              <p className="mt-6 text-lg text-secondary-500">
                Jornalista apaixonado por contar histórias e transformar
                informação em conhecimento. Especialista em reportagens
                investigativas e narrativas multimídia.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary-600 hover:bg-primary-700"
                >
                  <Link href="#portfolio">Ver Portfólio</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary-600 text-primary-600 hover:bg-primary-50"
                >
                  <Link href="#contact">Entre em Contato</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="aspect-w-5 aspect-h-6 rounded-lg bg-gray-100 overflow-hidden shadow-lg">
              {/* Você pode adicionar sua imagem de perfil aqui */}
              <div className="h-full w-full bg-gradient-to-br from-primary-400 to-primary-600"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}