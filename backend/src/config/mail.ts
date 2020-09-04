interface IMailConfig {
  driver: 'ethereal' | 'ses';
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'dominio@email.com',
      name: 'Gustavo GoBarber',
    },
  },
} as IMailConfig;
