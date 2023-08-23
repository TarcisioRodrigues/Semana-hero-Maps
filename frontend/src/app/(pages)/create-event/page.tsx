import { Input } from "@/app/components/Form/Input";
import { InputFile } from "@/app/components/Form/InputFile";
import { categories } from "@/app/utils/categories";

export default function CreateEvent() {
  return (
    <div className="container m-auto">
      <div className="grid sm:grid-cols-2 gap-2  grid-cols-1 p-8 ">
        <div className="mb-4 pr-6 border-r-2 border-[#61D9DE]">
          <div className="mb-4">
            <p className="text-blue text-2xl font-medium">Adicionar Eventos</p>
            <p className="text-blue text-base  font-medium mb-4">
              Crie o seu proprio evento da maneira que preferir!
            </p>
          </div>

          <Input title="Titulo" placeholder="Nome do Evento" type="text" />
          <Input title="Endereço" placeholder="Digite o endereço" type="text" />

          <div className="grid grid-cols-2 gap-3">
            <Input title="Data" placeholder="Digite o data" type="date" />
            <Input
              title="Horário"
              placeholder="Digite o horário"
              type="number"
            />
          </div>
          <p className="text-blue text-base  font-medium mb-4">
            Categorias de Eventos
          </p>
          <div className="grid grid-cols-5 gap-5">
            {categories.map((category) => (
              <div className="flex text-blue">
                <input type="checkbox" className="mr-2" />
                <label>{category.name}</label>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <p className="text-blue text-base  font-medium  ">Valor</p>
            <p className="text-neutral-500 text-sm font-light">
              Caso seu evento seja gratuito, o campo deverá ficar vazio. Caso
              haja mais de um setor, basta adicionara seção. Se houver cupom
              promocional, basta colocar o código no campo “cupom”.
            </p>
          </div>

          <div className="grid grid-cols-5 gap-3">
            <Input
              title="Preço"
              placeholder="R$0,00"
              type="number"
              className="col-span-2"
            />
            <Input
              title="Setor"
              placeholder="Insira o nome do setor"
              type="text"
              className="col-span-3"
            />

            <Input
              title="Descrição"
              placeholder="Dê uma descrição que vai embalar o seu público!"
              type="textarea"
              className="col-span-5"
            />
          </div>
        </div>

        <div className="mb-4 pr-6 border-r-2">
          <p className="text-blue text-2xl font-medium">Adicionar Eventos</p>
          <p className="text-blue text-base font-light">
            Crie o seu proprio evento
          </p>
          <div className="my-4 ">
            <p className="text-blue text-base font-medium ">Banner</p>
            <p className="text-neutral-500  text-sm font-light ">
              Insira um banner no formato 336x280
            </p>
            <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
              <InputFile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
