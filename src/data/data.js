const animalsData = [
  {
    name: "Echidna",
    img_url: "echidna.png",
    description:
      "Echidnas are spiny, egg-laying mammals with hollow quills, found throughout Australia.",
    bigDescription: `Echidnas are fascinating monotremes that lay eggs rather than giving birth to live young. They have spiny fur, and use their long sticky tongue to catch ants and termites. Echidnas are found throughout Australia and New Guinea in various habitats. Despite their spiky appearance, they are shy and solitary animals that use their powerful claws to dig for food and create burrows. Echidnas have a low body temperature compared to other mammals and possess electroreceptors in their snouts to help detect prey underground.`,
    diet: "Insectivore",
    category: "Mammals",
  },
  {
    name: "Tasmanian Devil",
    img_url: "tasdevil.png",
    description:
      "Stocky marsupial with a loud screech and strong bite, native to Tasmania and now in New South Wales.",
    bigDescription: `The Tasmanian Devil is the largest carnivorous marsupial, known for its fierce temperament and powerful jaws capable of crushing bone. Native to Tasmania, these animals are nocturnal scavengers and hunters, feeding on carrion and small animals. They communicate with loud screeches and growls during social interactions. Unfortunately, the species is endangered due to a contagious cancer known as Devil Facial Tumour Disease (DFTD), which has severely impacted populations over the last decades.`,
    diet: "Carnivore",
    category: "Mammals",
  },
  {
    name: "Quokka",
    img_url: "quokka.png",
    description:
      "A friendly-looking small marsupial resembling a wallaby, native to Rottnest Island and Western Australia.",
    bigDescription: `Quokkas are small herbivorous marsupials that are famous for their seemingly smiling faces, making them popular on social media. They inhabit small islands off the coast of Western Australia, particularly Rottnest Island. Quokkas are nocturnal and feed mainly on grasses and leaves. Despite their cute appearance, they are wild animals and should not be fed by humans. Their populations are stable, but habitat loss and introduced predators are concerns for their long-term survival.`,
    diet: "Herbivore",
    category: "Mammals",
  },
  {
    name: "Frill-necked Lizard",
    img_url: "frill-lizard.png",
    description:
      "Displays a colorful frill when threatened, found in Northern Australia.",
    bigDescription: `The Frill-necked Lizard is a distinctive reptile known for the large frill around its neck, which it expands when threatened to appear larger and scare off predators. Found primarily in northern Australia and New Guinea, these lizards are arboreal and primarily insectivorous. They are fast runners and use their tail for balance when climbing trees. Their unique defensive display is one of the most recognizable reptile behaviors in Australia.`,
    diet: "Insectivore",
    category: "Reptiles",
  },
  {
    name: "Hawksbill Turtle",
    img_url: "hawksbill-turtle.png",
    description:
      "A sea turtle with a bird-like beak and serrated shell edges, found along tropical Australian coasts.",
    bigDescription: `The Hawksbill Turtle is a critically endangered sea turtle species found in tropical coral reefs, including those around Australia. It has a pointed, bird-like beak used to extract sponges and other invertebrates from crevices. Hawksbill turtles play an important role in maintaining the health of coral reefs by controlling sponge populations. They face threats from habitat destruction, illegal trade of their shells (known as tortoiseshell), and climate change.`,
    diet: "Omnivore",
    category: "Reptiles",
  },
  {
    name: "Perentie",
    img_url: "perentie.png",
    description:
      "Australia’s largest monitor lizard, shy and found in arid deserts.",
    bigDescription: `The Perentie is the largest monitor lizard native to Australia, reaching lengths of up to 2.5 meters. It inhabits arid desert regions and rocky outcrops in Western Australia, South Australia, and the Northern Territory. Perenties are carnivorous predators feeding on insects, smaller reptiles, birds, and mammals. Despite their size, they are elusive and tend to avoid humans. They are powerful and fast runners with strong limbs and claws for digging and climbing.`,
    diet: "Carnivore",
    category: "Reptiles",
  },
  {
    name: "Cassowary",
    img_url: "cassowary.png",
    description:
      "Large, flightless bird with powerful legs, known for rare but dangerous attacks.",
    bigDescription: `The Cassowary is a large flightless bird native to the tropical rainforests of Northern Australia and New Guinea. Recognizable by its bright blue neck, casque (helmet-like structure) on its head, and powerful legs equipped with sharp claws, it is considered one of the most dangerous birds if provoked. Cassowaries are shy but territorial and play a key role in seed dispersal for many rainforest plants. They primarily feed on fruits but also consume small animals and fungi.`,
    diet: "Omnivore",
    category: "Birds",
  },
  {
    name: "Kookaburra",
    img_url: "kookaburra.png",
    description:
      "Known for its loud laughing call, this bird preys on small reptiles and insects.",
    bigDescription: `The Kookaburra is famous for its distinctive laughing call, which is often heard at dawn and dusk across Australian woodlands and suburban areas. It is a kingfisher species that primarily feeds on insects, small reptiles, and amphibians. Kookaburras are territorial birds that use their loud calls to mark their boundaries. They nest in tree hollows and often live in family groups. Their presence is considered a sign of a healthy ecosystem.`,
    diet: "Carnivore",
    category: "Birds",
  },
  {
    name: "Cockatoo",
    img_url: "cockatoo.png",
    description:
      "Large parrot with scalloped feathers and a striking yellow tail band, found in southeastern Australia.",
    bigDescription: `Cockatoos are highly social, intelligent birds known for their loud calls, crested heads, and playful behavior. The Sulphur-crested Cockatoo, one common species, has white feathers with a striking yellow crest and tail band. They live in woodlands and urban areas, feeding on seeds, nuts, fruits, and insects. Cockatoos form strong pair bonds and are known to live in large flocks. They have the ability to mimic human speech and sounds.`,
    diet: "Herbivore",
    category: "Birds",
  },
];

export const slideshowImages = {
  mammals: [
    { img_url: "mammal1.jpg", label: "Elephant - Mammal" },
    { img_url: "mammal2.jpg", label: "Kangaroo - Mammal" },
    { img_url: "mammal3.jpg", label: "Koala - Mammal" },
    { img_url: "lionmammal.jpg", label: "Lion - Mammal" },
    { img_url: "mammal4.jpg", label: "Tasmanian Devil - Mammal" },
    { img_url: "mammal5.jpg", label: "Wild Dingo - Mammal" },
    { img_url: "mammal6.jpg", label: "Echidna - Mammal" },
    { img_url: "mammal7.jpg", label: "Platypus - Mammal" },
    { img_url: "mammal8.jpg", label: "Platypus - Mammal" },
    { img_url: "mammal9.jpg", label: "Platypus - Mammal" },
  ],
  reptiles: [
    { img_url: "reptile1.jpg", label: "Snake - Reptile" },
    { img_url: "reptile2.jpg", label: "Snake - Reptile" },
    { img_url: "reptile3.jpg", label: "Snake - Reptile" },
    { img_url: "reptile4.jpg", label: "Snake - Reptile" },
    { img_url: "reptile5.jpg", label: "Snake - Reptile" },
    { img_url: "reptile6.jpg", label: "Snake - Reptile" },
    { img_url: "reptile7.jpg", label: "Snake - Reptile" },
    { img_url: "reptile.jpg", label: "Snake - Reptile" },
    { img_url: "reptile8.jpg", label: "Snake - Reptile" },
    { img_url: "reptile9.jpg", label: "Snake - Reptile" },
  ],
  birds: [
    { img_url: "bird1.jpg", label: "Eagle - Bird" },
    { img_url: "bird2.jpg", label: "Eagle - Bird" },
    { img_url: "bird3.jpg", label: "Eagle - Bird" },
    { img_url: "bird4.jpg", label: "Eagle - Bird" },
    { img_url: "bird5.jpg", label: "Eagle - Bird" },
    { img_url: "birds.jpg", label: "Eagle - Bird" },
    { img_url: "bird6.jpg", label: "Eagle - Bird" },
    { img_url: "bird7.jpg", label: "Eagle - Bird" },
    { img_url: "bird8.jpg", label: "Eagle - Bird" },
    { img_url: "bird9.jpg", label: "Eagle - Bird" },
  ],
};

export const categoryInfo = {
  mammals: {
    title: "Mammals",
    welcomeMessage: "Welcome to the Mammals section!",
    description: "Explore the diverse and fascinating mammals of Australia...",
    bgImage: "redpanda.jpg",
  },
  reptiles: {
    title: "Reptiles",
    welcomeMessage: "Welcome to the Reptiles section!",
    description: "Learn about Australia's incredible reptiles...",
    bgImage: "reptile.jpg",
  },
  birds: {
    title: "Birds",
    welcomeMessage: "Welcome to the Birds section!",
    description: "Discover the vibrant birdlife of Australia...",
    bgImage: "bird3.jpg",
  },
};

export const defaultCategoryInfo = {
  title: "Animals",
  welcomeMessage: "Welcome!",
  description: "Explore our amazing wildlife.",
  bgImage: "default-bg.jpg",
};

const animalCategories = [...new Set(animalsData.map((animal) => animal.category))];
const allCategories = [...animalCategories];

export const allAnimals = [...animalsData];

export { animalsData, animalCategories, allCategories };