import AirbnbDetail from "../../components/airbnb/airbnbDetail";

export const metadata = {
    title: "Detalle de Airbnb"
}

export default async function AirbnbDetailPage({params}){
    const { id } = await params;
    
    return <AirbnbDetail id={id} />;
}