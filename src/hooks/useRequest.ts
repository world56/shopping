import { useState, useEffect, useCallback, useRef } from "react";

interface UseRequestOptions<TParams extends any[], TData> {
  manual?: boolean;
  defaultParams?: TParams;
  onSuccess?: (data: TData, params?: TParams) => void;
  onError?: (e: Error, params?: TParams) => void;
}

function useRequest<TData = any, TParams extends any[] = any[]>(
  service: (...args: TParams) => Promise<TData>,
  options: UseRequestOptions<TParams, TData> = {}
) {
  const {
    manual = false,
    defaultParams,
    onSuccess,
    onError,
  } = options;

  const [loading, setLoading] = useState(!manual);
  const [data, setData] = useState<TData>();
  const [error, setError] = useState<Error>();
  const paramsRef = useRef<TParams | undefined>(null);

  const run = useCallback(async (...params: TParams) => {
    setLoading(true);
    setError(undefined);
    paramsRef.current = params;
    try {
      const result = await service(...params);
      setData(result);
      onSuccess?.(result, params);
      return result;
    } catch (e: any) {
      setError(e);
      onError?.(e, params);
      throw e;
    } finally {
      setLoading(false);
    }
  }, [service, onSuccess, onError]);

  const refresh = useCallback(() => {
    if (paramsRef.current) {
      run(...paramsRef.current);
    }
  }, [run]);

  const mutate = useCallback((newData: TData) => {
    setData(newData);
  }, []);

  useEffect(() => {
    if (!manual) {      
      const safeParams = (defaultParams ?? []) as TParams;
      run(...safeParams);
    }
  }, []);

  return {
    loading,
    data,
    error,
    run,
    refresh,
    mutate,
  };
}

export default useRequest;
