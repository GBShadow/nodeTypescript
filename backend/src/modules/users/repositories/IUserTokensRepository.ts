import UserToken from '../infra/typeorm/entities/UsersToken';

export default interface IUsersTokensRepository {
  generate(user: string): Promise<UserToken>;
}
