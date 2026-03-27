const express = require("express");
const { criarBanco } = require("./database");
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send(`
        <html>
        <head>
          <style>
          body { font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px; }
          h1 { color: #2c3e50; }
          button { background: #27ae60; border: none; padding: 10px; border-radius: 5px; }
          button a { color: white; text-decoration: none; font-weight: bold; }
          </style>
        </head>

          <body>
          <h1>Health Tech </h1>
          <h2>Cuidadores de idosos</h2>
          <p>Endpoint que leva aos pacientes cadastrados:</p>
          <button><a href="/pacientes">Clique aqui</a></button>
          </body>
        </html>
        `);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

//Rota lista de pacientes
app.get("/pacientes", async (req, res) => {
  const db = await criarBanco();
  const listaPacientes = await db.all(`SELECT * FROM pacientes`);

  res.json(listaPacientes);
});

//Rota específica por nome
app.get("/pacientes/:id", async (req, res) => {
  const { id } = req.params;
  const db = await criarBanco();
  const pacienteEspecifico = await db.all(
    `SELECT * FROM pacientes WHERE id = ?`,
    [id],
  );

  res.json(pacienteEspecifico);
});

//POST - Novo paciente
app.post("/pacientes", async (req, res) => {
  const {
    //  Identificação
    nome_paciente,
    data_nascimento,
    idade,
    cpf,
    telefone_contato,
    nome_responsavel,

    //  Localização

    endereco,
    cidade,
    cep,

    //  Saúde

    estado_saude,
    diagnosticos,
    medicamentos,
    alergias,
    tipo_sanguineo,
    plano_saude,

    //  Autonomia e cuidados

    nivel_autonomia,
    necessita_cadeira_rodas,
    necessita_fralda,
    necessita_sonda,

    // Rotina diária
    horario_acordar,
    horario_cafe,
    horario_almoco,
    horario_jantar,
    horario_dormir,
    horario_medicamentos,
    atividades_fisicas,
    observacoes_rotina,

    // Histórico e acompanhamento

    historico_acompanhamento,
    data_inicio_acompanhamento,
    proxima_consulta,
    nome_medico_responsavel,
    data_cadastro,
  } = req.body;
  const db = await criarBanco();

  await db.run(
    `
    INSERT INTO pacientes(
      nome_paciente,
      data_nascimento,
      idade,
      cpf,
      telefone_contato,
      nome_responsavel,
      endereco,
      cidade,
      cep,
      estado_saude,
      diagnosticos,
      medicamentos,
      alergias,
      tipo_sanguineo,
      plano_saude,
      nivel_autonomia,
      necessita_cadeira_rodas,
      necessita_fralda,
      necessita_sonda,
      horario_acordar,
      horario_cafe,
      horario_almoco,
      horario_jantar,
      horario_dormir,
      horario_medicamentos,
      atividades_fisicas,
      observacoes_rotina,
      historico_acompanhamento,
      data_inicio_acompanhamento,
      proxima_consulta,
      nome_medico_responsavel,
      data_cadastro
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      nome_paciente,
      data_nascimento,
      idade,
      cpf,
      telefone_contato,
      nome_responsavel,
      endereco,
      cidade,
      cep,
      estado_saude,
      diagnosticos,
      medicamentos,
      alergias,
      tipo_sanguineo,
      plano_saude,
      nivel_autonomia,
      necessita_cadeira_rodas,
      necessita_fralda,
      necessita_sonda,
      horario_acordar,
      horario_cafe,
      horario_almoco,
      horario_jantar,
      horario_dormir,
      horario_medicamentos,
      atividades_fisicas,
      observacoes_rotina,
      historico_acompanhamento,
      data_inicio_acompanhamento,
      proxima_consulta,
      nome_medico_responsavel,
      data_cadastro,
    ],
  );

  res.send(
    `Novo paciente cadastrado: ${nome_paciente} por ${nome_responsavel} no dia ${data_cadastro}`,
  );
});

//Rota de atualização
app.put("/pacientes/:id", async (req, res) => {
  const { id } = req.params;
  const { observacoes_rotina } = req.body;
  const db = await criarBanco();

  await db.run(
    `
    UPDATE pacientes
    SET observacoes_rotina = ?
    WHERE id = ?`,
    [observacoes_rotina, id],
  );

  res.send(
    `As informações do paciente de ID ${id} foram atualizadas com sucesso`,
  );
});

//Rota de remoção
app.delete("/pacientes/:id", async (req, res) => {
  const { id } = req.params;
  const db = await criarBanco();

  await db.run(`DELETE FROM pacientes WHERE id = ?`, [id]);

  res.send(`O paciente com o id ${id} foi removido com sucesso`);
});
