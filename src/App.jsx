import { useRef, useState } from 'react'
import back from './assets/back-icon.png'
import next from './assets/next-icon.png'
import user1 from './assets/user-1.png'
import user2 from './assets/user-2.png'
import user3 from './assets/user-3.png'
import user4 from './assets/user-4.png'
import React from "react";
function App() {

  const slider = useRef();
  let tx = 0;
  const nextSlide = () => {
    if(tx > -50){
      tx -= 25;
    }slider.current.style.transform =`translateX(${tx}%)`;

  }
  const prevSlide = () => {
    if(tx < 0){
      tx += 25;
    }slider.current.style.transform =`translateX(${tx}%)`;


  }
  // fromsubmit 
  
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8ea6e567-84bc-4799-9888-8e4977ce605e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (

    <>

      <div className="relative mx-auto py-[80px] transition-all  w-[1270px] ">
        <img className='absolute top-1/2 translate-y-1/2 w-[50px] h-[50px] rounded-full bg-[#212EA0] cursor-pointer p-4 left-[-50px] border' src={back} alt="" onClick={prevSlide} />
        <img className='absolute top-1/2 p-4  rounded-full w-[50px] bg-[#212EA0] translate-y-1/2 right-[-50px] border  cursor-pointer' src={next} alt="" onClick={nextSlide} />

        {/* slider */}
        <div className="overflow-hidden transition-all ">
          <ul className='flex w-[200%] overflow-x-hidden  transition-all  ' ref={slider}>
            <li className='w-1/2 p-[20px]'>
              <div className="shadow-lg p-10">

                <div className="flex  gap-8 items-center">
                  <img className='w-[15%] rounded-full p-1 bg-blue-800' src={user1} />
                  <div className="flex gap-5">
                    <h3>Ahasainul</h3>
                    <h4>Bangladesh</h4>
                  </div>
                </div>
                <div className="px-10 pt-5">
                  <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt deleniti rem esse quas pariatur quod qui reiciendis maiores tempore eveniet.</p>
                </div>


              </div>
            </li>
            <li className='w-1/2 p-[20px]'>
              <div className="shadow-lg p-10">

                <div className="flex  gap-8 items-center">
                  <img className='w-[15%] rounded-full  p-1 bg-red-800 ' src={user2} />
                  <div className="flex gap-5">
                    <h3>Ahasainul</h3>
                    <h4>Bangladesh</h4>
                  </div>
                </div>
                <div className="px-10 pt-5">
                  <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt deleniti rem esse quas pariatur quod qui reiciendis maiores tempore eveniet.</p>
                </div>


              </div>
            </li>
            <li className='w-1/2 p-[20px]'>
              <div className="shadow-lg p-10">

                <div className="flex  gap-8 items-center">
                  <img className='w-[15%] rounded-full  p-1 bg-red-800 ' src={user3} />
                  <div className="flex gap-5">
                    <h3>Ahasainul</h3>
                    <h4>Bangladesh</h4>
                  </div>
                </div>
                <div className="px-10 pt-5">
                  <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt deleniti rem esse quas pariatur quod qui reiciendis maiores tempore eveniet.</p>
                </div>


              </div>
            </li>
            <li className='w-1/2 p-[20px]'>
              <div className="shadow-lg p-10">

                <div className="flex  gap-8 items-center">
                  <img className='w-[15%] rounded-full  p-1 bg-red-800 ' src={user4} />
                  <div className="flex gap-5">
                    <h3>Ahasainul</h3>
                    <h4>Bangladesh</h4>
                  </div>
                </div>
                <div className="px-10 pt-5">
                  <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt deleniti rem esse quas pariatur quod qui reiciendis maiores tempore eveniet.</p>
                </div>


              </div>
            </li>



          </ul>

        </div>



      </div>
    <div className="w-[1170px] mx-auto">

      <form className='flex justify-center flex-col' onSubmit={onSubmit} >
      <label > Your name</label> 
      <input  className='border  w-[200px]'  type="text" name='name' placeholder='enter uour name' required />
      <label > Your number</label>
      <input className='border   w-[200px] ' type="number"  name="number" />
      <label > textariya</label>
      <textarea name="massage" rows={6}  className='border  w-[200px]' placeholder='enter your commont' ></textarea>
      <button type='submit' className='ml-[-1100px]'>submit</button>
      </form>
      <span>{ result}</span>
      {/* jj */}
      {/* <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" required/>
        <input type="email" name="email" required/>
        <textarea name="message" required></textarea>

        <button type="submit">Submit Form</button>

      </form>
      <span>{result}</span>

    </div> */}
    </div>





    </>
  )
}

export default App
