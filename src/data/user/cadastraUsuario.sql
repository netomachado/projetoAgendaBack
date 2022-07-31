INSERT INTO Agenda.Usuario
  (
    Nome,  
    Telefone, 
    Email,
    Senha,
    DataNascimento,
    Cpf,
    Rg,
    DataCadastrado,
    bitAtivo
  )
VALUES
  (
   @Nome,
    @Telefone,
    @Email,
    @Senha,
    @DataNascimento,
    @Cpf,
    @Rg,
    @DataCadastrado,
    1
  )
  SELECT SCOPE_IDENTITY() IdUsuario
