"use client";
import { useRef } from "react";
import store from "@/redux/store";
import { Provider } from "react-redux";

export default function StoreProvider({ children }) {
  //   const storeRef = useRef();
  //   if (!storeRef.current) {
  //     // Create the store instance the first time this renders
  //     storeRef.current = store();
  //   }
  return <Provider store={store}>{children}</Provider>;
}
