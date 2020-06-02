export const VALIDATION_MESSAGES = {
  name: {
    required: 'O nome é obrigatório',
    minLength: 'O nome precisa ter no mínimo 2 dígitos',
    maxLength: 'O nome tem no máximo 120 dígitos.'
  },
  email: {
    required: 'O email é obrigatório',
    email: 'Email inválido'
  },
  cpf: {
    required: 'O cpf é obrigatório',
    cpf: 'CPF inválido'
  },
  password: {
    required: 'A senha é obrigatória',
    rangeLength: 'A senha deve conter entre 6 e 15 dígitos'
  },
  confirmedPassword: {
    required: 'A senha é obrigatória',
    rangeLength: 'A senha deve conter entre 6 e 15 dígitos',
    equalTo: 'As senhas devem ser iguais'
  }
};
