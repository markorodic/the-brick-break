export const colours = {
  main: "#00b771",
  rowOne: "rgba(0, 140, 65, 0.5)",
  rowTwo: "rgba(0, 153, 70, 0.5)",
  rowThree: "rgba(0, 163, 75, 0.5)",
  rowFour: "rgba(0, 175, 80, 0.5)",
  rowFive: "rgba(0, 183, 84, 0.5)",
  rowSix: "rgba(0, 188, 86, 0.5)",
  rowSeven: "rgba(0, 198, 91, 0.5)",
  rowEight: "rgba(0, 201, 92, 0.5)",
  rowNine: "rgba(0, 211, 96, 0.5)",
  rowTen: "rgba(0, 219, 100, 0.5)",
  rowEleven: "rgba(0, 224, 101, 0.5)",
  rowTwelve: "rgba(0, 229, 103, 0.5)",
  rowThirteen: "rgba(0, 239, 108, 0.5)",
  rowFourteen: "rgba(0, 255, 114, 0.5)"
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
