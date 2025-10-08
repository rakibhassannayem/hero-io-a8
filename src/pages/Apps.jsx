import React from "react";
import useApps from "../hooks/useApps";
import AppCard from "../components/AppCard";

const Apps = () => {
  const { apps, loading, error } = useApps();
  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Our All Applications</h1>
        <p className="!text-slate-600 text-sm max-w-3xl mx-auto">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex justify-between mt-5">
        <h2 className="font-bold text-xl">({apps.length}) Apps Found</h2>
        <input className="border" type="text" placeholder="search" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default Apps;
