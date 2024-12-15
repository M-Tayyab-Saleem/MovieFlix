// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { db } from "../config/firebase-config";
// import { getDocs, collection,  } from "firebase/firestore";
// import { storage } from '../config/firebase-config';

// import "./ImageUpload.css"

// const ImageUpload = () => {
//   const [image, setImage] = useState(null)
//   const navigate = useNavigate()

//   const handle = async ()=>{
//      navigate("/")
//   }

//   return (
//     <div className="image-upload-container">
//       <div className="image-upload-box">
//         <h2>Upload Image</h2>
        
//         <form onSubmit={handle} className="image-upload-form">
//           <div className="">
          
//             <input
//               type="file"
//               onChange={(e)=> setImage(e.target.files[0])}
              
//               className="image-input"
//             />
//           </div>

//           <button 
//             type="submit" 
//             className="upload-button"
    
//           >
//             Upload Image
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default ImageUpload
