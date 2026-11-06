export type TokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token?: string;
  scope: string;
};

export type SessionPayload = {
  unionId: string;
  clientId: string;
  /**
   * The account's token version when this token was issued. Absent on tokens
   * minted before the column existed — those are accepted as they are, so an
   * update never signs anybody out.
   */
  tv?: number;
};

export type UserProfile = {
  user_id: string;
  name: string;
  avatar_url: string;
};
