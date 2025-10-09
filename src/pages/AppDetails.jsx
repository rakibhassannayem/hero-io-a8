import { useParams } from "react-router";
import useApps from "../hooks/useApps";
import { addToInstallation, loadInstalledApps } from "../utils/localStorage";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import { toast } from "react-toastify";
import LoadingAnimation from "../components/LoadingAnimation";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const installedApps = loadInstalledApps();
  
  const app = apps.find((a) => a.id === Number(id));
  const isInstalled = installedApps.some((a) => a.id === Number(id));
  const [isDisabled, setIsDisabled] = useState(isInstalled);

  if (loading) return <LoadingAnimation />;

  const {
    image,
    title,
    tagline,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    description,
    ratings,
  } = app;

  const handleInstall = (app) => {
    setIsDisabled(true);
    addToInstallation(app);
    toast.success("Installing...");
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <div>
            <h1 className="font-bold text-2xl">
              {title}: {tagline}
            </h1>
            <p className="text-secondary font-light">
              Developed by{" "}
              <span className="text-color font-semibold">{companyName}</span>
            </p>
          </div>

          <div className="divider"></div>

          <div className="flex gap-10">
            <div className="flex flex-col justify-between gap-3">
              <img className="w-12" src="/icon-downloads.png" alt="" />
              <p className="text-secondary text-sm font-light">Downloads</p>
              <span className="text-3xl font-bold">{downloads}</span>
            </div>

            <div className="flex flex-col justify-between gap-3">
              <img className="w-12" src="/icon-ratings.png" alt="" />
              <p className="text-secondary text-sm font-light">
                Average Ratings
              </p>
              <span className="text-3xl font-bold">{ratingAvg}</span>
            </div>

            <div className="flex flex-col justify-between gap-3">
              <img className="w-12" src="/icon-review.png" alt="" />
              <p className="text-secondary text-sm font-light">Total Reviews</p>
              <span className="text-3xl font-bold">{reviews}</span>
            </div>
          </div>

          <button
            onClick={() => handleInstall(app)}
            disabled={isDisabled}
            className="btn bg-emerald-400 !text-white mt-3"
          >
            {isDisabled ? "Installed" : `Install Now (${size}) MB`}
          </button>
        </div>
      </div>

      <div className="divider"></div>

      <h2 className="text-xl font-semibold">Ratings</h2>
      <div className="rounded-xl my-4">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={ratings} layout="vertical">
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" reversed /> <Tooltip />
            <Bar dataKey="count" fill="#FF8811" barSize={28} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="divider"></div>

      <div>
        <h2 className="text-xl font-semibold my-4">Description</h2>
        <p className="text-secondary font-light">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
