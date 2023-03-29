import {
  Suspense,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type RouterContext = {
  currentRoute: string;
  goto: (route: string) => void;
};

const Context = createContext<RouterContext>({
  currentRoute: "/1",
  goto: () => {
    throw new Error("NOT FOUND");
  },
});

export function SuspenseRouter({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback: React.ReactNode;
}) {
  const [currentRoute, setCurrentRoute] = useState(() => {
    return window.location.pathname;
  });

  // whenever the route changes, we need to make sure the browser's stack is up to date
  useEffect(() => {
    if (window.location.pathname !== currentRoute) {
      window.history.pushState({}, "", currentRoute);
    }
  }, [currentRoute]);

  // when we first mount we should start listening to the backbutton
  useEffect(() => {
    const onChange = (evt: PopStateEvent) => {
      setCurrentRoute(window.location.pathname);
    };
    window.addEventListener("popstate", onChange);
    return () => {
      window.removeEventListener("popstate", onChange);
    };
  }, []);

  return (
    <Context.Provider
      value={{
        currentRoute,
        goto: setCurrentRoute,
      }}
    >
      <Suspense fallback={fallback}>{children}</Suspense>
    </Context.Provider>
  );
}

export function useRouterContext() {
  return useContext(Context);
}
