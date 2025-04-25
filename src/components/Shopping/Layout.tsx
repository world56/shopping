import {
  Sheet,
  SheetTitle,
  SheetHeader,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
interface TypeShoppingLayoutProps {
  // total: number;
  children?: React.ReactNode;
}

/**
 * @name ShoppingLayout 购物车弹窗
 * @description 仅控制弹窗布局
 */
const ShoppingLayout: React.FC<TypeShoppingLayoutProps> = ({
  // total,
  children,
}) => (
  <Sheet>
    <SheetTrigger className="bg-black text-white px-3.5 py-2 m-3 text-sm rounded-2xl cursor-pointer">
      打开购物车
      {/* <span>{total || 0}</span> */}
    </SheetTrigger>
    <SheetContent className="w-full sm:max-w-xl">
      <SheetHeader>
        <SheetTitle className="text-2xl p-5 pb-0">购物车</SheetTitle>
      </SheetHeader>

      <div className="relative h-full">{children}</div>
    </SheetContent>
  </Sheet>
);

export default ShoppingLayout;
