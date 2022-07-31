UPDATE Agenda.Enderecos
SET
  Rua = @Rua,
  Num = @Num,
  Bairro = @Bairro,
  Cidade = @Cidade,
  Uf = @Uf,
  Cep = @Cep
WHERE IdEndereco = @IdEndereco;