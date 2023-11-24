import SampleImage from "../assets/images/img.png";

type Props = {
  productName: string
  productDescription: string
};

const ProductCard = ({productName, productDescription}: Props) => {
  return (
    <div className="bg-[#1B1B1B] p-4 rounded-lg space-y-3">
      <p className="font-medium tracking-[0.04px] text-base">15.000 NT</p>
      <img src={SampleImage} alt="image" className="w-full h-auto rounded-lg" />
      <h2 className="text-base font-bold tracking-[0.04px] bg-bg-button bg-clip-text text-transparent">
        {productName}
      </h2>
      <p className="text-sm font-normal tracking-[0.056px] text-[#9F9E9F]">
        {productDescription}
      </p>
      <p className="text-sm font-bold tracking-[0.056px]">6pcs</p>
    </div>
  );
};

export default ProductCard;
