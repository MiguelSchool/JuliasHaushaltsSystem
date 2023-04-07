export type LoginState = {
  id: string;
  success: boolean;
  token: string | null;
  username?: string;
  isLoggedIn:boolean
}
