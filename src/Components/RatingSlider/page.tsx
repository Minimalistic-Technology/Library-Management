import React, { useState, useCallback, useRef } from "react";
import { Star } from "lucide-react";

interface RatingSliderProps {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
}

const RatingSlider: React.FC<RatingSliderProps> = ({
  min = 1,
  max = 5,
  step = 0.5,
  value,
  onChange,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const calculateValue = useCallback(
    (clientX: number): number => {
      if (!sliderRef.current) return min;

      const rect = sliderRef.current.getBoundingClientRect();
      const percentage = Math.max(
        0,
        Math.min(1, (clientX - rect.left) / rect.width)
      );
      const rawValue = min + percentage * (max - min);

      // Round to nearest step
      const steppedValue = Math.round(rawValue / step) * step;
      return Math.max(min, Math.min(max, steppedValue));
    },
    [min, max, step]
  );

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const newValue = calculateValue(e.clientX);
    onChange(newValue);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      const newValue = calculateValue(e.clientX);
      onChange(newValue);
    },
    [isDragging, calculateValue, onChange]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const percentage = ((value - min) / (max - min)) * 100;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const filled = i <= value;
      const halfFilled = i - 0.5 === value;

      stars.push(
        <Star
          key={i}
          className={`w-6 h-6 transition-all duration-200 ${
            filled
              ? "text-yellow-400 fill-yellow-400"
              : halfFilled
              ? "text-yellow-400 fill-yellow-400/50"
              : "text-gray-400"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-white font-medium">Minimum Rating</span>
        <div className="flex items-center gap-2">
          <div className="flex items-center">{renderStars()}</div>
          <span className="text-white font-bold text-lg min-w-[3rem] text-center">
            {value === 1 ? "1.0" : value.toFixed(1)}+
          </span>
        </div>
      </div>

      <div className="relative">
        {/* Slider Track */}
        <div
          ref={sliderRef}
          className="relative h-3 bg-white/20 rounded-full cursor-pointer backdrop-blur-sm border border-white/10"
          onMouseDown={handleMouseDown}
        >
          {/* Slider Fill */}
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all duration-200"
            style={{ width: `${percentage}%` }}
          />

          {/* Slider Handle */}
          <div
            className={`absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-white rounded-full shadow-lg border-2 border-yellow-400 cursor-pointer transition-all duration-200 ${
              isDragging ? "scale-125 shadow-xl" : "hover:scale-110"
            }`}
            style={{ left: `${percentage}%` }}
          >
            <div className="absolute inset-1 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full" />
          </div>
        </div>

        {/* Tick Marks */}
        <div className="absolute -bottom-8 left-0 right-0 flex justify-between text-xs text-purple-200">
          {Array.from({ length: 9 }, (_, i) => {
            const tickValue = min + i * step;
            return (
              <span key={i} className="transform -translate-x-1/2">
                {tickValue.toFixed(1)}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RatingSlider;
