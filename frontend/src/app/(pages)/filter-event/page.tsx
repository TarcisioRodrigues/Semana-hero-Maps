import { CardFilter } from "@/app/components/CardFilter";
import { Button } from "@/app/components/Form/Button";
import { Input } from "@/app/components/Form/Input";
import { InputFile } from "@/app/components/Form/InputFile";
import { InputRange } from "@/app/components/Form/InputRange";
import { categories } from "@/app/utils/categories";

export default function FilterEvent() {
  return (
    <div className="container m-auto">
      <div className="grid sm:grid-cols-2 gap-2  grid-cols-1 p-8 ">
        <div className="mb-4 pr-6 border-r-2 border-[#61D9DE]">
          <div className="mb-4">
            <p className="text-blue text-2xl font-medium">Filtrar Eventos</p>
            <p className="text-blue text-base  font-medium mb-4">
              Busque o evento que é a sua cara de maneira mais detalhada!
            </p>
          </div>

          <Input title="Nome " placeholder="Nome do Evento" type="text" />
          <Input
            title="Localização"
            placeholder="Digite o endereço"
            type="text"
          />

          <div className="grid grid-cols-2 gap-3">
            <Input title="Data" placeholder="Digite o data" type="date" />
            <Input
              title="Horário"
              placeholder="Digite o horário"
              type="number"
            />
          </div>
          <Input
            title="Tipo de evento"
            placeholder="Digite o endereço"
            type="text"
          />
          <InputRange title="Distancia" className="" />
          <InputRange title="Valor" />
          <div className="grid grid-cols-2 gap-2 w-2/3 m-auto">
            <Button
              title="Limpar"
              className="bg-white border border-blue text-blue"
            />
            <Button title="Buscar" />
          </div>
        </div>

        <div className="mb-4 pr-6 border-r-2">
          <CardFilter />
        </div>
      </div>
    </div>
  );
}
