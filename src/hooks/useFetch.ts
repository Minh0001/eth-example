import React, { useEffect, useState } from "react";

const useFetch = <T>(input: RequestInfo, init?: RequestInit | undefined) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState<T>();

  const request = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(input, init);
      const json = await response.json();
      setResult(json);
    } catch {
      setError(true);
    }
    setIsLoading(false);
  };

  useEffect((): void => {
    request();
  }, []);

  return { result, isLoading, error, request };
};

export default useFetch;
