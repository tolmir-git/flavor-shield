// Real menu data from Happy London restaurant
export interface MenuItem {
  id: number;
  name: string;
  category: string;
  description?: string;
  price?: string;
  allergens: string[];
  traces?: string[];
}

export const MENU_DATA: MenuItem[] = [
  // Salads
  {
    id: 1,
    name: "Caesar Palace",
    category: "Salads",
    description: "Classic Caesar salad with premium ingredients",
    allergens: ["mustard", "celery", "gluten", "crustaceans", "eggs", "fish", "lupin", "milk", "mollusc", "nuts"],
    traces: ["gluten", "milk"]
  },
  {
    id: 2,
    name: "Vegetarian Protein Salad",
    category: "Salads",
    description: "High-protein vegetarian salad with mixed greens",
    allergens: ["mustard", "celery", "gluten", "crustaceans", "eggs"],
    traces: ["gluten"]
  },
  {
    id: 3,
    name: "Caesar Bowl with Crispy Chicken",
    category: "Salads",
    description: "Caesar salad topped with crispy chicken pieces",
    allergens: ["mustard", "celery", "gluten", "crustaceans", "eggs", "fish", "milk", "mollusc", "nuts"],
    traces: ["gluten", "milk"]
  },
  {
    id: 4,
    name: "Greek Salad",
    category: "Salads",
    description: "Traditional Greek salad with feta cheese",
    allergens: ["mustard", "milk"],
    traces: []
  },
  {
    id: 5,
    name: "Vegetarian Shopska Salad",
    category: "Salads",
    description: "Bulgarian-style salad with fresh vegetables",
    allergens: ["mustard"],
    traces: []
  },
  {
    id: 6,
    name: "Cobb Salad",
    category: "Salads",
    description: "American-style salad with bacon and blue cheese",
    allergens: ["celery", "crustaceans", "fish", "peanuts"],
    traces: ["milk"]
  },
  {
    id: 7,
    name: "Avocado Caprese",
    category: "Salads",
    description: "Fresh mozzarella, tomatoes, and avocado",
    allergens: ["crustaceans", "milk", "soya"],
    traces: []
  },
  {
    id: 8,
    name: "Vegetarian Lady Cobb",
    category: "Salads",
    description: "Vegetarian version of the classic Cobb salad",
    allergens: ["mustard", "celery"],
    traces: []
  },
  {
    id: 9,
    name: "Grilled Chicken Caesar",
    category: "Salads",
    description: "Caesar salad with perfectly grilled chicken breast",
    allergens: ["mustard", "celery", "gluten", "crustaceans", "eggs"],
    traces: ["gluten", "milk"]
  },
  {
    id: 10,
    name: "Caesar with Crispy Chicken",
    category: "Salads",
    description: "Classic Caesar with golden crispy chicken",
    allergens: ["mustard", "celery", "gluten", "crustaceans", "eggs", "nuts"],
    traces: ["gluten", "milk"]
  },
  
  // Starters
  {
    id: 11,
    name: "Pulled Chicken Rolls",
    category: "Starters",
    description: "Tender pulled chicken in soft rolls",
    allergens: ["sesame"],
    traces: ["gluten"]
  },
  {
    id: 12,
    name: "Cheeseburger",
    category: "Starters",
    description: "Mini cheeseburger sliders",
    allergens: ["sesame"],
    traces: ["gluten", "milk"]
  },
  {
    id: 13,
    name: "Lebanese Style Meatballs",
    category: "Starters", 
    description: "Traditional Lebanese meatballs with spices",
    allergens: [],
    traces: []
  },
  {
    id: 14,
    name: "Pulled Beef Loaded Fries",
    category: "Starters",
    description: "Crispy fries topped with pulled beef",
    allergens: [],
    traces: []
  },
  {
    id: 15,
    name: "Crispy Squid Chips",
    category: "Starters",
    description: "Golden crispy squid with seasoning",
    allergens: ["celery"],
    traces: ["crustaceans"]
  },
  {
    id: 16,
    name: "Crispy Chicken Strips",
    category: "Starters",
    description: "Breaded chicken strips with dipping sauce",
    allergens: ["eggs", "lupin"],
    traces: ["crustaceans"]
  },
  {
    id: 17,
    name: "Mac & Cheese Balls",
    category: "Starters",
    description: "Breaded mac and cheese balls",
    allergens: ["milk"],
    traces: []
  },
  {
    id: 18,
    name: "Beef Sliders",
    category: "Starters",
    description: "Mini beef sliders with special sauce",
    allergens: ["nuts"],
    traces: []
  },
  {
    id: 19,
    name: "Humus & Guacamole",
    category: "Starters",
    description: "Fresh humus and guacamole with bread",
    allergens: [],
    traces: []
  },
  {
    id: 20,
    name: "Garlic & Herb Dough Balls",
    category: "Starters",
    description: "Soft dough balls with garlic and herbs",
    allergens: [],
    traces: []
  },
  {
    id: 21,
    name: "Garlic Bread",
    category: "Starters",
    description: "Classic garlic bread",
    allergens: [],
    traces: []
  },
  {
    id: 22,
    name: "Garlic Bread With Cheese",
    category: "Starters",
    description: "Garlic bread topped with melted cheese",
    allergens: [],
    traces: []
  },
  {
    id: 23,
    name: "Fries",
    category: "Starters",
    description: "Crispy golden fries",
    allergens: [],
    traces: []
  },
  {
    id: 24,
    name: "Mozzarella Sticks",
    category: "Starters",
    description: "Breaded mozzarella sticks",
    allergens: [],
    traces: []
  },
  {
    id: 25,
    name: "Sweet Potato Fries",
    category: "Starters",
    description: "Crispy sweet potato fries",
    allergens: [],
    traces: []
  },
  {
    id: 26,
    name: "Truffle Fries",
    category: "Starters",
    description: "Fries with truffle oil and parmesan",
    allergens: [],
    traces: []
  },
  {
    id: 27,
    name: "Cheesy Fries",
    category: "Starters",
    description: "Fries topped with melted cheese",
    allergens: [],
    traces: []
  },

  // Seafood
  {
    id: 28,
    name: "Santorini Prawns",
    category: "Seafood",
    description: "Mediterranean-style prawns",
    allergens: [],
    traces: []
  },
  {
    id: 29,
    name: "Parmigiano",
    category: "Seafood",
    description: "Seafood with parmesan cheese",
    allergens: [],
    traces: []
  },
  {
    id: 30,
    name: "Prawns",
    category: "Seafood",
    description: "Fresh prawns cooked to perfection",
    allergens: [],
    traces: []
  },
  {
    id: 31,
    name: "Crispy Heaven",
    category: "Seafood",
    description: "Mixed crispy seafood platter",
    allergens: [],
    traces: []
  },
  {
    id: 32,
    name: "Happy Fish and Chips",
    category: "Seafood",
    description: "Traditional fish and chips",
    allergens: [],
    traces: []
  },
  {
    id: 33,
    name: "Grilled Calamari",
    category: "Seafood",
    description: "Perfectly grilled calamari rings",
    allergens: [],
    traces: []
  },
  {
    id: 34,
    name: "Crispy Greek Style Calamari",
    category: "Seafood",
    description: "Greek-style battered calamari",
    allergens: [],
    traces: []
  },

  // Asia
  {
    id: 35,
    name: "Bao Bun with Pulled Beef",
    category: "Asia",
    description: "Soft bao buns with tender pulled beef",
    allergens: ["celery", "gluten", "crustaceans", "eggs", "fish", "milk", "peanuts", "soya"],
    traces: []
  },
  {
    id: 36,
    name: "Bao Bun with Crispy Chicken",
    category: "Asia",
    description: "Soft bao buns with crispy chicken",
    allergens: ["celery", "gluten", "crustaceans", "eggs", "fish", "milk"],
    traces: []
  },

  // Mexico
  {
    id: 37,
    name: "Pulled Chicken Nachos",
    category: "Mexico",
    description: "Nachos topped with pulled chicken",
    allergens: [],
    traces: []
  },
  {
    id: 38,
    name: "Chipotle Burrito",
    category: "Mexico",
    description: "Spicy chipotle burrito with your choice of filling",
    allergens: ["celery", "gluten", "crustaceans", "eggs", "fish", "milk"],
    traces: []
  },
  {
    id: 39,
    name: "Black Angus",
    category: "Mexico",
    description: "Premium Black Angus beef dish",
    allergens: ["celery", "gluten", "crustaceans", "eggs", "fish", "lupin", "mollusc", "mustard"],
    traces: []
  },
  {
    id: 40,
    name: "Beef Nachos",
    category: "Mexico",
    description: "Loaded nachos with seasoned beef",
    allergens: [],
    traces: []
  },
  {
    id: 41,
    name: "Black Angus Cuban Sandwich",
    category: "Mexico",
    description: "Cuban-style sandwich with Black Angus beef",
    allergens: [],
    traces: []
  },
  {
    id: 42,
    name: "Chicken Tacos",
    category: "Mexico",
    description: "Soft tacos with seasoned chicken",
    allergens: ["celery", "gluten", "crustaceans", "eggs", "fish", "lupin", "milk", "mollusc", "nuts"],
    traces: []
  },
  {
    id: 43,
    name: "Beef Tacos",
    category: "Mexico",
    description: "Soft tacos with seasoned beef",
    allergens: ["celery", "gluten", "crustaceans", "eggs", "fish", "lupin", "milk", "mollusc", "nuts"],
    traces: []
  },
  {
    id: 44,
    name: "Chicken Quesadilla",
    category: "Mexico",
    description: "Grilled quesadilla with chicken and cheese",
    allergens: ["celery", "gluten", "crustaceans", "eggs", "fish", "lupin", "milk", "mollusc", "nuts"],
    traces: []
  },
  {
    id: 45,
    name: "Quesadilla Pepperoni",
    category: "Mexico",
    description: "Grilled quesadilla with pepperoni and cheese",
    allergens: ["celery", "gluten", "crustaceans", "eggs", "fish", "lupin"],
    traces: []
  },

  // Burgers
  {
    id: 46,
    name: "Double Smash Burger",
    category: "Burgers",
    description: "Double patty smash burger with special sauce",
    allergens: [],
    traces: []
  },
  {
    id: 47,
    name: "Lucky Chicken",
    category: "Burgers",
    description: "Crispy chicken burger with lucky sauce",
    allergens: [],
    traces: []
  },
  {
    id: 48,
    name: "Jack Daniel's Burger",
    category: "Burgers",
    description: "Beef burger with Jack Daniel's BBQ sauce",
    allergens: [],
    traces: []
  },
  {
    id: 49,
    name: "Vegan Burger",
    category: "Burgers",
    description: "Plant-based burger with fresh toppings",
    allergens: [],
    traces: []
  },
  {
    id: 50,
    name: "Top Burger",
    category: "Burgers",
    description: "Our signature premium burger",
    allergens: [],
    traces: []
  },
  {
    id: 51,
    name: "Real Deal",
    category: "Burgers",
    description: "Classic beef burger done right",
    allergens: [],
    traces: []
  },
  {
    id: 52,
    name: "Mr Cheesy Burger",
    category: "Burgers",
    description: "Loaded with multiple cheeses",
    allergens: [],
    traces: []
  },
  {
    id: 53,
    name: "Extra Cheeseburger",
    category: "Burgers",
    description: "Double cheese beef burger",
    allergens: [],
    traces: []
  },
  {
    id: 54,
    name: "Kids Cheeseburger",
    category: "Burgers",
    description: "Child-sized cheeseburger",
    allergens: [],
    traces: []
  },

  // Pasta
  {
    id: 55,
    name: "Spaghetti",
    category: "Pasta",
    description: "Classic spaghetti with tomato sauce",
    allergens: ["mustard", "celery", "gluten", "crustaceans", "eggs", "fish", "lupin", "milk", "mollusc", "nuts", "peanuts", "sesame", "soya", "sulphur"],
    traces: []
  },
  {
    id: 56,
    name: "Carbonara",
    category: "Pasta",
    description: "Traditional carbonara with eggs and pancetta",
    allergens: ["mustard", "celery", "gluten", "crustaceans", "eggs", "fish", "lupin", "milk", "mollusc", "nuts", "peanuts", "sesame", "soya", "sulphur"],
    traces: []
  },
  {
    id: 57,
    name: "Cacio e Pepe",
    category: "Pasta",
    description: "Simple pasta with cheese and black pepper",
    allergens: ["mustard", "celery", "gluten", "crustaceans", "eggs", "fish", "lupin", "milk", "mollusc", "nuts", "peanuts", "sesame", "soya", "sulphur"],
    traces: []
  },
  {
    id: 58,
    name: "Vegetarian Spaghetti Alfredo with Prawns",
    category: "Pasta",
    description: "Creamy alfredo pasta with prawns",
    allergens: ["mustard", "celery", "gluten", "crustaceans", "eggs", "fish", "lupin", "milk", "mollusc", "nuts", "peanuts", "sesame", "soya", "sulphur"],
    traces: []
  },
  {
    id: 59,
    name: "Beef Tagliatelle",
    category: "Pasta",
    description: "Tagliatelle with beef ragu",
    allergens: ["mustard", "celery", "gluten", "crustaceans", "eggs", "fish", "lupin", "milk", "mollusc", "nuts", "peanuts", "sesame", "soya", "sulphur"],
    traces: []
  },
  {
    id: 60,
    name: "Noodles with Chicken",
    category: "Pasta",
    description: "Asian-style noodles with chicken",
    allergens: ["mustard", "celery", "gluten", "crustaceans", "eggs", "fish", "lupin", "milk", "mollusc", "nuts", "peanuts", "sesame", "soya", "sulphur"],
    traces: []
  },
  {
    id: 61,
    name: "Noodles with Beef & Prawns",
    category: "Pasta",
    description: "Asian noodles with beef and prawns",
    allergens: ["mustard", "celery", "gluten", "crustaceans", "eggs", "fish", "lupin", "milk", "mollusc", "nuts", "peanuts", "sesame", "soya", "sulphur"],
    traces: []
  },
  {
    id: 62,
    name: "Yellow Curry with Chicken",
    category: "Pasta",
    description: "Thai yellow curry with chicken",
    allergens: ["mustard", "celery", "gluten", "crustaceans", "eggs", "fish", "lupin", "milk", "mollusc", "nuts", "peanuts", "sesame", "soya", "sulphur"],
    traces: []
  },
  {
    id: 63,
    name: "Yellow Curry with Prawns",
    category: "Pasta",
    description: "Thai yellow curry with prawns",
    allergens: ["mustard", "celery", "gluten", "crustaceans", "eggs", "fish", "lupin", "milk", "mollusc", "nuts", "peanuts", "sesame", "soya", "sulphur"],
    traces: []
  },

  // Chicken
  {
    id: 64,
    name: "Crispy Chicken",
    category: "Chicken",
    description: "Golden crispy fried chicken",
    allergens: [],
    traces: []
  },
  {
    id: 65,
    name: "Guacamole",
    category: "Chicken",
    description: "Fresh guacamole with chicken",
    allergens: [],
    traces: []
  },
  {
    id: 66,
    name: "Mac and Cheese",
    category: "Chicken",
    description: "Creamy mac and cheese with chicken",
    allergens: [],
    traces: []
  },
  {
    id: 67,
    name: "Chicken Strips",
    category: "Chicken",
    description: "Tender chicken strips",
    allergens: [],
    traces: []
  },
  {
    id: 68,
    name: "Chicken Carolina",
    category: "Chicken",
    description: "Carolina-style barbecue chicken",
    allergens: [],
    traces: []
  },
  {
    id: 69,
    name: "Piri-Piri Chicken",
    category: "Chicken",
    description: "Spicy piri-piri grilled chicken",
    allergens: [],
    traces: []
  },
  {
    id: 70,
    name: "Steak",
    category: "Chicken",
    description: "Chicken steak grilled to perfection",
    allergens: [],
    traces: []
  },
  {
    id: 71,
    name: "Chicken Steak",
    category: "Chicken",
    description: "Premium chicken steak",
    allergens: [],
    traces: []
  },
  {
    id: 72,
    name: "Creamy Truffle Chicken Steak",
    category: "Chicken",
    description: "Chicken steak with creamy truffle sauce",
    allergens: [],
    traces: []
  },
  {
    id: 73,
    name: "Porcini Mushroom Chicken Steak",
    category: "Chicken",
    description: "Chicken steak with porcini mushroom sauce",
    allergens: [],
    traces: []
  },
  {
    id: 74,
    name: "Signature Sauce Chicken Caesar Schnitzel",
    category: "Chicken",
    description: "Schnitzel with signature caesar sauce",
    allergens: [],
    traces: []
  },
  {
    id: 75,
    name: "Chicken Parmigiana",
    category: "Chicken",
    description: "Breaded chicken with tomato sauce and cheese",
    allergens: [],
    traces: []
  },

  // Beef
  {
    id: 76,
    name: "Happy Beef Fillets Signature",
    category: "Beef",
    description: "Our signature beef fillet dish",
    allergens: [],
    traces: []
  },
  {
    id: 77,
    name: "Happy Beef Fillets Porcini Mushroom",
    category: "Beef",
    description: "Beef fillet with porcini mushroom sauce",
    allergens: [],
    traces: []
  },
  {
    id: 78,
    name: "Happy Beef Fillets Peppercorn",
    category: "Beef",
    description: "Beef fillet with peppercorn sauce",
    allergens: [],
    traces: []
  },
  {
    id: 79,
    name: "Happy Beef Fillets Creamy Truffle",
    category: "Beef",
    description: "Beef fillet with creamy truffle sauce",
    allergens: [],
    traces: []
  },
  {
    id: 80,
    name: "Philly Steak",
    category: "Beef",
    description: "Classic Philadelphia cheesesteak",
    allergens: [],
    traces: []
  },
  {
    id: 81,
    name: "Beef Burger",
    category: "Beef",
    description: "Premium beef burger",
    allergens: [],
    traces: []
  },
  {
    id: 82,
    name: "Schnitzel",
    category: "Beef",
    description: "Traditional beef schnitzel",
    allergens: [],
    traces: []
  },
  {
    id: 83,
    name: "Mac & Cheese",
    category: "Beef",
    description: "Mac and cheese with beef",
    allergens: [],
    traces: []
  },
  {
    id: 84,
    name: "Beef",
    category: "Beef",
    description: "Classic beef dish",
    allergens: [],
    traces: []
  },
  {
    id: 85,
    name: "Black Pepper Beef",
    category: "Beef",
    description: "Beef with black pepper sauce",
    allergens: [],
    traces: []
  },
  
  // Drinks
  { id: 86, name: 'Dragon fruit lemonade', category: 'Drinks', description: 'Refreshing dragon fruit lemonade', price: '4.50', allergens: [], traces: [] },
  { id: 87, name: 'Passion fruit lemonade', category: 'Drinks', description: 'Tropical passion fruit lemonade', price: '4.50', allergens: [], traces: [] },
  { id: 88, name: 'Strawberry lemonade', category: 'Drinks', description: 'Fresh strawberry lemonade', price: '4.50', allergens: [], traces: [] },
  { id: 89, name: 'Peach lemonade', category: 'Drinks', description: 'Sweet peach lemonade', price: '4.50', allergens: [], traces: [] },
  { id: 90, name: 'Pineapple lemonade', category: 'Drinks', description: 'Tropical pineapple lemonade', price: '4.50', allergens: [], traces: [] },
  { id: 91, name: 'Magic lemonade', category: 'Drinks', description: 'Special house lemonade', price: '5.00', allergens: [], traces: [] },
  { id: 92, name: 'Strawberry matcha latte', category: 'Drinks', description: 'Matcha latte with strawberry', price: '5.50', allergens: ['milk'], traces: [] },
  { id: 93, name: 'Dubai bubble tea', category: 'Drinks', description: 'Premium bubble tea', price: '6.00', allergens: ['milk', 'soya', 'mustard'], traces: [] },
  
  // Cocktails  
  { id: 94, name: 'Movie night', category: 'Drinks', description: 'Special cocktail for movie nights', price: '9.50', allergens: [], traces: [] },
  { id: 95, name: 'Sexy colada', category: 'Drinks', description: 'Tropical colada cocktail', price: '9.50', allergens: [], traces: [] },
  { id: 96, name: 'Kiss & fizz', category: 'Drinks', description: 'Fizzy romantic cocktail', price: '9.50', allergens: [], traces: [] },
  { id: 97, name: 'Bubble crush', category: 'Drinks', description: 'Fruity bubble cocktail', price: '9.50', allergens: [], traces: [] },
  { id: 98, name: 'Pornstar spritz', category: 'Drinks', description: 'Sparkling passion fruit cocktail', price: '10.50', allergens: [], traces: [] },
  { id: 99, name: 'Peachy sour', category: 'Drinks', description: 'Sour peach cocktail', price: '9.50', allergens: [], traces: [] },
  { id: 100, name: 'Dubaitini', category: 'Drinks', description: 'Premium Dubai-style martini', price: '12.50', allergens: ['eggs', 'sulphur'], traces: [] },
  { id: 101, name: 'Magic gin tonic', category: 'Drinks', description: 'House special gin & tonic', price: '8.50', allergens: [], traces: [] },
  { id: 102, name: 'Soho breeze', category: 'Drinks', description: 'Light and refreshing cocktail', price: '9.50', allergens: [], traces: [] },
  { id: 103, name: 'Raspberry kiss', category: 'Drinks', description: 'Sweet raspberry cocktail', price: '9.50', allergens: [], traces: [] },
  { id: 104, name: 'Aperol spritz', category: 'Drinks', description: 'Classic Italian aperitif', price: '8.50', allergens: [], traces: [] },
  { id: 105, name: 'Peachy mojito', category: 'Drinks', description: 'Peach-infused mojito', price: '9.00', allergens: [], traces: [] },
  { id: 106, name: 'Dragon mojito', category: 'Drinks', description: 'Dragon fruit mojito', price: '9.50', allergens: [], traces: [] },
  { id: 107, name: 'Strawberry mojito', category: 'Drinks', description: 'Fresh strawberry mojito', price: '9.00', allergens: [], traces: [] },
  { id: 108, name: 'Mojito', category: 'Drinks', description: 'Classic Cuban mojito', price: '8.50', allergens: [], traces: [] },
  { id: 109, name: 'Lychee martini', category: 'Drinks', description: 'Exotic lychee martini', price: '10.50', allergens: [], traces: [] },
  { id: 110, name: 'Pina Colada', category: 'Drinks', description: 'Tropical pineapple and coconut', price: '9.50', allergens: [], traces: [] },
  { id: 111, name: 'Happy pornstarr', category: 'Drinks', description: 'House special passion fruit cocktail', price: '10.50', allergens: [], traces: [] },
  { id: 112, name: 'Pornstarr martini', category: 'Drinks', description: 'Classic passion fruit martini', price: '10.50', allergens: [], traces: [] },
  { id: 113, name: 'Strawberry daiquiri', category: 'Drinks', description: 'Frozen strawberry daiquiri', price: '9.50', allergens: [], traces: [] },
  { id: 114, name: 'Long island ice tea', category: 'Drinks', description: 'Classic strong mixed cocktail', price: '11.50', allergens: [], traces: [] },
  
  // More Beef dishes
  { id: 115, name: '9 OZ Skirt Steak', category: 'Beef', description: 'Tender skirt steak grilled to perfection', price: '24.50', allergens: ['gluten', 'fish', 'milk'], traces: [] },
  { id: 116, name: '9 OZ Sirloin Steak', category: 'Beef', description: 'Premium sirloin steak', price: '26.50', allergens: ['gluten', 'fish', 'milk'], traces: [] },
  { id: 117, name: '10 OZ Argentinian Rib Eye Steak', category: 'Beef', description: 'Premium Argentinian rib eye', price: '32.50', allergens: ['gluten', 'eggs', 'milk', 'mustard'], traces: [] },
  { id: 118, name: 'Iberico Pork Ribs', category: 'Beef', description: 'Premium Iberico pork ribs', price: '28.50', allergens: ['gluten', 'eggs', 'mustard'], traces: [] },
  
  // Mixed dishes from sixth file
  { id: 119, name: 'Shopska Salad', category: 'Salads', description: 'Traditional Bulgarian salad', price: '8.50', allergens: ['gluten'], traces: [] },
  { id: 120, name: 'Avocado Caprese', category: 'Salads', description: 'Avocado with mozzarella and tomato', price: '9.50', allergens: ['gluten', 'crustaceans', 'mollusc'], traces: [] },
  { id: 121, name: 'Lady Cobb', category: 'Salads', description: 'Elegant Cobb salad variation', price: '11.50', allergens: ['gluten', 'crustaceans'], traces: [] },
  { id: 122, name: 'Mashed Potatoes', category: 'Starters', description: 'Creamy mashed potatoes', price: '4.50', allergens: ['gluten'], traces: [] },
  { id: 123, name: 'Pulled Chicken', category: 'Chicken', description: 'Tender pulled chicken', price: '12.50', allergens: ['gluten', 'eggs'], traces: [] },
  { id: 124, name: 'Nachos', category: 'Starters', description: 'Crispy tortilla chips with toppings', price: '7.50', allergens: [], traces: [] },
  { id: 125, name: 'Fries', category: 'Starters', description: 'Crispy golden fries (Vegetarian)', price: '4.50', allergens: ['eggs'], traces: [] },
  { id: 126, name: 'Sweet potato Fries', category: 'Starters', description: 'Crispy sweet potato fries (Vegan)', price: '5.50', allergens: [], traces: [] },
  { id: 127, name: 'Homemade Guacamole', category: 'Starters', description: 'Fresh avocado guacamole (Vegan)', price: '6.50', allergens: ['gluten', 'milk'], traces: [] },
  { id: 128, name: 'BBQ pork ribs', category: 'Beef', description: 'Smoky BBQ pork ribs', price: '22.50', allergens: ['crustaceans'], traces: [] },
  { id: 129, name: 'Humus & Guacamole', category: 'Starters', description: 'Chickpea hummus with guacamole (Vegan)', price: '7.50', allergens: ['gluten', 'eggs', 'lupin', 'milk'], traces: [] },
  { id: 130, name: 'Grilled Calamari', category: 'Seafood', description: 'Fresh grilled squid', price: '14.50', allergens: ['gluten', 'nuts'], traces: [] },
  
  // Desserts
  { id: 131, name: 'Chocolate Souffle', category: 'Desserts', description: 'Rich chocolate souffle', price: '7.50', allergens: ['celery', 'crustaceans', 'fish', 'mollusc'], traces: [] },
  { id: 132, name: 'Vegetarian Pornstar Chocolate mousse', category: 'Desserts', description: 'Passion fruit chocolate mousse (Vegetarian)', price: '6.50', allergens: ['celery', 'crustaceans', 'fish'], traces: [] },
  { id: 133, name: 'Oreo loaded croissant', category: 'Desserts', description: 'Croissant stuffed with Oreos', price: '8.50', allergens: ['celery', 'crustaceans', 'fish', 'lupin', 'milk'], traces: [] },
  { id: 134, name: 'Crème Brulee', category: 'Desserts', description: 'Classic French crème brûlée', price: '6.50', allergens: ['celery', 'fish'], traces: [] },
  { id: 135, name: 'Vegetarian Cookies & Cream Cake', category: 'Desserts', description: 'Cookies and cream layer cake (Vegetarian)', price: '7.50', allergens: ['celery', 'crustaceans', 'eggs', 'fish', 'lupin', 'milk'], traces: [] },
  { id: 136, name: 'Dubai Bowl', category: 'Desserts', description: 'Signature Dubai dessert bowl', price: '9.50', allergens: ['celery', 'crustaceans', 'eggs', 'fish', 'lupin'], traces: [] },
  { id: 137, name: 'Dubai Waffle', category: 'Desserts', description: 'Premium Dubai-style waffle', price: '8.50', allergens: ['celery', 'crustaceans', 'fish', 'milk'], traces: [] },
  { id: 138, name: 'Dubai Strawberries', category: 'Desserts', description: 'Gold-dusted strawberries', price: '12.50', allergens: ['celery', 'fish', 'milk'], traces: [] },
  { id: 139, name: 'Happy tiramisu', category: 'Desserts', description: 'House special tiramisu', price: '7.50', allergens: ['celery', 'crustaceans', 'eggs', 'fish', 'lupin', 'milk'], traces: [] },
  { id: 140, name: 'Freshly baked cookie dough', category: 'Desserts', description: 'Warm cookie dough dessert', price: '6.50', allergens: ['celery', 'crustaceans', 'eggs', 'fish', 'lupin'], traces: [] },
  { id: 141, name: 'Ice Cream', category: 'Desserts', description: 'Selection of ice cream flavors', price: '4.50', allergens: ['celery', 'fish'], traces: [] },
  { id: 142, name: 'Sorbet', category: 'Desserts', description: 'Fresh fruit sorbet (Vegan)', price: '4.50', allergens: ['soya'], traces: [] }
];

export const ALLERGEN_LIST = [
  { key: "celery", icon: "🥬" },
  { key: "gluten", icon: "🌾" },
  { key: "crustaceans", icon: "🦐" },
  { key: "eggs", icon: "🥚" },
  { key: "fish", icon: "🐟" },
  { key: "lupin", icon: "🌱" },
  { key: "milk", icon: "🥛" },
  { key: "mollusc", icon: "🦪" },
  { key: "mustard", icon: "🌿" },
  { key: "nuts", icon: "🌰" },
  { key: "peanuts", icon: "🥜" },
  { key: "sesame", icon: "🌾" },
  { key: "soya", icon: "🌿" },
  { key: "sulphur", icon: "⚡" }
];

export const CATEGORIES = ["All", "Salads", "Starters", "Seafood", "Asia", "Mexico", "Burgers", "Pasta", "Chicken", "Beef", "Drinks", "Desserts"];