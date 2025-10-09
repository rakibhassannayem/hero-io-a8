import useApps from "../hooks/useApps";
import AppCard from "../components/AppCard";
import { useEffect, useState } from "react";
import LoadingAnimation from "../components/LoadingAnimation";
import NotFound from "../components/NotFound";

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setSearchLoading(true);

    const timer = setTimeout(() => {
      setSearchTerm(search.trim("").toLowerCase());
      setSearchLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  const searchedApps = searchTerm
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(searchTerm))
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
        <h2 className="font-bold text-xl">
          ({searchedApps.length}) Apps Found
        </h2>
        <label className="input">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Products"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
        {loading || searchLoading ? (
          <div className="col-span-full">
            <LoadingAnimation />
          </div>
        ) : searchedApps.length ? (
          searchedApps.map((app) => <AppCard key={app.id} app={app} />)
        ) : (
          <div className="col-span-full">
            <NotFound />
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
