UPDATE Agenda.Enderecos
SET
  bitAtivo = 0
WHERE IdEndereco = @IdEndereco;