export type AuthState = {
  token: string | null | undefined;
  userId: string | null;
  installLocation: string | null;
  isLoading: boolean;
};
