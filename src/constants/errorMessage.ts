export enum ERRORS_MESSAGES {
  EMAIL_INVALID= "E-mail inválido",
  PASSWORD_INVALID= "Senha inválida",
  CONFIRM_PASSWORD_INVALID= "As senhas não coincidem",
  NAME_INVALID= "Nome inválido",
  PHONE_INVALID= "Telefone inválido",
  AVATAR_INVALID= "Avatar inválido",
  REQUIRED_FIELD= "Campo inválido"
};

export const errorMessages: Record<number, string> = {
  400: 'Requisição inválida. Verifique os dados enviados.',
  401: 'Não autorizado. Faça login para continuar.',
  403: 'Acesso proibido. Você não tem permissão.',
  404: 'Recurso não encontrado.',
  409: 'Este e-mail já foi cadastrado.',
  500: 'Erro interno do servidor. Tente novamente mais tarde.',
  503: 'Serviço indisponível. Tente mais tarde.',
};

export function getErrorMessage(status?: number): string {
  return errorMessages[status!] || 'Ocorreu um erro inesperado. Tente novamente.';
}