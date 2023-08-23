import { BannerPrimary } from "@/app/components/BannerPrimary";
import { BannerSecondary } from "@/app/components/BannerSecondary";
import { categories } from "@/app/utils/categories";

export default function Dashboard() {
  return (
    <div className="container mx-auto ">
      <div className="p-2 text-blue ">
        <BannerPrimary />
        <p className="text-2xl font-medium">Eventos em Destaque</p>
        <p className="text-base font-light">
          Se divirta com os principais eventos de Minas Gerais e do Brasil!
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <BannerSecondary />
      </div>
      <div className="p-2 text-blue ">
        <p className="text-2xl font-medium">Navegue por tipo de evento</p>
        <p className="text-base font-light">Vá ao evento que é a sua cara :D</p>
      </div>
      <div className="grid md:grid-cols-7 grid-cols-2 lg:gap-2 sm:gap-1">
        {categories.map((cat) => {
          return (
            <div className="flex flex-col items-center justify-center">
              <img src={cat.icon} alt="" className="rounded-full" />
              <p>{cat.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
