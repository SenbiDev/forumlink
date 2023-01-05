import { useState } from 'react';

type HooksInputsType = {
  name?: string
  email?: string,
  password?: string, 
  title?: string,
  body?: string,
  category?: string,
  comment?: string,
};
 
export function useInput(defaultValue: HooksInputsType): [HooksInputsType, (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void] {
  const [inputs, setInputs] = useState(defaultValue);
 
  function onValueChangeHandler(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name } = event.target;
    const { value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  }
 
  return [inputs, onValueChangeHandler];
}