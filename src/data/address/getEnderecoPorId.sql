SELECT
  IdEndereco,
  IdUsuario,
  Nome,
  Num,
  Bairro,
  Cidade,
  Uf,
  Cep 
FROM Agenda.Enderecos
WHERE IdEndereco = @IdEndereco AND bitAtivo = 1;