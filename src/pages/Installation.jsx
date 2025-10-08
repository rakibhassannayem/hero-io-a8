import { useState } from "react";
import {
  loadInstalledApps,
  removeFromInstallation,
} from "../utils/localStorage";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState(() => loadInstalledApps());
  const [sortOrder, setSortOrder] = useState("none");

  const sortedApp = () => {
    if (sortOrder === "asc") {
      return [...installedApps].sort(
        (a, b) => parseFloat(a.downloads) - parseFloat(b.downloads)
      );
    } else if (sortOrder === "desc") {
      return [...installedApps].sort(
        (a, b) => parseFloat(b.downloads) - parseFloat(a.downloads)
      );
    } else {
      return installedApps;
    }
  };

  const handleRemove = (id) => {
    removeFromInstallation(id);
    setInstalledApps((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Your Installed Apps</h1>
        <p className="!text-slate-600 text-sm max-w-3xl mx-auto">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between items-center mt-5">
        <h2 className="font-bold text-xl">{installedApps.length} Apps Found</h2>
        <label className="form-control w-full max-w-xs">
          <select
            className="select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort By Downloads</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </label>
      </div>

      <div className="space-y-3 mt-5">
        {sortedApp().map((app) => (
          <div
            key={app.id}
            className="bg-base-100 shadow-sm p-4 flex justify-between items-center rounded-lg"
          >
            <div className="flex gap-3 items-center">
              <figure className="w-20">
                <img src={app.image} alt="Movie" />
              </figure>
              <div className="space-y-2">
                <h2 className="font-medium">
                  {app.title}:{app.tagline}
                </h2>
                <div className="flex gap-4">
                  <div className="flex justify-between items-center gap-1">
                    <img className="w-4 h-4" src="/icon-downloads.png" alt="" />
                    <span className="!text-emerald-500">{app.downloads}</span>
                  </div>

                  <div className="flex justify-between items-center gap-1">
                    <img className="w-4 h-4" src="/icon-ratings.png" alt="" />
                    <span className="!text-orange-500">{app.ratingAvg}</span>
                  </div>

                  <span className="text-secondary">{app.size} MB</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleRemove(app.id)}
              className="btn bg-emerald-400 !text-white mt-3"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
