import { useParams } from "react-router";
import useApps from "../hooks/useApps";
import SkeletonLoading from "../components/SkeletonLoading";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const app = apps.find((a) => a.id === Number(id));

  if (loading) return <SkeletonLoading />;

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
  } = app;

  const handleInstall =(id)=>{}

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
              <img className="w-20" src="/icon-downloads.png" alt="" />
              <p className="text-secondary text-sm font-light">Downloads</p>
              <span className="text-3xl font-bold">{downloads}</span>
            </div>

            <div className="flex flex-col justify-between gap-3">
              <img className="w-20" src="/icon-ratings.png" alt="" />
              <p className="text-secondary text-sm font-light">
                Average Ratings
              </p>
              <span className="text-3xl font-bold">{ratingAvg}</span>
            </div>

            <div className="flex flex-col justify-between gap-3">
              <img className="w-20" src="/icon-review.png" alt="" />
              <p className="text-secondary text-sm font-light">Total Reviews</p>
              <span className="text-3xl font-bold">{reviews}</span>
            </div>
          </div>

          <button onClick={()=>handleInstall(id)} className="btn bg-emerald-400 !text-white mt-3">
            Install Now ({size} MB)
          </button>
        </div>
      </div>

      <div className="divider"></div>
      <h1>Recharts</h1>
      <div className="divider"></div>
      <div>
        <h2 className="text-xl font-semibold my-4">Description</h2>
        <p className="text-secondary font-light">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
