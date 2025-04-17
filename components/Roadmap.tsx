import React from "react";

type RoadmapItem = {
  title: string;
  description: string;
};

const Roadmap = ({ items }: { items: RoadmapItem[] }) => {
  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Roadmap
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <RoadmapCard
            title={item.title}
            key={index}
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
  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white font-bold mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
};

export default Roadmap;