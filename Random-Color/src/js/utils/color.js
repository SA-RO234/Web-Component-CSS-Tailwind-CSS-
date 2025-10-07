export  const getRandomColor = () =>{
     const randomCo = Math.floor(Math.random() * 16777215).toString(16);
     return `#${randomCo.padStart(6,'0')}`;
}