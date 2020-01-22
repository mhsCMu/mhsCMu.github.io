function colorCollide(collisionColor,checkColor){
  let kaboom = true;
  for (let i=0; i<4; i++){
    if(checkColor[i]!=collisionColor[i]){
      //If any of the values are NOT the same
      //then NO collision has taken place
      kaboom = false;
      break;
    }
  }
  return kaboom;
}
