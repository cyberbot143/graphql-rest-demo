import { users } from '../../database';

export function getAll(req, res) {
  return res.json({
    users: users.find()
  });
}
