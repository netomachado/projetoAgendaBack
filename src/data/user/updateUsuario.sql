UPDATE Agenda.Usuario
SET
  Nome = @Nome,
  DataAniversario = @DataAniversario,
  Cpf = @Cpf,
  Rg = @Rg,
  Telefone = @Telefone
WHERE IdUsuario = @IdUsuario;