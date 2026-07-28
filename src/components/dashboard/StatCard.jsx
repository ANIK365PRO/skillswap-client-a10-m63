const StatCard = ({ title, value }) => {
  return (
    <div
      className="
      rounded-3xl
      border border-[var(--border)]
      bg-[var(--surface)]
      p-6
      shadow-sm
      "
    >
      <p className="text-sm text-[var(--muted)]">
        {title} 
      </p>

      <h2 className="mt-3 text-3xl font-bold">
        {value}
      </h2>
    </div>
  );
};

export default StatCard;