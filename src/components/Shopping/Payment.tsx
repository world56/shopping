import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface TypePaymentProps {
  price?: number;
  total: number;
  selectedTotal: number;
  onSelect(all: boolean): void;
  onSubmit(): void;
}

/**
 * @name Payment 付款、详情
 */
const Payment: React.FC<TypePaymentProps> = ({
  total,
  price,
  onSelect,
  onSubmit,
  selectedTotal,
}) => {
  function onClick() {
    onSelect(total === selectedTotal);
  }

  return (
    <div className="absolute bottom-0 w-full h-42 px-10 py-7 border-t border-t-gray-200">
      <div className="flex justify-between w-full">
        <div className="flex items-center w-36 h-10.5">
          <Checkbox
            id="terms"
            onClick={onClick}
            className="cursor-pointer"
            checked={total > 0 && total === selectedTotal}
          />
          <label className="text-sm ml-3">全选</label>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-500">已选</span>
          <span className="text-sm text-gray-500 mx-1.5">{selectedTotal}</span>
          <span className="text-sm text-gray-500">件</span>
          <span className="text-sm font-bold ml-5">总计：</span>
          <span className="text-3xl ml-1 text-red-500">{price || 0}</span>
          <span className="text-sm p-1 pt-3 text-red-500"> 元</span>
        </div>
      </div>

      <Button
        onClick={onSubmit}
        disabled={!selectedTotal}
        className="w-full h-14 rounded-4xl mt-4 hover:cursor-pointer"
      >
        立即购买
      </Button>
    </div>
  );
};

export default Payment;
