import { useState } from "react";
import { loadInstalledApps } from "../utils/localStorage";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState(() => loadInstalledApps());
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
        <label className="input">
          <input
            // onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Products"
          />
        </label>
      </div>

      <div className="space-y-3 mt-5">
        {installedApps.map((app) => (
          <div className="bg-base-100 shadow-sm p-4 flex justify-between items-center rounded-lg">
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

            <button className="btn bg-emerald-400 !text-white mt-3">
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
