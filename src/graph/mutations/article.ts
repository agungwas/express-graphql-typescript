import articleType from '../types/type';

export default {
  type: articleType,
  args: {},
  resolve: () => {
    return {
      id: '100',
      username: 'test',
      email: 'mutation'
    }
  }
}