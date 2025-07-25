const Product = require('../models/productModel');

const sampleProducts = [
  {
    name: 'Organic Honey',
    brand: 'NaturePure',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    description: 'Raw, unfiltered organic honey from wildflowers.'
  },
  {
    name: 'Cold-Pressed Coconut Oil',
    brand: 'CocoFresh',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c',
    description: 'Pure, cold-pressed coconut oil for cooking and skincare.'
  },
  {
    name: 'Organic Turmeric Powder',
    brand: 'SpiceRoot',
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc',
    description: 'High-quality, organic turmeric powder for culinary and health uses.'
  },
  {
    name: 'Organic Almonds',
    brand: 'NutriHarvest',
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?ixid=almonds',
    description: 'Crunchy, raw organic almonds packed with nutrients.'
  },
  {
    name: 'Organic Chia Seeds',
    brand: 'Seedly',
    image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?ixid=chiaseeds',
    description: 'High-fiber, omega-3 rich organic chia seeds.'
  },
  {
    name: 'Organic Quinoa',
    brand: 'GrainGold',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=quinoa',
    description: 'Protein-rich, gluten-free organic quinoa.'
  },
  {
    name: 'Organic Green Tea',
    brand: 'LeafyPure',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?ixid=greentea',
    description: 'Refreshing, antioxidant-rich organic green tea.'
  },
  {
    name: 'Organic Brown Rice',
    brand: 'RiceField',
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?ixid=brownrice',
    description: 'Whole grain, fiber-rich organic brown rice.'
  },
  {
    name: 'Organic Peanut Butter',
    brand: 'NuttySpread',
    image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?ixid=peanutbutter',
    description: 'Creamy, all-natural organic peanut butter.'
  },
  {
    name: 'Organic Rolled Oats',
    brand: 'OatFarm',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?ixid=rolledoats',
    description: 'Hearty, whole grain organic rolled oats.'
  },
  {
    name: 'Organic Apple Cider Vinegar',
    brand: 'VinegarWorks',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=acv',
    description: 'Raw, unfiltered organic apple cider vinegar.'
  },
  {
    name: 'Organic Black Beans',
    brand: 'BeanHarvest',
    image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?ixid=blackbeans',
    description: 'Protein-packed, fiber-rich organic black beans.'
  },
  {
    name: 'Organic Sunflower Seeds',
    brand: 'SunnyHarvest',
    image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?ixid=sunflowerseeds',
    description: 'Crunchy, nutrient-rich organic sunflower seeds.'
  },
  {
    name: 'Organic Flaxseed Oil',
    brand: 'OmegaPure',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?ixid=flaxseedoil',
    description: 'Cold-pressed, omega-3 rich organic flaxseed oil.'
  },
  {
    name: 'Organic Goji Berries',
    brand: 'BerryBliss',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=gojiberries',
    description: 'Sweet, antioxidant-packed organic goji berries.'
  },
  {
    name: 'Organic Pumpkin Seeds',
    brand: 'PumpkinPatch',
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?ixid=pumpkinseeds',
    description: 'Toasted, mineral-rich organic pumpkin seeds.'
  },
  {
    name: 'Organic Maple Syrup',
    brand: 'MapleGold',
    image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?ixid=maplesyrup',
    description: 'Pure, grade A organic maple syrup.'
  },
  {
    name: 'Organic Lentils',
    brand: 'LentilLand',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?ixid=lentils',
    description: 'Protein-rich, easy-to-cook organic lentils.'
  },
  {
    name: 'Organic Cashew Butter',
    brand: 'CashewCream',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=cashewbutter',
    description: 'Smooth, creamy organic cashew butter.'
  },
  {
    name: 'Organic Spirulina Powder',
    brand: 'GreenBoost',
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?ixid=spirulina',
    description: 'Nutrient-dense, blue-green organic spirulina powder.'
  },
  {
    name: 'Organic Dried Figs',
    brand: 'FiggyFarms',
    image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?ixid=figs',
    description: 'Sweet, fiber-rich organic dried figs.'
  },
  {
    name: 'Organic Millet',
    brand: 'MilletMakers',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?ixid=millet',
    description: 'Gluten-free, whole grain organic millet.'
  },
  {
    name: 'Organic Pistachios',
    brand: 'PistaFarm',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=pistachios',
    description: 'Premium, unsalted organic pistachios.'
  },
  {
    name: 'Organic Walnuts',
    brand: 'WalnutWorld',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?ixid=walnuts',
    description: 'Omega-3 rich, crunchy organic walnuts.'
  },
  {
    name: 'Organic Hazelnut Spread',
    brand: 'HazelDelight',
    image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?ixid=hazelnutspread',
    description: 'Smooth, chocolatey organic hazelnut spread.'
  },
  {
    name: 'Organic Barley',
    brand: 'BarleyBarn',
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?ixid=barley',
    description: 'Whole grain, fiber-rich organic barley.'
  },
  {
    name: 'Organic Muesli',
    brand: 'MuesliMix',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?ixid=muesli',
    description: 'Nutritious, fruit-packed organic muesli.'
  },
  {
    name: 'Organic Safflower Oil',
    brand: 'SaffyOil',
    image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?ixid=saffloweroil',
    description: 'Light, heart-healthy organic safflower oil.'
  },
  {
    name: 'Organic Raisins',
    brand: 'RaisinRoots',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=raisins',
    description: 'Sweet, sun-dried organic raisins.'
  },
  {
    name: 'Organic Buckwheat',
    brand: 'BuckwheatBest',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?ixid=buckwheat',
    description: 'Gluten-free, protein-rich organic buckwheat.'
  },
  {
    name: 'Organic Coconut Sugar',
    brand: 'CocoSweet',
    image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?ixid=coconutsugar',
    description: 'Low-glycemic, mineral-rich organic coconut sugar.'
  },
  {
    name: 'Organic Red Lentils',
    brand: 'RedLentilFarm',
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?ixid=redlentils',
    description: 'Quick-cooking, protein-rich organic red lentils.'
  },
  {
    name: 'Organic Sun-Dried Tomatoes',
    brand: 'TomatoSun',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?ixid=sundriedtomatoes',
    description: 'Tangy, flavorful organic sun-dried tomatoes.'
  },
  {
    name: 'Organic Edamame',
    brand: 'GreenPod',
    image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?ixid=edamame',
    description: 'Protein-packed, fresh organic edamame.'
  },
  {
    name: 'Organic Blueberries',
    brand: 'BlueBerryHill',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=blueberries',
    description: 'Antioxidant-rich, sweet organic blueberries.'
  },
  {
    name: 'Organic Amaranth',
    brand: 'AmaranthFields',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?ixid=amaranth',
    description: 'Ancient grain, gluten-free organic amaranth.'
  }
];

const importSampleProducts = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(sampleProducts);
    console.log('Sample products inserted!');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = importSampleProducts;

// To run this file as a script, uncomment below:
// if (require.main === module) {
//   require('dotenv').config();
//   require('../config/db')();
//   importSampleProducts();
// }
