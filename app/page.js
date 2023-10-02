import Footer from "@/components/footer";
import Card from "../components/card";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Navbar />
        <main className="flex items-center justify-center flex-col w-full ">
          <h1 className="flex justify-start w-4/5 m-4 text-lg">Chamados</h1>
          <a className="flex items-center justify-center w-full" href="/chamado ">
            <Card
              numero_chamado={'0#28345'}
              chamado_status={'Aberto'}
              chamado_descricao={'O computador do lab. está com a tela ...'}
            />
          </a>
          <a className="flex items-center justify-center w-full" href="/chamado">
            <Card
              numero_chamado={'0#28346'}
              chamado_status={'Concluído'}
              chamado_descricao={'O computador do lab. está danificado ...'}
            />
          </a>
          <a className="flex items-center justify-center w-full" href="/chamado">
            <Card
              numero_chamado={'0#28347'}
              chamado_status={'Aberto'}
              chamado_descricao={'O computador do lab. está desligando ...'}
            />
          </a>
          <a className="flex items-center justify-center w-full" href="/chamado">
            <Card
              numero_chamado={'0#28348'}
              chamado_status={'Concluído'}
              chamado_descricao={'O lab está sem computador'}
            />
          </a>
          <a className="flex items-center justify-center w-full" href="/chamado">
            <Card
              numero_chamado={'0#28310'}
              chamado_status={'Aberto'}
              chamado_descricao={'O computador do lab. está com a tela ...'}
            />
          </a>
        </main>
      </div>
      <Footer homeIcon={'/homeIcon.svg'} userIcon={'/userOrangeIconLight.svg'} />
    </div>

  )
}