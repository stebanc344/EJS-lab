const express = require('express');
const app = express();


const RESTAURANT = {
    name: 'The Green Byte Bistro',
    isOpen: true,
    address: '742 Evergreen Rd, Mapleview, OS 45502',
    phone: '555-321-9876',
    menu: [
      { 
        id: 1,
        name: 'Quantum Quinoa Mushroom Burger',
        price: 13.00,
        rating: 4,
        category: 'mains',
        details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
      },
      { 
        id: 2,
        name: 'Binary Berry Cheesecake',
        price: 10.11,
        rating: 3,
        category: 'desserts',
        details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
      },
      { 
        id: 3,
        name: 'Recursive Rigatoni',
        price: 17.00,
        rating: 5,
        category: 'mains',
        details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
      },
      { 
        id: 4,
        name: 'Pumpkin Pi Squared',
        price: 3.14,
        rating: 5,
        category: 'desserts',
        details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
      },
      { 
        id: 5,
        name: 'Fibonacci String Bean Fries',
        price: 11.23,
        rating: 5,
        category: 'sides',
        details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
      }
    ]
  }

  // Sampled restaurant data
  const restaurant = {
    name: "Delicious Eats",
    address: "123 Food St, Flavor Town",
    phone: "123-456-7890",
    isOpen: true // Change this to false to test the closed message
  };
  
  // Setting up the view engine
  app.set('view engine', 'ejs');
  
  // The homepage
  app.get('/', (req, res) => {
    res.render('home', { restaurant });
  });

  const menuItems = [
    { name: "Cheeseburger", price: 8.99, rating: 4.5, details: "Juicy beef patty with cheese.", category: "Mains" },
    { name: "Chocolate Cake", price: 4.99, rating: 4.7, details: "Rich and moist chocolate cake.", category: "Desserts" },
    { name: "French Fries", price: 2.99, rating: 4.3, details: "Crispy golden fries.", category: "Sides" },
];
  
  // The menu page
  app.get('/menu', (req, res) => {
    res.render('menu', { menuItems });
  });

  app.get('/menu/:category', (req, res) => {
    const category = req.params.category.charAt(0).toUpperCase() + req.params.category.slice(1);
    
    // Menu items 
    const filteredItems = menuItems.filter(item => item.category.toLowerCase() === req.params.category.toLowerCase());
  
    res.render('category', { menuItems: filteredItems, category });
  });

  app.get('/', (req, res) => {
    res.send('Hello There!');
  });

app.listen(3000);







// http://localhost:3000/