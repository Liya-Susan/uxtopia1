// import * as Images from './images/background.jpg';

const cardData = [
    { id: 1, name: 'Miguel', imagePath: 'speakerFront/migginew.png', backPath: 'speakerBack/miguelstb.png' },

    { id: 2, name: 'Charu', imagePath: 'speakerFront/charu.png', backPath: 'speakerBack/charustb.png' },
    {
        id: 3,
        name: 'Ayesha',
        imagePath: 'speakerFront/ayeshanew.png',
        backPath: 'speakerBack/ayeshastb.png',
    },
    {
        id: 4,
        name: 'Evnisha',
        imagePath: 'speakerFront/evnisha.png',
        backPath: 'speakerBack/evnishastb.png',
    },
    {
        id: 5,
        name: 'Joshin',
        imagePath: 'speakerFront/joshin.png',
        backPath: 'speakerBack/joshinstb.png',
    },

    {
        id: 6,
        name: 'Arun',
        imagePath: 'speakerFront/arunnew.png',
        backPath: 'speakerBack/arunstb.png',
    },


    { id: 7, name: 'Rahul', imagePath: 'speakerFront/rahul.png', backPath: 'speakerBack/rahulstb.png' },
];

// export default cardData;

export function addSpeakers() {
    // alert("hello");

    const data = cardData;
    const element = document.getElementById('speakersection');
    var tile;
    var tilefront;
    var tileback;
    var content;
    var title;
    var desc;
    var button;
    var spacer;
    var f;

    var i;
    for (i in data) {
        tile = document.createElement('div');
        tileback = document.createElement('div');
        tilefront = document.createElement('div');
        content = document.createElement('div');
        title = document.createElement('h1');
        desc = document.createElement('p');
        button = document.createElement('a');

        tile.classList.add('speakertile');
        tilefront.classList.add('front');
        tileback.classList.add('back');
        // if ((i % 3) + 1 == 2 || (i % 3) + 1 == 3) {
        //     console.log((i % 3 + 1));
        //     tile.classList.add(`projecttile${(i % 3) + 1}`);
        // }

        // if ((i + 1) % 3 == 1 || (i + 1) % 3 == 0) {
        //     tile.classList.add("speakertile2");
        //     // tileback.classList.add('speakertile2');
        // }
        tilefront.style.backgroundImage = `url('${require(`./images/${data[i]['imagePath']}`)}')`;
        tileback.style.backgroundImage = `url('${require(`./images/${data[i]['backPath']}`)}')`;
        content.appendChild(tilefront);
        content.appendChild(tileback);
        content.classList.add('content');
        tile.appendChild(content);
        element.appendChild(tile);

        // console.log(`url('${data["projects"][i]["imageURL"]}')`);
    }
    spacer = document.createElement('div');
    spacer.classList.add('spacer');
    element.appendChild(spacer);
    // projectHover();
}
