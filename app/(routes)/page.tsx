import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";
import Billboard from "@/components/ui/billboard";
export const revalidate = 0;

const HomePage = async () => {
  
  const billboard = await getBillboard("69780a28-6ba2-4ac6-8a9e-adcf7af13329");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard}/>    
      </div>
    </Container>
  )
};

export default HomePage;