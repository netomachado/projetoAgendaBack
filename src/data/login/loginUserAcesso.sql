SELECT 
    IdUsuario,
    nome,
	senha,
	dataCadastrado
FROM Agenda.Usuario

WHERE email = @email AND senha = @senha AND bitAtivo = 1