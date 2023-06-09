import React from 'react';

export default function CardStore() {
  const  dataPc = [
    {
        name : 'PC GAMER (?) AHRE',
        description : 'Una computadora personal (PC) es un dispositivo electrónico diseñado para procesar, almacenar y manejar información de manera rápida y eficiente. Combina componentes como la CPU, memoria, almacenamiento y periféricos',
        price : 15000,
        img : 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name : 'TECLADO GAMER',
        description : 'Un teclado gamer personal electrónico diseñado para jugar hasta altas horas de la noche',
        price : 25000,
        img : 'https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        name : 'AUDIFONOS',
        description : 'Los audífonos son dispositivos de audio portátiles que se colocan sobre o dentro de los oídos para escuchar sonidos y música de forma personal. Están compuestos por altavoces o transductores que convierten las señales eléctricas en ondas sonoras audibles para el usuario',
        price : 45000,
        img : 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name : 'MOUSE GAMER',
        description : 'Un mouse es un dispositivo de entrada comúnmente utilizado con computadoras. Consiste en un dispositivo pequeño y ergonómico que se coloca en la mano del usuario y se utiliza para controlar el movimiento del cursor en la pantalla',
        price : 33000,
        img : 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        name : 'SILLA GAMER',
        description : 'silla diseñada específicamente para brindar comodidad y soporte durante largas sesiones de juego en computadora o consola',
        price : 1533000,
        img : 'https://images.pexels.com/photos/7862606/pexels-photo-7862606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
]

  return (
    <>
      {dataPc.map((item, index) => (
        <div
          className='flex flex-col items-center m-4 shadow-md shadow-[#000] justify-evenly w-[75vw] p-2 font-montserrat text-black font-semibold h-[60vh] border border-[#8b8b8b] rounded-[10px] sm:w-[80%] md:flex-row md:w-[95%] md:h-[40vh] lg:w-[80%] xl:w-[75%]'
          key={index}
        >
          <img
            className='w-[70%] overflow-hidden  rounded-[10px] md:w-[50%] lg:w-[40%] md:h-[100%] object-cover'
            src={item.img}
            alt=""
          />
          <div className='flex flex-col items-center md:w-[50%] lg:w-[60%] md:h-full md:items-start md:p-2 md:justify-between lg:p-4'>
            <p className='p-2 text-start text-[12px] md:p-0 md:text-left lg:text-[14px]'>{item.name + ' ' +  item.description}</p>
            <p className='py-2'>${item.price}</p>
            <p className='text-[30px] tracking-[2px] font-light'>☆☆☆☆☆</p>
            <button className='bg-black w-[38vw] rounded-[10px] md:rounded-[23px] md:w-[20vw] p-2 h-[7vh] lg:w-[12vw]'>
              <p className='text-white'>+ Add to cart</p>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
