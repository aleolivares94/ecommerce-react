const products = [
  {
    id: "1",
    name: "Argentina",
    price: 17000,
    category: "argentina",
    img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/6cd93f7e2b38428ba2f1ae61014291c7_9366/camiseta-titular-seleccion-argentina-messi-10.jpg",
    stock: 25,
    description: "Remera de Messi",
  },
  {
    id: "2",
    name: "Boca",
    price: 10000,
    category: "boca",
    img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/67759df5479b4c3fb4b1ae4d0182efa1_9366/tercera-camiseta-boca-juniors-22-23.jpg",
    stock: 15,
    description: "Remera de boca",
  },
  {
    id: "3",
    name: "River",
    price: 7000,
    category: "river",
    img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/d2df9052fa2b4b8bacddab600105ccaa_9366/chomba-river-plate-3-tiras.jpg",
    stock: 15,
    description: "Remera de River",
  },
  {
    id: "4",
    name: "Argentina",
    price: 7000,
    category: "argentina",
    img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/6cd93f7e2b38428ba2f1ae61014291c7_9366/camiseta-titular-seleccion-argentina-messi-10.jpg",
    stock: 9,
    description: "argentina",
  },
  {
    id: "5",
    name: "Boca",
    price: 12000,
    category: "boca",
    img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/6cd93f7e2b38428ba2f1ae61014291c7_9366/camiseta-titular-seleccion-argentina-messi-10.jpg",
    stock: 6,
    description: "boca",
  },
  {
    id: "6",
    name: "River",
    price: 9000,
    category: "river",
    img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/6cd93f7e2b38428ba2f1ae61014291c7_9366/camiseta-titular-seleccion-argentina-messi-10.jpg",
    stock: 8,
    description: "river",
  },
];

const categories = [
  { id: "argentina", description: "Argentina" },
  { id: "boca", description: "Boca" },
  { id: "river", description: "River" },
];

export const getCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories);
    }, 500);
  });
};

export const getProducts = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        categoryId
          ? products.filter((prod) => prod.category === categoryId)
          : products
      );
    }, 3000);
  });
};

export const getProductsById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === id));
    }, 500);
  });
};
