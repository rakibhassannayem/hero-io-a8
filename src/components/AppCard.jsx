import { Download, Star } from "lucide-react";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { image, title, downloads, ratingAvg } = app;
  return (
    <Link to={'/appDetails/1'} className="card bg-base-100 shadow-sm pt-4 cursor-pointer hover:scale-105 transition">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body justify-between">
        <h2 className="font-bold text-xl text-color">{title}</h2>
        <div className="card-actions justify-between">
          <div className="badge rounded-md bg-emerald-50 !text-emerald-500 font-medium flex">
            <Download size={16} className="stroke-emerald-500" />
            {downloads}
          </div>
          <div className="badge rounded-md bg-orange-50 !text-orange-500 font-medium flex">
            <Star size={16} className="stroke-orange-500" />
            {ratingAvg}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
