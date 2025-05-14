function HomePage(){
    return(
        <>

<div className="grid xl:grid-cols-1 grid-cols-1">
  <div className="p-5">
    <div className="py-3 px-3 rounded-xl border w-full bg-green-900">
      <div className="flex justify-between items-center">
        <div className="flex justify-items-center items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
          </svg>
          <p className=" font-semibold text-white">LOGO</p>
          <div style={{position: 'relative'}}>
            <input className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block" placeholder="Search for Grocery, Stores, Vegetable, or Meat" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-green-900 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
        </div>
        <div className="flex justify-items-center items-center gap-2 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-300 hidden lg:block md:block">
            <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
          </svg>
          <p className="text-sm text-white hidden lg:block md:block">Order now and get it within
            <span className="text-yellow-300">15 mint!</span></p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-white rounded-full ring-2 ring-white p-1 relative">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            {/* <text x="13" y="8" class="text-xs text-yellow-300">2</text> Adjust position as needed */}
          </svg>
          <img className="inline-block w-8 h-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt />
        </div>
      </div>
    </div>
  </div>
</div>
<section className="pt-12">
  <div className="bg-[#C2EFD4] mx-auto w-[1400px] relative flex justify-around items-center">
    <div className="absolute left-10 bottom-0 w-[156px] h-[110px] grid grid-cols-4  ">
      <div className="w-2 h-2  bg-[#328b55] rounded-full" />
      <div className="w-2 h-2  bg-[#328b55] rounded-full" />
      <div className="w-2 h-2  bg-[#328b55] rounded-full" />
      <div className="w-2 h-2  bg-[#328b55] rounded-full" />
      <div className="w-2 h-2  bg-[#328b55] rounded-full" />
      <div className="w-2 h-2  bg-[#328b55] rounded-full" />
      <div className="w-2 h-2  bg-[#328b55] rounded-full" />
      <div className="w-2 h-2  bg-[#328b55] rounded-full" />
      <div className="w-2 h-2  bg-[#328b55] rounded-full" />
      <div className="w-2 h-2  bg-[#328b55] rounded-full" />
      <div className="w-2 h-2  bg-[#328b55] rounded-full" />
      <div className="w-2 h-2  bg-[#328b55] rounded-full" />
    </div><img src="https://iili.io/3Bvpo4R.png" alt />
    <div className="w-[589px] h-[447px] rounded-[3px]">
      <h2 className="  text-[#224f34] text-[46px] font-bold font-['Roboto_Slab']">Exclusive offer</h2>
      <p className="w-[589px] text-[#224f34] text-[22px] font-medium font-['Poppins'] leading-9">Unlock the ultimate style
        upgrade with our exclusive offer Enjoy savings of up to 40% off on our latest New Arrivals</p>
      <div className="flex gap-9 my-10 font-['Poppins'] ">
        <div className="w-[100px] h-[100px] text-center py-4 bg-white rounded-[3px] shadow-[0px_7px_30px_0px_rgba(0,0,0,0.05)]">
          <span className=" block text-[#224f34] text-[32px] font-semibold">06</span><span className=" block text-[#224f34] text-base font-medium">Days</span>
        </div>
        <div className="w-[100px] h-[100px] text-center py-4 bg-white rounded-[3px] shadow-[0px_7px_30px_0px_rgba(0,0,0,0.05)]">
          <span className=" block text-[#224f34] text-[32px] font-semibold">18</span><span className=" block text-[#224f34] text-base font-medium">Hours</span>
        </div>
        <div className="w-[100px] h-[100px] text-center py-4 bg-white rounded-[3px] shadow-[0px_7px_30px_0px_rgba(0,0,0,0.05)]">
          <span className=" block text-[#224f34] text-[32px] font-semibold">48</span><span className=" block text-[#224f34] text-base font-medium">min</span>
        </div>
      </div>
      <button className=" px-16 py-5   bg-[#224f34] rounded-[3px] shadow-[0px_7px_30px_0px_rgba(0,0,0,0.05)]   text-white text-xl font-medium font-['Poppins'] uppercase">BUY NOW</button>
    </div>
  </div>
</section>

<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img className="p-8 rounded-t-lg" src="https://flowbite.com/docs/images/products/apple-watch.png" alt="product image" />
  </a>
  <div className="px-5 pb-5">
    <a href="#">
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
    </a>
    <div className="flex items-center mt-2.5 mb-5">
      <div className="flex items-center space-x-1 rtl:space-x-reverse">
        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      </div>
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
      <button className="button">
        <span className="label">+ Add to card</span>
        <span className="gradient-container">
          <span className="gradient" />
        </span>
      </button>
    </div>
  </div>
</div>



        
        </>
    )
}
export default HomePage