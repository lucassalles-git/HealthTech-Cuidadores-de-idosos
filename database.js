const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

const criarBanco = async () => {
  //Abrindo o banco de dados
  const db = await open({
    filename: "./database.db",
    driver: sqlite3.Database,
  });

  //Criando tabela pacientes
  await db.exec(`

    CREATE TABLE IF NOT EXISTS pacientes(

    -- Identificação
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_paciente TEXT NOT NULL, -- nome não pode ficar vazio
    data_nascimento TEXT,
    idade INTEGER,
    cpf TEXT UNIQUE, -- não pode repetir o mesmo CPF
    telefone_contato TEXT,
    nome_responsavel TEXT,

    -- Localização

    endereco TEXT,
    cidade TEXT,
    cep TEXT,

    -- Saúde

    estado_saude TEXT,
    diagnosticos TEXT,
    medicamentos TEXT,
    alergias TEXT,
    tipo_sanguineo TEXT,
    plano_saude TEXT,

    -- Autonomia e cuidados

    nivel_autonomia TEXT,
    necessita_cadeira_rodas INTEGER DEFAULT 0,
    necessita_fralda INTEGER DEFAULT 0,
    necessita_sonda INTEGER DEFAULT 0,

    -- Rotina diária
    horario_acordar TEXT,
    horario_cafe TEXT,
    horario_almoco TEXT,
    horario_jantar TEXT,
    horario_dormir TEXT,
    horario_medicamentos TEXT,
    atividades_fisicas TEXT,
    observacoes_rotina TEXT,

    -- Histórico e acompanhamento
    historico_acompanhamento TEXT,
    data_inicio_acompanhamento TEXT,
    proxima_consulta TEXT,
    nome_medico_responsavel TEXT,
    data_cadastro TEXT
    )
    `);

  console.log("Banco de dados configurado: A tabela de pacientes está pronta");

  const checagem = await db.get(`SELECT COUNT (*) AS total FROM pacientes`);

  if (checagem.total === 0) {
    await db.exec(`
      INSERT INTO pacientes (
        
      -- Identificação
      nome_paciente,
      data_nascimento,
      idade,
      cpf,
      telefone_contato,
      nome_responsavel,

      -- Localização

      endereco,
      cidade,
      cep,

      -- Saúde

      estado_saude,
      diagnosticos,
      medicamentos,
      alergias,
      tipo_sanguineo,
      plano_saude,

      -- Autonomia e cuidados

      nivel_autonomia,
      necessita_cadeira_rodas,
      necessita_fralda,
      necessita_sonda,

      -- Rotina diária
      horario_acordar,
      horario_cafe,
      horario_almoco,
      horario_jantar,
      horario_dormir,
      horario_medicamentos,
      atividades_fisicas,
      observacoes_rotina,

      -- Histórico e acompanhamento

      historico_acompanhamento,
      data_inicio_acompanhamento,
      proxima_consulta,
      nome_medico_responsavel,
      data_cadastro
      ) 
      VALUES (
      -- Identificação

      "Maria Aparecida Silva",
      "10/03/1945",
      80,
      "123.456.789-00",
      "(21) 99999-1234",
      "João Silva (filho)",

      -- Localização

      "Rua das Flores, 123, Apto 2",
      "Duque de Caxias",
      "25000-000",

      -- Saúde

      "estável",
      "Alzheimer leve, Hipertensão",
      "Losartana 50mg - 1x ao dia (manhã), Donepezila 5mg - 1x ao dia (noite)",
      "Dipirona",
      "O+",
      "Unimed",

      -- Autonomia e cuidados

      "parcial",
      0,
      0,
      0,

      -- Rotina diária

      "07:00",
      "08:00",
      "12:00",
      "18:30",
      "21:00",
      "08:00, 21:00",
      "Caminhada leve no quintal às 09:00",
      "Gosta de ouvir música á tarde. Não deixar assistir TV depois das 20h pois dificulta o sono.",

      -- Histórico

      "Acompanhamento iniciado após queda em janeiro. Evolução positiva na mobilidade.",
      "15/01/2025",
      "10/04/2025",
      "Dr. Carlos Mendes",
      "25/03/2026"
      ),

      (
      "José Antônio Ferreira",
      "22/07/1938",
      87,
      "987.654.321-00",
      "(21) 98888-5678",
      "Ana Ferreira (filha)",
      "Av. Brasil, 456, Casa",
      "Duque de Caxias",
      "25010-000",
      "debilitado",
      "Parkinson, Diabetes tipo 2, Hipertensão",
      "Levodopa 250mg - 3x ao dia (08:00, 14:00, 20:00), Metformina 500mg - 2x ao dia (café e jantar)",
      "Penicilina",
      "A+",
      "SUS",
      "nenhuma",
      1,   -- usa cadeira de rodas
      1,   -- usa fralda
      0,   -- não usa sonda
      "08:00",
      "09:00",
      "12:30",
      "18:00",
      "21:30",
      "08:00, 14:00, 20:00",
      "Fisioterapia motora na cadeira às 10:00",
      "Humor oscilante pela manhã. Prefere silêncio durante as refeições. Família visita aos finais de semana.",
      "Paciente com mobilidade bastante reduzida. Iniciou fisioterapia em fevereiro com melhora leve nos movimentos das mãos.",
      "01/02/2025",
      "20/04/2025",
      "Dra. Fernanda Costa",
      "25/03/2026"
      ),

      (
      "Ana Lima Souza",
      "1950-11-05",
      75,
      "111.222.333-00",
      "(21) 97777-4321",
      "Pedro Souza (filho)",
      "Rua das Palmeiras, 789",
      "Duque de Caxias",
      "25020-000",
      "estável",
      "Fratura no quadril (recuperada)",
      "Vitamina D - 1x ao dia (manhã)",
      "Nenhuma",
      "B+",
      "Bradesco Saúde",
      "total",
      0,
      0,
      0,
      "07:00",
      "07:30",
      "12:00",
      "18:00",
      "22:00",
      "08:00",
      "Caminhada no parque às 08:00, alongamento às 17:00",
      "Paciente totalmente recuperada. Independente para todas as atividades do dia a dia.",
      "Iniciou acompanhamento após cirurgia de quadril. Recuperação excelente.",
      "01/09/2024",
      "01/05/2025",
      "Dr. Ricardo Alves",
      "25/03/2026")`);
  } else {
    console.log(`Banco pronto com ${checagem.total} pacientes`);
  }

  const todosOsPacientes = await db.all("SELECT * FROM pacientes");
  console.table(todosOsPacientes);

  //Deletando paciente
  await db.run(`DELETE FROM pacientes WHERE id = 3`);
  console.log("Paciente do ID 3 removido");

  //Relatório final
  console.log("Relatório de pacientes(Final)");
  const resultadoFinal = await db.all(`SELECT * FROM pacientes`);
  console.table(resultadoFinal);

  return db;
};

module.exports = { criarBanco };
