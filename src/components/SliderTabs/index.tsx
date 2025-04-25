import { useRef, useEffect, useMemo, useState } from "react";

interface TypeSliderTabsProps<T = React.Key> {
  onChange(value: T): void;
  value?: T;
  items: Array<{ key: T; label: string }>;
}

/**
 * @name SliderTabs 滑块风格 Tabs
 */
const SliderTabs: React.FC<TypeSliderTabsProps> = ({
  items,
  value,
  onChange,
}) => {
  const ref = useRef<HTMLOListElement>(null);
  const [tabWidths, setTabWidths] = useState<number[]>([]);

  useEffect(() => {
    if (ref.current) {
      const items = Array.from(ref.current.querySelectorAll("li"));
      const widths = items.map((el) => el.getBoundingClientRect().width);
      setTabWidths(widths);
    }
  }, [items]);

  const activeIndex = useMemo(
    () => items.findIndex((item) => item.key === value),
    [items, value],
  );

  const left = useMemo(() => {
    if (activeIndex === -1 || tabWidths.length === 0) return "0px";
    const offset = tabWidths
      .slice(0, activeIndex)
      .reduce((a, b) => a + b + 36, 0);
    return `${offset}px`;
  }, [tabWidths, activeIndex]);

  return (
    <div className="relative mx-9 mb-5">
      <ol ref={ref} className="flex h-11 border-b border-b-gray-200 relative">
        {items.map((v, i) => (
          <li
            key={v.key}
            onClick={() => onChange(v.key)}
            className={`
              mr-9 text-base cursor-pointer hover:text-black transition-colors
              ${activeIndex === i ? "text-black font-medium" : "text-gray-500"}
            `}
          >
            {v.label}
          </li>
        ))}
        {activeIndex !== -1 && tabWidths[activeIndex] && (
          <span
            style={{ left, width: `${tabWidths[activeIndex]}px` }}
            className="absolute bottom-0 h-[2px] bg-black transition-all duration-300"
          />
        )}
      </ol>
    </div>
  );
};

export default SliderTabs;
