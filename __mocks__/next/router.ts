import { useRouter as useRouterActual } from 'next/router';

export const useRouter = jest.fn();
useRouter.mockImplementation(() => ({
  push: jest.fn(),
  query: {},
}));