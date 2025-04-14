import React from "react";

type RoadmapItem = {
  title: string;
  description: string;
};

const Roadmap = ({ items }: { items: RoadmapItem[] }) => {
  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Título
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <RoadmapCard
            key={index}
            title={item.title}
            description={item.description}
            step={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

const RoadmapCard = ({
  title,
  description,
  step,
}: RoadmapItem & { step: number }) => {
  // Iconos de texto simples (puedes personalizar)
  const stepIcons = ["📋", "✨", "🎨", "🚀"];

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg hover:bg-white/20 transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white font-bold mr-4">
          {stepIcons[step - 1]} {/* Ícono basado en el paso */}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-slate-300">{description}</p>
    </div>
  );
};

export default Roadmap;