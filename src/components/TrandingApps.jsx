import useApps from "../hooks/useApps";
import AppCard from "../components/AppCard";
import SkeletonLoading from "./SkeletonLoading";
import { Link } from "react-router";

const TrandingApps = () => {
  const { apps, loading } = useApps();
  const trandingApps = apps.slice(0, 8);
  return (
    <div>
      <div className="text-center mt-10 mb-8">
        <h1 className="text-4xl font-bold">Trending Apps</h1>
        <p className="!text-slate-600 max-w-3xl mx-auto">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
        {loading ? (
          <SkeletonLoading />
        ) : (
          trandingApps.map((app) => <AppCard key={app.id} app={app} />)
        )}
      </div>
      <div className="flex justify-center mt-8 mb-10">
        <Link to={"/apps"} className="btn bg-color !text-white">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default TrandingApps;
