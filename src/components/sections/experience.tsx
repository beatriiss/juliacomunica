// src/components/sections/experience.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    id: 1,
    role: "Editor-Chefe",
    company: "Nome do Jornal",
    period: "2022 - Presente",
    description:
      "Responsável pela linha editorial, gestão de equipe e produção de conteúdo especial.",
  },
  {
    id: 2,
    role: "Repórter Investigativo",
    company: "Revista de Notícias",
    period: "2019 - 2022",
    description:
      "Conduzi investigações aprofundadas sobre temas de interesse público, com foco em transparência e accountability.",
  },
  {
    id: 3,
    role: "Jornalista Freelancer",
    company: "Diversos Veículos",
    period: "2017 - 2019",
    description:
      "Produzi conteúdo para diferentes plataformas, desde reportagens escritas até produções audiovisuais.",
  },
  {
    id: 4,
    role: "Assistente de Redação",
    company: "Portal de Notícias",
    period: "2015 - 2017",
    description:
      "Apoio na produção de conteúdo diário, edição de textos e coordenação com equipes multimídia.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text">Experiência Profissional</h2>
          <div className="mt-2 h-1 w-24 bg-primary-500 mx-auto"></div>
          <p className="mt-4 text-lg text-secondary-500 max-w-2xl mx-auto">
            Minha trajetória profissional no campo do jornalismo.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {experiences.map((exp) => (
            <Card key={exp.id} className="relative overflow-hidden border-l-4 border-primary-500">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl font-semibold">{exp.role}</CardTitle>
                    <CardDescription className="text-primary-600 font-medium">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="mt-2 md:mt-0 text-sm font-medium text-secondary-500">
                    {exp.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-secondary-700">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}