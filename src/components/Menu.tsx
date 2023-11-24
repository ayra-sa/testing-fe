
type Props = {
  menu: string;
  isActive: boolean;
};

const Menu = ({ menu, isActive }: Props) => {
  return (
    <div
      className={`py-3 border-t-4 text-sm text-center bg-[#262626] font-medium flex-1 ${
        isActive ? "border-[#EF9533]" : "border-[#262626]"
      }`}
    >
      {menu}
    </div>
  );
};

export default Menu;
