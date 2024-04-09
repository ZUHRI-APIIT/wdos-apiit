document.addEventListener('alpine:init', () => {
  Alpine.store('home', {
      elephant_card: {
          title: 'Explore the World of Sri Lankan Elephants',
          sub_title: 'Learn about their complex social structures, playful interactions, and vital role in shaping ecosystems.',
          body: "Did you know? Sri Lanka boasts the highest density of Asian elephants in the world, with over 5,000 individuals.",
          
      },
      leopard_card: {
          title: 'Embark on a Thrilling Quest for Sri Lankan Leopards',
          sub_title: 'Discover their incredible hunting skills, solitary nature, and vital role in maintaining ecological balance.',
          body: "Interesting fact: The Sri Lankan leopard is a unique subspecies, smaller than its African counterparts.",
        
      },

      bird_card: {
          title: 'Symphony of Feathers: Sri Lankas Bird Kingdom',
          sub_title: 'Immerse yourself in the symphony of Sri Lankas bird kingdom, where over 450 species paint the skies with their colors and fill the air with their songs.',
          body: "Fun fact: Sri Lanka is a birder's paradise, boasting several endemic species found nowhere else on Earth.",
          
      },

      list1: {
          title: 'Interesting Facts',
          num1: 'Sri Lanka is home to 16 endemic mammals, including the sloth bear, the toque macaque, and the slender loris.',
          num2: 'Over 100 reptile and amphibian species thrive in diverse habitats, including the colorful Sri Lankan green pit viper and the rare hump-nosed lizard.',
          num3: 'Five marine turtle species nest on the island\'s sandy beaches, making it a crucial nesting ground for these endangered creatures.',
      },

      list2: {
          title: 'Wildlife Activities',
          num1: 'Witness the annual elephant gathering at Minneriya National Park, one of the largest gatherings of land mammals in the world.',
          num2: 'Go whale watching off the coast of Mirissa, where you might encounter blue whales, the largest animals on Earth.',
          num3: 'Hike through Sinharaja Forest, a UNESCO World Heritage Site and a treasure trove of endemic flora and fauna.',
      }
  });
});



