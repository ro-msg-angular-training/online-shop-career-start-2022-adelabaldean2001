import { LoadingStatus } from "src/app/store/common";
import {User} from "../../user";

export interface AuthenticationState {
  user: User | null;
  error: string | null;
  status: LoadingStatus;
};

export const initialState: AuthenticationState = {
  user: null,
  error: '',
  status: 'pending'
};
