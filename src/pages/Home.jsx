import React from 'react'

function Home() {
  return (
    <div>
          <section style={{backgroundImage:"url(https://www.solustrust.ca/-/media/rj/dotcom-canada/images/commentary-and-insights/tax-planning/donating-securities-1110x360.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover" , height:"600px",backgroundPosition:"center" ,backgroundAttachment: 'fixed', }}
          className='d-flex  justify-content-center align-items-center' >
<div 
  className=' gap-4 text-dark text-center' 
  style={{
    fontSize: "30px",
    fontWeight: "bold",
    margin: "90px"
  }}>
               <img src="https://png.pngtree.com/png-vector/20221226/ourmid/pngtree-donation-box-and-charity-concept-png-image_6538298.png" alt="" />

     <p>
            At <strong>GiveCalc</strong>, we believe every donation makes a difference. 
            Our smart calculation tools help you understand exactly how your 
            contribution creates impact.
          </p>
          <p>
            Whether you're donating <span className="text-dark">$5 or $500</span>, 
            our transparent calculator shows you how many meals, school supplies, 
            or medical supplies your gift can provide.
          </p>
        </div>
         </section>
           <section style={{backgroundImage:"url(https://www.shutterstock.com/image-vector/donate-vector-colored-horizontal-banner-600nw-1016215984.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover" , height:"300px",backgroundPosition:"center",backgroundAttachment: 'fixed', }} >
         </section>
    </div>
  )
}

export default Home