const IncreaseDecrease = ({
  quantity,
  onDecrease,
  onIncrease,
}: {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}) => {
  return (
    <div className="flex justify-between gap-2 items-center">
      <button
        onClick={onIncrease}
        className="px-2 rounded border flex justify-center items-center bg-dark-purple text-light-purple"
      >
        +
      </button>
      <span className="text-dark-purple">{quantity}</span>
      <button
        onClick={onDecrease}
        className="px-2 rounded border flex justify-center items-center bg-light-purple text-dark-purple"
      >
        -
      </button>
    </div>
  );
};

export default IncreaseDecrease;
