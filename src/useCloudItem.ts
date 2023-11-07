'use client';

import { useEffect, useState } from 'react';
import useCloudStorage from './useCloudStorage';

const useCloudItem = (key: string | string[]) => {
  const cloud = useCloudStorage();

  const [state, setState] = useState<{
    loading: boolean;
    data: Record<string, string> | null;
    error: Error | null;
  }>({ loading: false, data: null, error: null });

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      setState(state => ({ ...state, loading: true }));
      try {
        const items = Array.isArray(key)
          ? await cloud.getItems(key)
          : { key: await cloud.getItem(key) };

        if (!signal.aborted) {
          setState({ loading: false, data: items, error: null });
        }
      } catch (e) {
        if (!signal.aborted) {
          setState({ loading: false, data: null, error: e as Error });
        }
      }
      return () => {
        abortController.abort();
      };
    };

    fetchData();
  }, [cloud, key, setState]);

  return state;
};

export default useCloudItem;
