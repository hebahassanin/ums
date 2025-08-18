
import welcomePhoto from '../../assets/imgs/img.jpg';


export default function Home() {
  
  return (
    <>
    <div className='text-center shadow-lg py-4 m-4'>
      <h2 className='fw-bold text-capitalize'> welcome To Ums</h2>
      <p className='mx-auto w-75 my-3 text-muted lh-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Impedit aperiam nemo distinctio labore rem commodi! Delectus
         dolor natus suscipit tempora autem veniam, dolorem libero! Recusandae
         iure soluta fuga, rem sed enim repellendus, dolorem accusantium aliquid,
         molestias nemo maxime! Possimus, debitis.
      </p>
      <img src={welcomePhoto} alt="photo"/>
    </div>
        
      
    </>
  )
}
