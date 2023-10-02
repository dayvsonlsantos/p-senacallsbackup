import Card from "../components/card";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col w-full">
      <h1 className="flex justify-start w-4/5 m-4 text-lg">Chamados</h1>
      <Card numero_chamado={'0#28345'} chamado_status={'Aberto'} chamado_descricao={'O computador do lab. está com a tela ...'}/>
      <Card numero_chamado={'0#28345'} chamado_status={'Concluído'} chamado_descricao={'O computador do lab. está com a tela ...'}/>
      <Card numero_chamado={'0#28345'} chamado_status={'Aberto'} chamado_descricao={'O computador do lab. está com a tela ...'}/>
      <Card numero_chamado={'0#28345'} chamado_status={'Aberto'} chamado_descricao={'O computador do lab. está com a tela ...'}/>
      <Card numero_chamado={'0#28345'} chamado_status={'Aberto'} chamado_descricao={'O computador do lab. está com a tela ...'}/>
    </main>
  )
}