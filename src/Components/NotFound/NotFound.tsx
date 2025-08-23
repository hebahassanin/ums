import notFoundImg from '../../assets/imgs/404-not-found.png';

export default function NotFound() {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <img src={notFoundImg} alt="notfound photo" className='w-50 '/>
    </div>
  )
}
