import Link from "next/link"

function Home({data}:any) {


  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      {
        data.map((maquina:any) => (

          <li key={maquina.ID}>
            <Link href={`/${maquina.ID}`}>
              {maquina.MODELO}
            </Link>
          </li>
        ))
      }
    </div>
  )
}

export default Home

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