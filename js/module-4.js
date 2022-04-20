
//forEach///
//const numbers = [5, 10, 15, 20, 25];
//numbers.forEach(function (number, index) {
/// console.log('number', number);
//});

//Map//
//const numbers = [5, 10, 15, 20, 25];
//const doubledNus = numbers.map(number => {
    //console.log(number);
   // return number * 2;
//})
//console.log('doubledNus', doubledNus);

///Масив об'єктів//

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

//Перший варіант //
//const playerNames = players.map(player => {
    //console.log(player);
    //return player.name;
//});
//console.log('playerNames', playerNames);


//Другий варіант //
//const playerNames = players.map(player => player.name);
//console.log('playerNames', playerNames);

//const playerIds = players.map(player => player.id);
//console.log('playerIds', playerIds);

//const upatedPlayers = players.map(player => {
    //console.log(player);
    //return {
        //...player,
       // points: player.points * 1.1,
    //}
//});
//console.table(upatedPlayers);
//console.log(upatedPlayers);


/*
 * Увеличиваем кол-во часов игрока по id
 */
const playerIdToUpdate = 'player-3';
const upatedPlayers = players.map(player => {
    console.
    return
})
