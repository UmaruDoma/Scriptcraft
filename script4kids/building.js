function building() {
drone.box("DIRT",5,5,5);
drone.fwd(1);
drone.right(1);
drone.box("QUARTZ_BLOCK",3,10,3);
drone.up(10);
drone.box("DIAMOND_BLOCK",3,3,3);
drone.up(3);
for (var count2 = 0; count2 < 4; count2++) {
  for (var count = 0; count < 1; count++) {
    drone.box0("DIAMOND_BLOCK",1,1,1);
    drone.fwd(2);
  }
  drone.turn(1);
}
drone.down(12);
drone.back(10);
drone.left(8);
drone.box0("YELLOW_WOOL",21,2,21);
drone.up(2);
for (var count4 = 0; count4 < 4; count4++) {
  for (var count3 = 0; count3 < 10; count3++) {
    drone.box("YELLOW_WOOL",1,1,1);
    drone.fwd(2);
  }
  drone.turn(1);
}
drone.turn(1);
drone.back(1);
drone.down(2);
drone.fwd(1);
drone.turn(3);
for (var count6 = 0; count6 < 4; count6++) {
  for (var count5 = 0; count5 < 10; count5++) {
    drone.box("QUARTZ_BLOCK",1,1,1);
    drone.fwd(2);
  }
  drone.turn(1);
}
drone.down(1);
drone.box("LIME_WOOL",21,1,21);
};
building();
player.sendMessage("Done!");
