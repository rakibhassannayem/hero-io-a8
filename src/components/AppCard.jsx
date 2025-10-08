import { Download, Star } from "lucide-react";

const AppCard = ({ app }) => {
  const { image, title, description, downloads, ratingAvg } = app;
  return (
    <div className="card bg-base-100 shadow-sm pt-4">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body justify-between">
        <h2 className="text-lg font-medium">
          <span className="font-bold text-xl text-color">{title}:</span> {description}
        </h2>
        <div className="card-actions justify-between">
          <div className="badge rounded-md bg-emerald-50 !text-emerald-500 font-medium flex">
            <Download size={16} className="stroke-emerald-500" />
            {downloads}
          </div>
          <div className="badge rounded-md bg-orange-50 !text-orange-500 font-medium flex"><Star size={16} className="stroke-orange-500" />{ratingAvg}</div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
