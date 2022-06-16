import React, { useEffect, useRef } from 'react';
import './menu.css';
import MenuItem from '../MenuItem/MeniItem';
import { gsap } from 'gsap';
import Logo from '../Logo/Logo'

function Menu() {

  const products = [
    {
      id: 1,
      image: "https://cdn.pixabay.com/photo/2018/02/18/19/07/cake-3163117__340.jpg",
      title: "Selva Negra",
      price: 2500,
    },
    {
      id: 1,
      image: "https://cdn.pixabay.com/photo/2019/07/28/05/19/sweets-4367949__340.jpg",
      title: "Cookies bañadas",
      price: 2500,
    },
    {
      id: 1,
      image: "https://cdn.pixabay.com/photo/2017/03/15/19/18/tartlet-2147173__480.jpg",
      title: "Lemon Pie",
      price: 2500,
    },
    {
      id: 1,
      image: "https://cdn.pixabay.com/photo/2022/01/06/12/00/brownies-6919343__340.jpg",
      title: "Brownies",
      price: 2500,
    },
    {
      id: 1,
      image: "https://media.istockphoto.com/photos/homemade-strawberry-cheesecake-on-blue-wooden-background-picture-id695439024?b=1&k=20&m=695439024&s=170667a&w=0&h=35ara-TZfAnD0Wn53UNSC-csWaXQyvcYMV2Cxnv7wNQ=",
      title: "Cheese Cake",
      price: 2500,
    },
    {
      id: 1,
      image: "https://media.istockphoto.com/photos/chocolate-cakes-chocolate-pies-wood-background-icing-sugar-strawberry-picture-id1146693456?b=1&k=20&m=1146693456&s=170667a&w=0&h=cgMp9GBo2JyqrJZR_dFk5YiOZH1I1VCubQSPNq9vbno=",
      title: "Torta de frutillas",
      price: 2500,
    },
    {
      id: 1,
      image: "https://media.istockphoto.com/photos/delicious-summer-cake-pavlova-with-whipped-cream-and-fresh-strawberry-picture-id1149144188?b=1&k=20&m=1149144188&s=170667a&w=0&h=k_Rln4LEQG4LRKQlo-qUF0siNPRvj04DVe3g8qxO088=",
      title: "Marqueese",
      price: 2500,
    },
    {
      id: 1,
      image: "https://media.istockphoto.com/photos/typical-fried-sweet-potato-and-quince-pastries-on-a-tray-accompanied-picture-id1345211696?b=1&k=20&m=1345211696&s=170667a&w=0&h=rV96PWEPJkmyHivk3JktT0lz2fTUQUdxZRF16erf8XI=",
      title: "Pastelitos",
      price: 2500,
    },
    {
      id: 1,
      image: "https://cdn.pixabay.com/photo/2017/05/04/21/23/cupcakes-2285209__340.jpg",
      title: "Muffins",
      price: 2500,
    },
    {
      id: 1,
      image: "https://media.istockphoto.com/photos/alfahores-cookies-with-condensed-milk-on-a-gray-plate-picture-id1313661204?b=1&k=20&m=1313661204&s=170667a&w=0&h=PkWr76FI2kibAfi_y3Ppj8kvCoeYdfvzyGAIOYDWrLo=",
      title: "Alafajores",
      price: 2500,
    },
    {
      id: 1,
      image: "https://media.istockphoto.com/photos/homemade-apple-cake-picture-id529114260?b=1&k=20&m=529114260&s=170667a&w=0&h=mQyHGAZsOlH5rKWX4Ux3PEjxhTkOuid12KGkpmYGPBo=",
      title: "Torta de manzanas",
      price: 2500,
    },
    {
      id: 1,
      image: "https://media.istockphoto.com/photos/meringue-cake-with-chocolate-mousse-and-berries-picture-id600055848?b=1&k=20&m=600055848&s=170667a&w=0&h=7UQ7lVAGva2UFMr_UcPYPb-bNMz25PjBWFSi5axTHCU=",
      title: "Torta de crema",
      price: 2500,
    },
    {
      id: 1,
      image: "https://cdn.pixabay.com/photo/2016/03/27/22/38/cake-1284548__340.jpg",
      title: "Cheese Cake frutal",
      price: 2500,
    },
    {
      id: 1,
      image: "https://cdn.pixabay.com/photo/2019/10/11/06/33/brownie-cake-4541198__340.jpg",
      title: "Mini tortas",
      price: 2500,
    },

  ];

  const menuRef = useRef();
  const imgContainerRef = useRef();
  const tl = useRef();

  const imgContainer = gsap.utils.selector(imgContainerRef);

  useEffect(() => {

    gsap.to(menuRef.current, { y: 80, duration: 3 });

    tl.current = gsap.timeline()
      .to(imgContainer(".menuItem-container"), {
        duration: 1.5,
        opacity: 1,
        scale: 1,
        delay: 0.5,
        stagger: 1,
        rotate: 360,
      })
  }, [])

  return (
    <div>
      <div className='subtitle-background'>
        <h2 ref={menuRef}>Nuestras delicias:</h2>
        <Logo />
      </div>
      <div className='menu-container' ref={imgContainerRef}>
        {products.map((item, index) => (
          <MenuItem key={index} title={item.title} price={item.price} image={item.image} id={item.id} />
        ))}
      </div>
    </div>
  )
}

export default Menu