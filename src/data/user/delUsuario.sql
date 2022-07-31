UPDATE Agenda.Usuario
SET
  bitAtivo = 0
WHERE IdUsuario = @IdUsuario;