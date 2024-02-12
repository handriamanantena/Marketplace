import { Provider } from "react-redux";
import { store } from "@lib/store/store";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const StoreProvider: React.FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
