// src/components/sections/about.tsx
export function About() {
    return (
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text">Sobre Mim</h2>
            <div className="mt-2 h-1 w-24 bg-primary-500 mx-auto"></div>
          </div>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="aspect-w-4 aspect-h-5 rounded-lg bg-gray-100 overflow-hidden shadow-lg">
                {/* Você pode adicionar outra imagem aqui */}
                <div className="h-full w-full bg-gradient-to-br from-accent-400 to-accent-600"></div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:col-span-7">
              <div className="prose prose-lg max-w-none">
                <p>
                  Sou jornalista com mais de X anos de experiência cobrindo uma
                  ampla gama de tópicos, desde política e economia até cultura e
                  tecnologia. Minha paixão é transformar informações complexas em
                  narrativas envolventes e acessíveis.
                </p>
                <p className="mt-4">
                  Formado em Jornalismo pela Universidade X, complementei minha
                  formação com especializações em jornalismo digital e produção
                  multimídia. Tenho experiência em redações tradicionais e digitais,
                  além de projetos independentes.
                </p>
                <p className="mt-4">
                  Minha abordagem combina rigor jornalístico com narrativas
                  criativas, sempre focando na precisão das informações e no
                  impacto social das histórias que conto.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                    Jornalismo Investigativo
                  </span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                    Narrativas Multimídia
                  </span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                    Reportagem de Campo
                  </span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                    Produção de Documentários
                  </span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                    Entrevistas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }