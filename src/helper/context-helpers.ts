import { useContext, createContext, Context, ConsumerProps } from 'react';

const defaultValue = Symbol('context default value');
type DefaultValue = Symbol;

export function createSafeContext<ContextValue>() {
  return createContext<ContextValue | DefaultValue>(defaultValue);
}

export function useSafeContext<T>(TheContext: Context<T | DefaultValue>): T {
  const value = useContext(TheContext);
  if (value === defaultValue) throw new Error('no value provided for context');
  return value as T;
}

export function createSafeConsumer<T>(TheContext: Context<T | DefaultValue>) {
  return function SafeConsumer({ children }: ConsumerProps<T>) {
    const value = useSafeContext(TheContext);
    return children(value);
  };
}
