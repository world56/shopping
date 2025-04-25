import {
  Sheet,
  SheetTitle,
  SheetHeader,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";

interface TypeShoppingLayoutProps {
  children?: React.ReactNode;
}

/**
 * @name ShoppingLayout 购物车弹窗
 * @description 仅控制弹窗布局
 */
const ShoppingLayout: React.FC<TypeShoppingLayoutProps> = ({ children }) => (
  <Sheet>
    <SheetTrigger>打开购物车</SheetTrigger>
    <SheetContent className="w-full sm:max-w-xl">
      <SheetHeader>
        <SheetTitle className="text-2xl p-5 pb-0">购物车</SheetTitle>
      </SheetHeader>
      {children}
    </SheetContent>
  </Sheet>
);

export default ShoppingLayout;
