SELECT
  IdUsuario,
  Nome,
  Email,
  Senha,
  DataCadastro,
  DataAniversario,
  Cpf,
  Rg,
  Telefone

  FROM Agenda.Usuario
  WHERE IdUsuario = @IdUsuario AND bitAtivo = 1