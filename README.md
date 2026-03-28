# 🩺 API desafio HealthTech - Cuidadores de idosos

## 📌 Sobre o Projeto

A API **HealthTech - Cuidadores de idosos** é uma API para cadastrar e acompanhar o progresso dos pacientes. Ela permite: **criar, visualizar, atualizar e deletar** pacientes.

## 🛠️ Tecnologias utilizadas

- Node.js
- Postman
- Express
- SQlite
- SQLite3

---

## 📦 Instalação

```bash
npm install
```

## ▶️ Como Executar

```bash
npm run dev
```

Servidor disponível em: http://localhost:3000

---

🗄️ Banco de Dados

O baco de dados é criado automaticamente ao iniciar o projeto.

```
database.db
```

### 🧾 Tabela

| Campo                      | Descrição                             |
| -------------------------- | --------------------------------------|
| id                         | Identificador Único                   |
| nome_paciente              | Nome do paciente                      |
| data_nascimento            | Data de nascimento (01/02/1111)       |
| idade                      | Idade                                 |
| cpf                        | CPF (111.222.333-44)                  |
| telefone_contato           | Telefone de contato ((11) 12345-6789) |
| nome_responsavel           | Nome do responsavel                   |
| endereco                   | Endereço                              |
| cidade                     | Cidade                                |
| cep                        | CEP (250000-00)                       |
| estado_saude               | Estado de saúde                       |
| diagnosticos               | Diagnostico                           |
| medicamentos               | Medicamentos                          |
| alergias                   | Alergias à medicamentos               |
| tipo_sanguineo             | Tipo Sanguineo                        |
| plano_saude                | Plano de Saúde                        |
| nivel_autonomia            | Nível de autonomia                    |
| necessita_cadeira_rodas    | Necessita de cadeira de rodas (1 ou 0)|
| necessita_fralda           | Necessita de fraldas (1 ou 0)         |
| necessita_sonda            | Necessita de sonda (1 ou 0)           |
| horario_acordar            | Horario de cordar                     |
| horario_cafe               | Horario do café                       |
| horario_almoco             | Horario do Almoco                     |
| horario_jantar             | Horario do Jantar                     |
| horario_dormir             | Horario de Dormir                     |  
| horario_medicamentos       | Horario dos Medicamentos              |
| atividades_fisicas         | Atividades Fisicas                    | 
| observacoes_rotina         | Observações de Rotina                 |
| historico_acompanhamento   | Historico de Acompanhamento           |
| data_inicio_acompanhamento | Data de inicio do acompanhamento      |
| proxima_consulta           | Data da proxima consulta              |
| nome_medico_responsavel    | Nome do medico responsavel            |
| data_cadastro              | Data do cadastro                      |

## 🔗 Endpoints

### Rota Inicial

```http
GET /
```

Retorna uma página HTML simples
com informações da API

---

### Rota para listar todos os pacientes

```http
GET /pacientes
```

Retorna todos os registros do banco de dados

### Rota pra buscar um paciente por ID

```http
GET /pacientes/:id
```

Exemplo:

```
/pacientes/1
```

### Rota para criar um novo paciente

```http
POST /pacientes
```

#### Body(JSON):

```json
{
     "nome_paciente": "Tereza Salles Alves",
    "data_nascimento": "15/02/1950",
    "idade": 76,
    "cpf": "154.432.679-03",
    "telefone_contato": "(21) 99999-1234",
    "nome_responsavel": "Julia Salles (filha)",
    "endereco": "Rua das Amoreiras, 156, Apto 1",
    "cidade": "Petropolis",
    "cep": "25000-000",
    "estado_saude": "estável",
    "diagnosticos": "Hipertensão",
    "medicamentos": "Losartana 50mg - 1x ao dia (manhã)",
    "alergias": "Dipirona",
    "tipo_sanguineo": "A+",
    "plano_saude": "Amil",
    "nivel_autonomia": "parcial",
    "necessita_cadeira_rodas": 0,
    "necessita_fralda": 0,
    "necessita_sonda": 0,
    "horario_acordar": "07:00",
    "horario_cafe": "08:00",
    "horario_almoco": "12:00",
    "horario_jantar": "18:30",
    "horario_dormir": "21:00",
    "horario_medicamentos": "08:00, 21:00",
    "atividades_fisicas": "Caminhada no parque às 09:00",
    "observacoes_rotina": "Paciente gosta de fazer atividade de casa",
    "historico_acompanhamento": "Dona Maria relatou boa noite de sono. A pressão arterial manteve-se excelente durante todo o dia.",
    "data_inicio_acompanhamento": "26/03/2026",
    "proxima_consulta": "05/04/2025",
    "nome_medico_responsavel": "Dr. Ana Mendes",
    "data_cadastro": "25/03/2026"
}
```

### Rota para atualizar um paciente

```http
PUT /pacientes/:id
```

#### body(JSON)

```json
{
    "observacoes_rotina": "Paciente apresentou melhor interesse em caminhar. Hoje caminhou 30 minutos a mais"
}
```

### Rota para deletar um paciente

```http
DELETE /pacientes/:id
```

---

## 🔐 Segurança

A API utiliza `?` nas queries SQL:

```sql
WHERE id = ?
```

## Isso evita o SQL Injection

## 📚 Conceitos

- CRUD (Create, Read, Update e Delete)
- Rotas com Express
- Métodos/Verbos HTTP (GET, POST, PUT, DELETE)
- Banco de dados SQLite
- SQL básico
- Uso de `req.params` e `req.body`

## 🎯 Observações

- O banco é criado automaticamente
- Dados iniciais são inseridos apenas se estiver vazio
- A API pode ser testada com o Postman

---

## 👩‍💻 Desafio educacional

Este projeto foi desenvolvido para fins de aprendizado em back-end com Node.js

<!-- ## 🚀 Nome da API / Projeto
## 📌 Sobre o Projeto
## 🎯 Objetivo
## 🛠️ Tecnologias
## 📦 Instalação
## ▶️ Como Executar
## ⚙️ Configurações
## 🗄️ Banco de Dados
## 🔗 Endpoints
## 🔐 Segurança
## 📚 Conceitos
## 💡Dicas / Melhorias
## 👩‍💻 Autor

---

## 📖 Descrição
## 🔧 Ferramentas
## 💻 Ambiente
## 📊 Dados
## 🧾 Tabela
## 📡 Requisições
## 📥 Entrada de dados
## 📤 Saída de dados
## 🚫 Bloqueios / proteção
## 🧠 Aprendizado
## 🎓 Educacional
## ⚠️ Atenção
## ❗Importante
## 🤝 Contribuição
## 📄 Licença -->
