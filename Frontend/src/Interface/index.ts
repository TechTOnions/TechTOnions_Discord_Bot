export interface userData {
  user: User;
  guilds: Guild[];
}
export interface User {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  public_flags: number;
  flags: number;
  banner: string | null;
  accent_color: number | null;
  global_name: string;
  avatar_decoration_data: null;
  banner_color: string | null;
  mfa_enabled: boolean;
  locale: string;
  premium_type: number;
}

export interface Guild {
  id: string;
  name: string;
  icon?: string;
  owner: boolean;
  permissions: number;
  permissions_new: string;
  features: string[];
}

export interface ServerList {
  name: string;
  id: string;
  icon_url: string;
}

export interface ServerWithPresenceObject {
  features?: string[];
  id?: string;
  owner?: boolean;
  permissions_new?: string;
  permissions?: number;
  icon?: string;
  name?: string;
  isPresent?: boolean;
  iconURL?: string;
}

export interface ChannelListArray {
  channel: string;
  id: string | unknown;
}
export interface Roles {
  role: string;
  id: string | unknown;
}
export interface Server {
  id: string;
  name: string;
  icon?: string;
  owner: boolean;
  permissions: number;
  permissions_new: string;
  features: string[];
}

export interface ServerWithPresence extends Server {
  isPresent: boolean | undefined;
  iconURL: string;
}
