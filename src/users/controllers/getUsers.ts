import { Controller } from '../../controllers';
import { listUsers } from '../use-cases';

export const getUsers: Controller = async () => {
  const headers = {};

  try {
    const users = await listUsers();

    return {
      headers,
      statusCode: 200,
      body: users,
    };
  } catch (e) {
    console.error(e); // tslint:disable-line no-console

    return {
      headers,
      statusCode: 400,
      body: {
        error: e.message,
      },
    };
  }
};
