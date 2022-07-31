SELECT
  IdEndereco,
  Nome,
  Num,
  Bairro,
  Cidade,
  Uf,
  Cep 
FROM Agenda.Enderecos
WHERE IdUsuario = @IdUsuario AND bitAtivo = 1;