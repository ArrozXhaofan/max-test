export async function getStaticProps() {
  
    const url = 'https://apimaxv2.apexmaicol.online/VPsublimacion/'
    
    const res = await fetch(url)
    const data = await res.json()
    
    return{
      props:{
        data:data,
      }
    }
    
    }