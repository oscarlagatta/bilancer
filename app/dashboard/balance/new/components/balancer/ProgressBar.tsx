type Props = {
  valueBalancing: string;
  progress: number;
  min: number;
  max: number;
};

export function ProgressBar({ valueBalancing, progress, min, max }: Props) {
  const value = progress;
  const minValue = min;
  const maxValue = max;
  const percentage = ((value - minValue) / (maxValue - minValue)) * 100;

  let barColor = '';
  if (value < minValue) {
    barColor = 'bg-yellow-500'; // Giallo se il valore è inferiore a minValue
  } else if (value > maxValue) {
    barColor = 'bg-red-500'; // Rosso se il valore è superiore a maxValue
  } else {
    barColor = 'bg-green-500'; // Verde se il valore è tra minValue e maxValue
  }

  return (
    <div className="flex justify-center">
      <div className="flex justify-end pb-1">
        <p className="mr-2">{valueBalancing}</p>
        <div className="w-[190px] md:w-[350px] h-4 mt-2 bg-gray-200 rounded-md overflow-hidden ">
          <div
            className={`h-full ${barColor} transition-all duration-500 text-center text-[11px] text-align-center`}
            style={{
              width: value > maxValue ? '100%' : `${percentage}%`,
            }}
          >
            <span className="font-bold">{value}</span> -- Min {minValue} - Max{' '}
            {maxValue}
          </div>
        </div>

        {/* <p className="ml-2">
        Min {minValue} - Max {maxValue}
      </p> */}
      </div>
    </div>
  );
}
