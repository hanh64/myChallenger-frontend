import { useCampagne } from "../hooks/useCampagne";

const Login = () => {
  const { data: campagne, isLoading, error } = useCampagne();
  if (isLoading) {
    //spinner
  }
  if (error) return <p>Erreur lors de la récupération des données.</p>;
  if (!campagne) return <p>Pas de données</p>;

  return (
    <div className="flex w-full">
      <div className="h-full w-full">{campagne[0].name}</div>
    </div>
  );
};

export default Login;
