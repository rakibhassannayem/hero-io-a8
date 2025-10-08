const AppCard = ({ app }) => {
  const { image, title, description, downloads, ratings } = app;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img className="" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}: {description}
        </h2>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{downloads}</div>
          <div className="badge badge-outline">{ratings.count}</div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
