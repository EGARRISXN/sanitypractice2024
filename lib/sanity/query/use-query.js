import * as queryStore from "@sanity/react-loader";

export const useQuery = (query, params, options) => {
  const snapshot = queryStore.useQuery(query, params, options);

  if (snapshot.error) {
    throw snapshot.error;
  }

  return snapshot;
};

export const {useLiveMode} = queryStore;
