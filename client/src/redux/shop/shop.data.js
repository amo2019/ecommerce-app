const SHOP_DATA = [
  {
  hats: {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Sport Cap',
        imageUrl: 'https://i.ibb.co/wd9pnfk/black-cap.jpg',
        price: 25
      },
      {
        id: 2,
        name: 'White Hat',
        imageUrl: 'https://i.ibb.co/tpbYrZB/white-hat.jpg',
        price: 18
      },
      {
        id: 3,
        name: 'Women Cowboy Hat',
        imageUrl: 'https://i.ibb.co/7nzHtyn/cowboy-hat.jpg',
        price: 35
      },
      {
        id: 4,
        name: 'Stylish Hat',
        imageUrl: 'https://i.ibb.co/5W1j52y/stylish-hat.jpg',
        price: 25
      },
      {
        id: 5,
        name: 'Brown Hat',
        imageUrl: 'https://i.ibb.co/6W78dbn/brown-hat.jpg',
        price: 18
      },
      {
        id: 6,
        name: 'Gray Brim',
        imageUrl: 'https://i.ibb.co/tpbYrZB/white-hat.jpg',
        price: 14
      },
      {
        id: 7,
        name: 'Yellow Hat',
        imageUrl: 'https://i.ibb.co/XjCZf1q/yellowish-hat.jpg',
        price: 18
      },
      {
        id: 8,
        name: 'Black Brim',
        imageUrl: 'https://i.ibb.co/NskYCdd/white-hat-woman.jpg',
        price: 14
      },
      {
        id: 9,
        name: 'Brown Hat',
        imageUrl: 'https://i.ibb.co/6W78dbn/brown-hat.jpg',
        price: 16
      }
    ]
  },
  sneakers: {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Buscas Shoes',
        imageUrl: 'https://i.ibb.co/ccv1Tw2/buscas-shoes.jpg',
        price: 220
      },
      {
        id: 11,
        name: 'Summer Shoes',
        imageUrl: 'https://i.ibb.co/3FS8hjp/summer-shoes.jpg',
        price: 280
      },
      {
        id: 12,
        name: 'Li-ning Shoes',
        imageUrl: 'https://i.ibb.co/cXfdFw5/li-ning-shoes.jpg',
        price: 110
      },
      {
        id: 13,
        name: 'White Sneakers ',
        imageUrl: 'https://i.ibb.co/F7BG6mQ/white-sneakers.jpg',
        price: 160
      },
      {
        id: 14,
        name: 'Dress Shoes',
        imageUrl: 'https://i.ibb.co/bK19QKQ/Dress-Shoes.jpg',
        price: 160
      },
      {
        id: 15,
        name: 'Men Slip Shoes',
        imageUrl: 'https://i.ibb.co/qpcNbVN/men-slip.jpg',
        price: 160
      },
      {
        id: 16,
        name: 'Spring Men Shoes',
        imageUrl: 'https://i.ibb.co/TcwskHD/Spring-Men-Shoes.jpg',
        price: 190
      },
      {
        id: 17,
        name: 'DECARSDZ',
        imageUrl: 'https://i.ibb.co/4mS6WM1/Casual-Walking-Shoes.jpg',
        price: 200
      }
    ]
  },
  jackets: {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Blue Coat',
        imageUrl: 'https://i.ibb.co/8g8P9tY/blue-coat.jpg',
        price: 125
      },
      {
        id: 19,
        name: 'Green Jacket',
        imageUrl: 'https://i.ibb.co/sw5ccyy/green-jacket.jpg',
        price: 90
      },
      {
        id: 20,
        name: 'Classic Jacket',
        imageUrl: 'https://i.ibb.co/g6fschY/classic-jacket.jpg',
        price: 90
      },
      {
        id: 21,
        name: 'Blue Jacket',
        imageUrl: 'https://i.ibb.co/55CXZB3/blue-jacket.jpg',
        price: 165
      },
      {
        id: 22,
        name: 'Gray Jacket',
        imageUrl: 'https://i.ibb.co/2h4qT3T/Winter-Long-Jacket.jpg',
        price: 185
      }
    ]
  },
  womens: {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Summer Dress',
        imageUrl: 'https://i.ibb.co/Q9H68RP/floral-skirt.jpg',
        price: 25
      },
      {
        id: 24,
        name: 'Work Dress',
        imageUrl: 'https://i.ibb.co/X7jh9Gp/work-dresses.jpg',
        price: 20
      },
      {
        id: 25,
        name: 'Swing Green Dress',
        imageUrl: 'https://i.ibb.co/NZ9MXx7/swing-dress-green.jpg',
        price: 80
      },
      {
        id: 26,
        name: 'Red Bikini',
        imageUrl: 'https://i.ibb.co/fkjjGC7/bikini.jpg',
        price: 80
      },
      {
        id: 27,
        name: 'Business Dress',
        imageUrl: 'https://i.ibb.co/BzbwvbW/Business-Dress.jpg',
        price: 45
      },
      {
        id: 28,
        name: 'Classy Cubicle',
        imageUrl: 'https://i.ibb.co/YXwQRgV/classy-cubicle.jpg',
        price: 135
      },
      {
        id: 29,
        name: 'Elegant Costume',
        imageUrl: 'https://i.ibb.co/PFQBqc0/elegant-costume.jpg',
        price: 20
      }
    ]
  },
  mens: {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'White Shirt',
        imageUrl: 'https://i.ibb.co/sw2f4QY/white-shirt.jpg',
        price: 325
      },
      {
        id: 31,
        name: 'Black T-shirt',
        imageUrl: 'https://i.ibb.co/nffrRyJ/black-T-shirt.jpg',
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/WWzYhx4/Black-White-Longsleeve.jpg',
        price: 25
      },
      {
        id: 33,
        name: 'White T-shirt',
        imageUrl: 'https://i.ibb.co/d028fWc/white-tshirt.jpg',
        price: 25
      },
      {
        id: 34,
        name: 'Striped Shirt',
        imageUrl: 'https://i.ibb.co/TWY7VBf/Striped-Shirt.jpg',
        price: 40
      },
      {
        id: 35,
        name: 'Black Longsleeve',
        imageUrl: 'https://i.ibb.co/2SwSsf4/Black-Longsleeve.jpg',
        price: 25
      }
    ]
  }
}
];

export default SHOP_DATA;
