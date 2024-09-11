import { Billboard as BillboardType } from "@/types";

interface BillboardProp {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProp> = ({ data }) => {
  return (
    <div className="relative p-2 sm:p-4 lg:p-6 rounded-xl overflow-hidden transition-transform transform group h-48 sm:h-64 lg:h-80">
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className="rounded-xl absolute inset-0 bg-cover bg-center transition-transform duration-500"
      >
        <div className="absolute inset-0 bg-black/40 flex justify-center items-center text-center transition-opacity duration-300 group-hover:opacity-100 opacity-0">
          <div className="text-white font-bold text-xl sm:text-2xl lg:text-3xl p-2 sm:p-4 lg:p-6 shadow-lg max-w-xs sm:max-w-md">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
