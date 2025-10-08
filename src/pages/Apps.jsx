import useApps from "../hooks/useApps";
import AppCard from "../components/AppCard";
import SkeletonLoading from "../components/SkeletonLoading";
import { useState } from "react";

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const term = search.trim("").toLocaleLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;

  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Our All Applications</h1>
        <p className="!text-slate-600 text-sm max-w-3xl mx-auto">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex justify-between items-center mt-5">
        <h2 className="font-bold text-xl">({searchedApps.length}) Apps Found</h2>
        <label className="input">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Products"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
        {loading ? (
          <SkeletonLoading />
        ) : (
          searchedApps.map((app) => <AppCard key={app.id} app={app} />)
        )}
      </div>
    </div>
  );
};

export default Apps;
