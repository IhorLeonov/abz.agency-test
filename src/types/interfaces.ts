export interface User {
  email: string;
  id: number;
  name: string;
  phone: string;
  photo: string;
  position: string;
  position_id: number;
  registration_timestamp: number;
}

export interface Position {
  id: string;
  name: string;
}

export interface MainState {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
  data: Data;
}

export interface Data {
  users: User[];
  token: string;
  page: number;
  total_pages: number | null;
  positions: Position[];
}
