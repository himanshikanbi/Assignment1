const client = io();
client.on('message',function(s){
 console.log(s.livescore)
 var title= document.querySelector('#title')
 title.innerHTML=s.livescore.title;
 var detail= document.querySelector('#details')
 detail.innerHTML+=s.livescore.teamone + '</br>'+ s.livescore.teamtwo ;
 var result= document.querySelector('#result')
 result.innerHTML+=s.livescore.update ;
})
