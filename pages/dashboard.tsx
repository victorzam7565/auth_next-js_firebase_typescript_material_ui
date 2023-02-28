import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import Button from '@mui/material/Button'

export default function Dashboard():any {
  const userName: string = "bienvenido";
  const auth = getAuth();
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
  ;
}, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    router.push("/");
    return <div>Please sign into continue</div>;
  }
  //<button onClick={() => auth.signOut()}/> 


return (
  <>
<div className="mb-1 text-blue-500">Signed in as: {userName}</div>
<Button variant="contained" color="warning"
onClick={() => auth.signOut()}
>
  Salida de la App 
</Button>
<div className="text-center flex flex-col gap-6 items-center">
        <h1>aqui ponen su contenido o cosas estan adentro de la App , se puede verificar el usuario con mensaje de texto al movil, github y demas opsiones...
        </h1>
      </div>  
      
</>

)

    }





























