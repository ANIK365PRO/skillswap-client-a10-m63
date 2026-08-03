const StatCard = ({
  title,
  value,
  icon,
  color = "bg-primary",
}) => {
  return (
    <div
      className="
      rounded-3xl
      border-border
      bg-surface
      p-6
      shadow-md
      transition-all
      hover:-translate-y-1
      hover:shadow-xl
      "
    >
      <div className="flex items-center justify-between ">
        <div>
          <p className="text-sm text-muted">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-foreground">
            {value}
          </h2>
        </div>

        <div
          className={`
            flex h-14 w-14 items-center justify-center
            rounded-2xl
            ${color}
            text-white
          `}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;