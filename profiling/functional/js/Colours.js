export const colours = {
  main: "#CB66A7",
  rowOne: "rgba(183, 0, 76, 0.5)",
  rowTwo: "rgba(198, 0, 81, 0.5)",
  rowThree: "rgba(216, 0, 88, 0.5)",
  rowFour: "rgba(234, 0, 95, 0.5)",
  rowFive: "rgba(255, 0, 103, 0.5)",
  rowSix: "rgba(255, 10, 109, 0.5)",
  rowSeven: "rgba(255, 25, 118, 0.5)",
  rowEight: "rgba(255, 40, 127, 0.5)",
  rowNine: "rgba(255, 56, 136, 0.5)",
  rowTen: "rgba(255, 71, 150, 0.5)",
  rowEleven: "rgba(255, 99, 161, 0.5)",
  rowTwelve: "rgba(255, 112, 168, 0.5)",
  rowThirteen: "rgba(255, 127, 177, 0.5)",
  rowFourteen: "rgba(255, 142, 186, 0.5)"
};

export const whichColour = function(yPostion) {
  switch (yPostion) {
    case 0:
      return colours.rowOne;
    case 1:
      return colours.rowTwo;
    case 2:
      return colours.rowThree;
    case 3:
      return colours.rowFour;
    case 4:
      return colours.rowFive;
    case 5:
      return colours.rowSix;
    case 6:
      return colours.rowSeven;
    case 7:
      return colours.rowEight;
    case 8:
      return colours.rowNine;
    case 9:
      return colours.rowTen;
    case 10:
      return colours.rowEleven;
    case 11:
      return colours.rowTwelve;
    case 12:
      return colours.rowThirteen;
    case 13:
      return colours.rowFourteen;
  }
};
