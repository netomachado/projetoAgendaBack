INSERT INTO Agenda.Enderecos
  (
    Rua, 
    Num, 
    Bairro, 
    Cidade, 
    Uf, 
    Cep, 
    IdUsuario,
    bitAtivo
  ) 
VALUES
  (
    @Rua,
    @Num,
    @Bairro,
    @Cidade,
    @Uf,
    @Cep,
    @IdUsuario,
    1
  )
  SELECT SCOPE_IDENTITY() IdEndereco