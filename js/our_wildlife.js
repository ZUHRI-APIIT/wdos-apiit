document.addEventListener('alpine:init', () => {
    Alpine.store('our_wildlife', {
        card1: {
            title: '1. Horton Plains National Park',
            sub_title: 'Location: Central highlands, Nuwara Eliya district',
            body: "Immerse yourself in a mystical world of misty mountains, rolling grasslands, and\
            crystal-clear waterfalls. Hike through the enchanting Baker's Falls trail, or witness the\
            captivating sunrise over World's End, a sheer 1,270m precipice. Keep an eye out for sambar deer,\
            elusive toque macaques, and the endemic purple-faced langur monkeys.",

        },
        card2: {
            title: '2. Minneriya National Park',
            sub_title: 'Location: North Central province, Polonnaruwa district',
            body: "Witness the awe-inspiring \'Gathering'\ where hundreds of Asian elephants congregate\
            around the Minneriya reservoir during the dry season (June-October). Explore ancient ruins and\
            lush forests, spotting sloth bears, leopard tortoises, and over 170 bird species.",

        },
        card3: {
            title: '3. Udawalawe National Park',
            sub_title: 'Location: Sabaragamuwa province, Ratnapura district',
            body: "Embark on a safari through pristine grasslands and witness the largest recorded wild\
            elephant population in Sri Lanka. Observe herds grazing around the serene Udawalawe Reservoir,\
            and keep an eye out for spotted deer, water buffaloes, and the majestic peacock.",

        },
    });
});