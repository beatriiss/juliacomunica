import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Video, Newspaper } from "lucide-react";


// Você pode substituir esses exemplos com seus trabalhos reais
const portfolioItems = [
  {
    id: 1,
    title: "Reportagem Investigativa",
    description: "Uma investigação profunda sobre corrupção na administração pública.",
    category: "Reportagem",
    date: "Maio 2023",
    driveLink: "https://drive.google.com/file/d/example1",
    icon: <FileText className="h-6 w-6" />,
  },
  {
    id: 2,
    title: "Documentário Social",
    description: "Documentário sobre as condições de vida em comunidades vulneráveis.",
    category: "Vídeo",
    date: "Outubro 2023",
    driveLink: "https://drive.google.com/file/d/example2",
    icon: <Video className="h-6 w-6" />,
  },
  {
    id: 3,
    title: "Série de Artigos Culturais",
    description: "Cobertura abrangente sobre o cenário cultural regional.",
    category: "Artigos",
    date: "Janeiro 2024",
    driveLink: "https://drive.google.com/file/d/example3",
    icon: <Newspaper className="h-6 w-6" />,
  },
  {
    id: 4,
    title: "Entrevista Exclusiva",
    description: "Entrevista com personalidade relevante sobre temas de interesse público.",
    category: "Entrevista",
    date: "Março 2024",
    driveLink: "https://drive.google.com/file/d/example4",
    icon: <FileText className="h-6 w-6" />,
  },
  {
    id: 5,
    title: "Reportagem Especial",
    description: "Cobertura especial sobre evento de grande impacto social.",
    category: "Reportagem",
    date: "Abril 2024",
    driveLink: "https://drive.google.com/file/d/example5",
    icon: <Newspaper className="h-6 w-6" />,
  },
  {
    id: 6,
    title: "Podcast Semanal",
    description: "Série de podcasts sobre temas atuais de relevância social e política.",
    category: "Áudio",
    date: "Abril 2024",
    driveLink: "https://drive.google.com/file/d/example6",
    icon: <Video className="h-6 w-6" />,
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text">Meu Portfólio</h2>
          <div className="mt-2 h-1 w-24 bg-primary-500 mx-auto"></div>
          <p className="mt-4 text-lg text-secondary-500 max-w-2xl mx-auto">
            Uma seleção dos meus melhores trabalhos jornalísticos em diferentes formatos e temas.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="p-2 bg-primary-100 rounded-md text-primary-600">
                    {item.icon}
                  </div>
                  <div className="text-sm text-secondary-500">{item.date}</div>
                </div>
                <CardTitle className="mt-4 text-xl">{item.title}</CardTitle>
                <CardDescription className="text-secondary-600">
                  {item.category}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-secondary-700">{item.description}</p>
              </CardContent>
              <CardFooter>
              <Button
  asChild
  variant="outline"
  className="w-full flex items-center gap-2"
>
  <a
    href={item.driveLink}
    target="_blank"
    rel="noopener noreferrer"
  >
    <ExternalLink className="h-4 w-4" />
    <span>Ver no Google Drive</span>
  </a>
</Button>

              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}