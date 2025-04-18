type RoadmapCardProps = {
  title: string;
  description: string;
  step: number;
};

const RoadmapCard = ({ title, description, step }: RoadmapCardProps) => {
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

export default RoadmapCard;