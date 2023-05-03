function index({data}:any) {


  return (
    <div>
      Hello
      {
        data.ID_PRODUCTO
      }
    </div>
  )
}

export default index

export async function getStaticPaths(){

    try {

        const url = 'https://apimaxv2.apexmaicol.online/VPsublimacion/'

        const res = await fetch(url)
        const data = await res.json()

        const paths = data.map(({ID}:any) => (
            {
                params:{
                    id: `${ID}`
                }
            }
        ))

        return{
            paths,
            fallback:false
        }
        
    } catch (error) {
        console.log(error);
        
    }
}

export async function getStaticProps({params}:any){

    const url = `https://apimaxv2.apexmaicol.online/VPsublimacion/${params.id}`
  
    const res = await fetch(url)
    const data = await res.json()

    
  
  return{
    props:{
      data:data,
    }
  }
  

}