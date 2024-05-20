import { useState } from 'react'

export default function useInput(initValue) {
 
   const [value,setValue] = useState(initValue);

   const resetVal = () => {
      setValue("");
   }

   const binding = {
      value : value,
      onChange : e => {
         setValue(e.target.value);
      }
   }

   return [value,binding,resetVal]

}
