"use client";

type QuantityCounterProps = {
  value: number;
  onChange: (value: number) => void;
  unit?: string;
};

export default function QuantityCounter({
  value,
  onChange,
  unit,
}: QuantityCounterProps) {
  return (
    <div className="flex-1 md:flex-none xl:flex-1 border border-[#5D9732]
      rounded-lg flex items-center justify-between
      py-[19px] px-[30px] xl:px-4 2xl:px-[30px]"
    >
      <button
        onClick={() => onChange(Math.max(1, value - 1))}
        className="text-[#5D9732] text-lg leading-5 font-medium"
      >
        -
      </button>

      <div className="text-[#5D9732] text-lg font-medium leading-5 flex-1 text-center">
        {value}
        {unit && <span className="ml-1">{unit}</span>}
      </div>

      <button
        onClick={() => onChange(value + 1)}
        className="text-[#5D9732] text-lg leading-5 font-medium"
      >
        +
      </button>
    </div>
  );
}
