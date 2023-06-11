import React, { useState, useRef, useEffect } from 'react'
import NavBar from '../components/NavBar'
import useStore from '../store/store';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from '../../firebase'
import axios from 'axios';

export default function AdminPanel({ allProducts, getAllProducts  }) {
  //declaracion de variables para setear estados:
  const { deleteProducts } = useStore();
  const createProduct = useStore((state) => state.createProduct);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [currentDiv, setCurrentDiv] = useState(1)
  //variables para capturar datos en crear un producto nuevo:
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [images, setImages] = useState('');
  //variable que permite el uso de firebase en el componente
  const storage = getStorage(app);
  


  //productos que llegan de manera global para ser mapeados y consumir los datos del backend:
  useEffect(() => {
    if (!allProducts?.length) {
      getAllProducts();
    }
  }, []);



  //funciones para llenar los inputs con los datos del producto seleccionado:
  const handleProductChange = (e) => {
    const productName = e.target.value;
    const product = allProducts.find((item) => item.name === productName);
    setSelectedProduct(product);
  };

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    if (selectedCheckboxes.includes(value)) {
      setSelectedCheckboxes(selectedCheckboxes.filter(item => item !== value));
    } else {
      setSelectedCheckboxes([...selectedCheckboxes, value]);
    }
  };

 
  //creacion del data de nuevo producto y envio de datos al back
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Subir las imágenes al almacenamiento de Firebase y obtener sus URLs
    const uploadPromises = [];
    const imageUrls = [];

    for (let i = 0; i < images.length; i++) {
      const imageFile = images[i];
      const storageRef = ref(storage, `images/${imageFile.name}`);
      const uploadPromise = uploadBytes(storageRef, imageFile)
        .then(() => getDownloadURL(storageRef))
        .then((imageUrl) => {
          imageUrls.push(imageUrl);
        });

      uploadPromises.push(uploadPromise);
    }

    try {
      // Esperar a que se completen todas las cargas de imágenes
      await Promise.all(uploadPromises);

      // Crear el objeto newProduct con las URLs de las imágenes
      const newProduct = {
        name,
        description,
        brand,
        category,
        price,
        quantity,
        images: imageUrls,
      };

      // Llamar a la función createProduct en el almacén de Zustand
      const res = await createProduct(newProduct);
      console.log(res, 'Producto creado');
      console.log(newProduct);
    } catch (error) {
      console.log("Error al cargar las imágenes o crear el producto:", error);
    }
  };



 

//captura de id para aplicar el delete a un/varios producto/os:
function handleDelete(e) {
  e.preventDefault();
  let dataDelete = {
    data: {
      selectedCheckboxes
    }
  };
  deleteProducts(dataDelete) // Llama a la función deleteProducts pasando los datos
    .then(() => {
      console.log('borrado con exito');
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(dataDelete);
}


  //funciones para renderizar pantallas de create product
  const oneClick = () => {
    setCurrentDiv(1)
  }
  const handleOneClick = () => {
    setCurrentDiv(2)
  }
  const handleTwoClick = () => {
    setCurrentDiv(3)
  }

  //funcion para incrementar la cantidad de productos

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };


  return (

    <>
      <NavBar />
      <div className='w-full h-[10vh] bg-black'></div>
      <div className='flex flex-col w-full min-h-[100vh] bg-white '>
        <div className='border border-black min-h-[70vh] w-full flex flex-col'>
          <div className='w-[100%] min-h-[100vh] border border-red-900 flex flex-col items-center justify-around'>

            {/*Div contenedor del apartado create product, el condicional maneja los estados para renderizar las vistas*/}

            {currentDiv === 1 &&
              <form onSubmit={handleSubmit} className='w-[90%] p-2 min-h-[90vh] mt-4 flex flex-col items-center pl-2 justify-around bg-[#0000000e] text-black shadow-md shadow-[#000000a8] rounded-[15px]' action="">
                <p className='font-bold w-[50vw] h-[6vh] py-3 rounded-[10px] text-center  bg-[#1b781362] font-montserrat  text-[14px]'>Create new product</p>
                <input placeholder='Product name' className='h-[5vh] w-[95%] bg-[#d6d6d6] rounded-[5px] placeholder:pl-2' type="text" name="" id="" onChange={(e) => setName(e.target.value)} />
                <textarea placeholder='Description' className='bg-[#d6d6d6] rounded-[3px] resize-none w-[95%]' rows={5} cols={35} onChange={(e) => setDescription(e.target.value)} />
                <input placeholder='Brand' className='h-[5vh] w-[95%] bg-[#d6d6d6] rounded-[5px] placeholder:pl-2' type="text" name="" id="" onChange={(e) => setBrand(e.target.value)} />
                <select className='w-[95%] h-[5vh] pl-2 text-[#4c4c4c66] font-medium rounded-[5px] bg-[#9797974e]  ' onChange={(e) => setCategory(e.target.value)} name="select">
                  <option value="" disabled selected hidden>Select category</option>
                  {allProducts.map((item, index) => (<option value={item.category} >{item.category}</option>))}
                </select>
                <input placeholder='Insert price' className='h-[5vh] w-[95%]  bg-[#d6d6d6] rounded-[5px] placeholder:pl-2' type="text" name="" id="" onChange={(e) => setPrice(e.target.value)} />
                <div className=' flex flex-col h-[10vh] w-[95%]  rounded-[5px] bg-[#9797974e]'>
                  <p className='font-medium text-[#4c4c4c66] pl-2'>Quantity:</p>
                  <div className='w-[full]  flex justify-evenly'>
                    {quantity === 0 ? <div className='w-6 h-6'></div> : <svg onClick={handleDecrease} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                    </svg>}
                    <input className='h-[5vh] w-[20%]  bg-[#fff] rounded-[5px] placeholder:pl-2 font-bold text-center' type="number" value={quantity} name="" id="" onChange={(e) => setQuantity(e.target.value)} />
                    <svg onClick={handleIncrease} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </div>
                </div>
                <div className='w-[95%] h-[10vh]'>
                  <p className='font-medium text-[#4c4c4c66]'>Insert the images:</p>
                  <input multiple className='h-[5vh] w-[95%] bg-[#d6d6d6] rounded-[5px] placeholder:pl-2' type="file" name="" id="" onChange={(e) => setImages(e.target.files)} />
                </div>
                <button className='w-[40vw] h-[5vh] rounded-[10px] bg-black' type='submit'>
                  <p className='text-white font-bold tracking-[2px]'>Create</p>
                </button>
              </form>}

            {/*Div contenedor del apartado edit product */}

            {currentDiv === 2 && <form onSubmit={handleSubmit} className='w-[90%] mt-4 p-2 min-h-[90vh] flex flex-col items-center pl-2 justify-around bg-[#0000000e] text-black shadow-md shadow-[#000000a8] rounded-[15px]' action="">
              <p className='font-bold w-[50vw] h-[6vh] py-3 rounded-[10px] text-center  bg-[#00013578] font-montserrat text-[14px]'>Edit a product</p>
              <select className='w-[95%] h-[5vh] pl-2 text-[#4c4c4c66] font-medium rounded-[5px] bg-[#9797974e]  ' onChange={(e) => setCategory(e.target.value)} name="select">
                <option value="" disabled selected hidden>Choose the product to edit</option>
                {allProducts.map((item, index) => (<option className='w-[95%]' value={item.name} > {item.name} </option>))}
              </select>
              <input placeholder='Insert the new product name' className='h-[5vh] w-[95%] bg-[#d6d6d6] rounded-[5px] placeholder:pl-2' type="text" name="" id="" onChange={(e) => setName(e.target.value)} />
              <textarea placeholder='Insert the new description' className='bg-[#d6d6d6] rounded-[3px] resize-none w-[95%]' rows={5} cols={35} onChange={(e) => setDescription(e.target.value)} />
              <input placeholder='Insert the new brand' className='h-[5vh] w-[95%] bg-[#d6d6d6] rounded-[5px] placeholder:pl-2' type="text" name="" id="" onChange={(e) => setBrand(e.target.value)} />
              <input placeholder='Insert the new category' className='h-[5vh] w-[95%] bg-[#d6d6d6] rounded-[5px] placeholder:pl-2' type="text" name="" id="" onChange={(e) => setBrand(e.target.value)} />
              <input placeholder='Insert the new price' className='h-[5vh] w-[95%]  bg-[#d6d6d6] rounded-[5px] placeholder:pl-2' type="text" name="" id="" onChange={(e) => setPrice(e.target.value)} />
              <div className=' flex flex-col h-[10vh] w-[95%]  rounded-[5px] bg-[#9797974e]'>
                <p className='font-medium text-[#4c4c4c66] pl-2'>Insert the new quantity:</p>
                <div className='w-[full]  flex justify-evenly'>
                  {quantity === 0 ? <div className='w-6 h-6'></div> : <svg onClick={handleDecrease} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                  </svg>}
                  <input className='h-[5vh] w-[20%]  bg-[#fff] rounded-[5px] placeholder:pl-2 font-bold text-center' type="number" value={quantity} name="" id="" onChange={(e) => setQuantity(e.target.value)} />
                  <svg onClick={handleIncrease} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </div>
              <div className='w-[95%] h-[10vh]'>
                <p className='font-medium text-[#4c4c4c66]'>Insert the new images:</p>
                <input multiple className='h-[5vh] w-[95%] bg-[#d6d6d6] rounded-[5px] placeholder:pl-2' type="file" name="" id="" onChange={(e) => setImages(e.target.value)} />
              </div>
              <button className='w-[40vw] h-[5vh] rounded-[10px] bg-black' type='submit'>
                <p className='text-white font-bold tracking-[2px]'>Edit</p>
              </button>
            </form>}

            {/*Div contenedor del apartado delete product */}

            {currentDiv === 3 && <form onSubmit={handleDelete} className='w-[90%] p-2 mt-4 min-h-[80] flex flex-col items-center pl-2 justify-around bg-[#0000000e] text-black shadow-md shadow-[#000000a8] rounded-[15px]' action="">
              <p className='font-bold w-[50vw] h-[6vh] py-3 rounded-[10px] text-center  bg-[#b81212a1] font-montserrat  text-[14px]'>Delete a product</p>
              <div className='w-[95%] h-[80vh] cursor-pointer p-2 py-4 overflow-auto flex flex-col justify-start'>
                {allProducts.map((item) => (
                  <label
                    onClick={() => {
                      const checkbox = document.getElementById(item._id);
                      checkbox.checked = !checkbox.checked;
                    }}
                    className='flex w-[95%] m-1 p-1 bg-[#9797974e] rounded-[5px]  h-[8vh] text-[10px] border border-black justify-start items-center'
                    htmlFor={item._id}
                    key={item._id}
                  >
                    <input
                      onChange={handleCheckboxChange}
                      id={item._id}
                      value={item._id}
                      type="checkbox"
                    />
                    <div

                      className='pl-2 font-montserrat'
                    >
                      {item.name}
                    </div>
                  </label>
                ))}

              </div>
              <button className='w-[40vw] h-[5vh] rounded-[10px] bg-black' type='submit'>
                <p className='text-white font-bold tracking-[2px]'>Delete</p>
              </button>
            </form>}

            {/*Div contenedor de los botones para interfaz de products, las funciones onClick renderizan las vistas */}

            <div className='mt-4 mb-4 w-[90%] h-[5vh] flex items-center justify-evenly'>
              <div onClick={oneClick} className='flex justify-center items-center w-[15vw] h-[5vh] bg-[#000000ce] rounded-[15px] cursor-pointer shadow-md shadow-[#000000a6] hover:scale-[.9]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              </div>
              <div onClick={handleOneClick} className='flex justify-center items-center w-[15vw] h-[5vh] bg-[#000000ce] rounded-[15px] cursor-pointer shadow-md shadow-[#000000a6] hover:scale-[.9]'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
              </div>
              <div onClick={handleTwoClick} className='flex justify-center items-center w-[15vw] h-[5vh] bg-[#000000ce] rounded-[15px] cursor-pointer shadow-md shadow-[#000000a6] hover:scale-[.9]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
              </div>
            </div>
          </div>

            {/*Div contenedor del apartado stock & stats */}

          <div className='w-[100%] h-[70vh] border border-green-800 flex flex-col items-center justify-around'>
            <p>Load Stock & Stats</p>
            <form className='w-[90%] h-[75%] bg-green-400' action="">

            </form>
          </div>
        </div>

            {/*Div contenedor del apartado shipments */}

        <div className='w-full h-[70vh] bg-pink-500 flex flex-col items-center'>
          <p>Manege Shipments</p>
        </div>
      </div>
    </>
  )
}



/* Description 
Images 3
Brand 
Price
Category 
Quantity */