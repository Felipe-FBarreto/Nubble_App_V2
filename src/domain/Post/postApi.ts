import {postListMock} from './postListMock';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  // TODO; simular um dealy na API
  await new Promise(resolve => setTimeout(() => resolve(''), 2000));
  return postListMock;
}

export const postApi = {
  getList,
};
